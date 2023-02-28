import React, { FC, memo, useState, useEffect } from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { packNameCardSelector, packUserIdCardSelector } from '../cardSelectors'

import s from './CardHeader.module.scss'

import { setModalStatus } from 'app/appSlice'
import defaultCover from 'assets/notFound.jpg'
import { Button } from 'common/components/Button/Button'
import { PackMenu } from 'common/components/PackMenu/PackMenu'
import { PATH } from 'common/constans/path'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { userNameHandler } from 'common/utils'
import { authUserIdSelector, authUserInfoSelector } from 'features/auth/authSelectors'
import { packDeckCover } from 'features/packs/packsSelectors'

type CardHeaderType = {}

export const CardHeader: FC<CardHeaderType> = memo(({}) => {
  const dispatch = useDispatch()
  const { id } = useParams<{ id: string }>()
  const deCover = useAppSelector(packDeckCover)
  const navigate = useNavigate()
  const userId = useAppSelector(authUserIdSelector)
  const packUserId = useAppSelector(packUserIdCardSelector)
  const packName = useAppSelector(packNameCardSelector)
  const pack = useAppSelector(state => state.packs.cardPacks.find(p => p._id === id))
  const packByName = pack ? pack.user_name : 'Unknown...'
  const user = useAppSelector(authUserInfoSelector)
  const isMyCard = userId === packUserId
  const [isAvaBroken, setIsAvaBroken] = useState(false)

  const img = deCover ? deCover : defaultCover

  const openModalHandler = () => {
    dispatch(setModalStatus('CardForm'))
  }

  const onImgErrorHandler = () => {
    setIsAvaBroken(true)
  }

  return (
    <div className={s.innerWrapper}>
      <div className={s.wrapper}>
        {isMyCard ? (
          <>
            <div className={s.avaContainer}>
              <div className={s.innerAvaWrapper}>
                <img
                  className={s.ava}
                  src={isAvaBroken ? defaultCover : img}
                  alt="cover"
                  onError={onImgErrorHandler}
                />
              </div>
            </div>
            <PackMenu title={userNameHandler(packName, 120)} packId={id} />
          </>
        ) : (
          <>
            <div className={s.avaContainer}>
              <div className={s.innerAvaWrapper}>
                <img
                  className={s.ava}
                  src={isAvaBroken ? defaultCover : img}
                  alt="cover"
                  onError={onImgErrorHandler}
                />
              </div>
            </div>
            <h2 className={s.title}>{packName}</h2>
          </>
        )}
        {/*{!isMyCard && <div>{`@${packByName}`}</div>}*/}
      </div>
      {isMyCard ? (
        <Button onClick={openModalHandler} className={s.btn}>
          Add new card
        </Button>
      ) : (
        <Button
          onClick={() => navigate(PATH.CARD_LEARN)}
          className={s.btn}
          disabled={pack && pack.cardsCount === 0}
        >
          Learn to pack
        </Button>
      )}
    </div>
  )
})
