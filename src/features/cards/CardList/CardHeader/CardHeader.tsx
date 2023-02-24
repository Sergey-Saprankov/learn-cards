import React, { FC, memo } from 'react'

import { useDispatch } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom'

import { packNameCardSelector, packUserIdCardSelector } from '../cardSelectors'

import s from './CardHeader.module.scss'

import { setModalStatus } from 'app/appSlice'
import { Button } from 'common/components/Button/Button'
import { PackMenu } from 'common/components/PackMenu/PackMenu'
import { PATH } from 'common/constans/path'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { authUserIdSelector } from 'features/auth/authSelectors'

type CardHeaderType = {}

export const CardHeader: FC<CardHeaderType> = memo(({}) => {
  const dispatch = useDispatch()
  const { id } = useParams<{ id: string }>()
  const navigate = useNavigate()
  const userId = useAppSelector(authUserIdSelector)
  const packUserId = useAppSelector(packUserIdCardSelector)
  const packName = useAppSelector(packNameCardSelector)
  const pack = useAppSelector(state => state.packs.cardPacks.find(p => p._id === id))
  const packByName = pack ? pack.user_name : 'Unknown...'

  const isMyCard = userId === packUserId

  const openModalHandler = () => {
    dispatch(setModalStatus('CardForm'))
  }

  return (
    <div className={s.innerWrapper}>
      <div className={s.wrapper}>
        {isMyCard ? (
          <PackMenu title={packName} packId={id} />
        ) : (
          <h2 className={s.title}>{packName}</h2>
        )}
        {!isMyCard && <div>{`@${packByName}`}</div>}
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
