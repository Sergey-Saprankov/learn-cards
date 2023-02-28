import React, { memo } from 'react'

import s from './Thead.module.scss'

import { CardListType, PackListType, setSortStatusCards, setSortStatusPack } from 'app/appSlice'
import sort from 'assets/sortTable.svg'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { classNames } from 'common/utils/classNames'
import { setSearchCardParams } from 'features/cards/cardSlice'
import { setSearchParams } from 'features/packs/packsSlice'

type TheadType = {
  packList?: PackListType
  cardList?: CardListType
  className?: string
}

export const Thead: React.FC<TheadType> = memo(({ packList, cardList, className }) => {
  const dispatch = useAppDispatch()
  const params = useAppSelector(state => state.packs.searchParams)
  const sortParam = packList ? packList : cardList

  const thList = sortParam?.map((el, i) => {
    const sortHandler = () => {
      const status = el.status === 0 ? 1 : 0

      if (packList) {
        const newPacksList = packList.map(p =>
          p.title === el.title ? { ...p, status: status } : p
        )

        dispatch(setSortStatusPack(newPacksList))
        dispatch(setSearchParams({ ...params, sortPack: `${status}${el.sortName}` }))
      }
      if (cardList) {
        const newPacksList = cardList.map(p =>
          p.title === el.title ? { ...p, status: status } : p
        )

        dispatch(setSortStatusCards(newPacksList))
        dispatch(setSearchCardParams({ ...params, sortCards: `${status}${el.sortName}` }))
      }
    }

    return (
      <th style={{ width: `${el.size}vw` }} key={i + 1} className={s.th}>
        <div className={s.titleContainer}>
          <span className={s.sortText}>{el.title}</span>
          {el.title !== 'Actions' && (
            <img
              onClick={sortHandler}
              className={el.status === 1 ? s.iconSort : `${s.iconSort} ${s.rotate}`}
              src={sort}
              alt="sort"
            />
          )}
        </div>
      </th>
    )
  })

  return (
    <thead className={s.header}>
      <tr className={s.tr}>{thList}</tr>
    </thead>
  )
})
