import React, { memo, useCallback, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { cardSelector, packNameCardSelector } from '../CardList/cardSelectors'
import { setSearchCardParams, updatedGradeTC } from '../cardSlice'
import { CardType } from '../cardType'
import s from '../LearnCardPage/LearnCardPage.module.scss'

import { LearnCardItem } from './LearnCardItem/LearnCardItem'
import { resetStatus, setGrade } from './learnCardSlice'

import arrow from 'assets/arrow.svg'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { getCard } from 'common/utils/getCard'

const LearnCardPage = memo(() => {
  const [isChecked, setIsChecked] = useState<boolean>(false)
  const grade = useAppSelector(state => state.learnCard.grade)

  console.log(grade)

  const packName = useAppSelector(packNameCardSelector)
  const cards = useAppSelector(cardSelector)
  const navigate = useNavigate()
  const dispatch = useAppDispatch()

  const [card, setCard] = useState<CardType>(cards[0])

  const onNext = useCallback(() => {
    dispatch(updatedGradeTC({ grade: grade, card_id: card._id })).then(() => dispatch(setGrade(1)))
    setIsChecked(false)
    dispatch(resetStatus())
    if (cards.length > 0) {
      setCard(getCard(cards))
    }
  }, [grade, card._id, cards])

  const onShowAnswer = useCallback(() => {
    setIsChecked(true)
  }, [])

  const onClickBackWard = () => {
    dispatch(setSearchCardParams({ page: 1, pageCount: 4 }))

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
            onNext={onNext}
            onShowAnswer={onShowAnswer}
          />
        </div>
      </div>
    </div>
  )
})

export default LearnCardPage
