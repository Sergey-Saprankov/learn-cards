import React, { useEffect } from 'react'

import {
  packsCountOnPageSelector,
  packsListSelector,
  packsMaxSelector,
  packsMinSelector,
  packsNameSelector,
  packsPageSelector,
  packsSelector,
  packsSortSelector,
  packsTotalPageCountSelector,
  packsUserIdSelector,
} from '../packsSelectors'

import s from './PackList.module.scss'
import { PacksHeader } from './PacksHeader/PacksHeader'

import { EmptyPackSearch } from 'common/components/EmptyPackSearch/EmptyPackSearch'
import SuperPagination from 'common/components/IgnatTasksComponents/c9-SuperPagination/SuperPagination'
import { Search } from 'common/components/Search/Search'
import { SearchPanel } from 'common/components/SearchPanel/SearchPanel'
import { Sort } from 'common/components/Sort/Sort'
import { TablePackListWrapper } from 'common/components/Table/TablePackListWrapper/TablePackListWrapper'
import { Thead } from 'common/components/Table/Thead/Thead'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { isLoggedInSelector } from 'features/auth/authSelectors'
import { TbodyPack } from 'features/packs/PackList/TbodyPack/TbodyPack'
import { fetchPacksTC, setSearchParams } from 'features/packs/packsSlice'

export const PackList = () => {
  const packList = useAppSelector(packsListSelector)
  const packs = useAppSelector(packsSelector)
  const isLoggedIn = useAppSelector(isLoggedInSelector)
  const pageCount = useAppSelector(packsCountOnPageSelector)
  const totalPagesCount = useAppSelector(packsTotalPageCountSelector)
  const page = useAppSelector(packsPageSelector)
  const max = useAppSelector(packsMaxSelector)
  const min = useAppSelector(packsMinSelector)
  const user_id = useAppSelector(packsUserIdSelector)
  const sortPack = useAppSelector(packsSortSelector)
  const packName = useAppSelector(packsNameSelector)
  const emptyCheck = packName !== '' && packs.length === 0

  const dispatch = useAppDispatch()

  const onChange = (page: number, pageCount: number) => {
    dispatch(setSearchParams({ page, pageCount }))
  }

  const searchByName = (value: string) => {
    dispatch(setSearchParams({ packName: value }))
  }

  useEffect(() => {
    if (!isLoggedIn) {
      return
    }
    dispatch(fetchPacksTC())
  }, [page, pageCount, min, max, sortPack, user_id, packName, dispatch, isLoggedIn])

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.innerWrapper}>
          <PacksHeader title={'Packs list'} buttonTitle={'Add new pack'} />
          <SearchPanel>
            <Search initialValue={packName} onChange={searchByName} />
            <Sort />
          </SearchPanel>
          {emptyCheck ? (
            <EmptyPackSearch />
          ) : (
            <>
              <TablePackListWrapper>
                <Thead packList={packList} />
                <TbodyPack packs={packs} />
              </TablePackListWrapper>
              <SuperPagination
                page={page}
                totalCount={totalPagesCount}
                itemsCountForPage={pageCount}
                onChange={onChange}
              />
            </>
          )}
        </div>
      </div>
    </div>
  )
}
