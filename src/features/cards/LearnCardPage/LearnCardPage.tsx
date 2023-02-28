import React, { memo, useCallback, useEffect, useState } from 'react'

import { useNavigate, useParams } from 'react-router-dom'

import { cardSelector, packNameCardSelector } from '../CardList/cardSelectors'
import { fetchCardTC, setSearchCardParams, updatedGradeTC } from '../cardSlice'
import { CardType } from '../cardType'
import s from '../LearnCardPage/LearnCardPage.module.scss'

import { LearnCardItem } from './LearnCardItem/LearnCardItem'
import { AnswerStatuses, changeStatus, resetStatus } from './learnCardSlice'

import arrow from 'assets/arrow.svg'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { getCard } from 'common/utils/getCard'

export const LearnCardPage = memo(() => {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const [grade, setGrade] = useState<number>(0)
  const [first, setFirst] = useState<boolean>(false)
  const { id } = useParams<{ id: string }>()

  const packName = useAppSelector(packNameCardSelector)
  const cards = useAppSelector(cardSelector)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  console.log(cards)

  const [card, setCard] = useState<CardType>(cards[0])

  useEffect(() => {
    if (!id) return
    if (first) {
      dispatch(fetchCardTC(id))
      setFirst(false)
    }

    if (cards.length > 0) setCard(getCard(cards))
  }, [id, cards, first, grade, dispatch])

  const onChangeChecked = useCallback(
    (isActive: AnswerStatuses, grade: number) => {
      setGrade(grade)
      dispatch(resetStatus())
      dispatch(changeStatus({ id: grade, status: isActive }))
    },
    [dispatch]
  )

  const onNext = useCallback(() => {
    dispatch(updatedGradeTC({ grade: grade, card_id: card._id }))
    setIsChecked(false)
    dispatch(resetStatus())
    if (cards.length > 0) {
      setCard(getCard(cards))
    }
  }, [grade, card._id, cards, dispatch])

  const onShowAnswer = useCallback(() => {
    setIsChecked(true)
  }, [])

  const onClickBackWard = () => {
    dispatch(setSearchCardParams({ page: 1, pageCount: 10 }))

    return navigate(-1)
  }

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div className={s.innerWrapper}>
          <div onClick={onClickBackWard} className={s.linkBackward}>
            <img className={s.arrow} src={arrow} alt="arrow backward" />
            <span className={s.backwardText}>Back to Packs List</span>
          </div>
          <LearnCardItem
            title={packName}
            card={card}
            isChecked={isChecked}
            onChangeChecked={onChangeChecked}
            onNext={onNext}
            onShowAnswer={onShowAnswer}
          />
        </div>
      </div>
    </div>
  )
})