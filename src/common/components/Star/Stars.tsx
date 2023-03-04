import React, { memo, useState } from 'react'

import { Star } from './Star/Star'
import s from './Stars.module.scss'

import { useAppSelector, useAppDispatch } from 'common/hooks'
import { setGrade } from 'features/cards/LearnCardPage/learnCardSlice'

export const Stars = memo(() => {
  const [active, setActive] = useState(1)
  const dispatch = useAppDispatch()

  const gradesCardLearn = useAppSelector(state => state.learnCard.learnCard)

  return (
    <>
      {gradesCardLearn.map((g, i) => {
        const onClickHandler = () => {
          setActive(index)
          dispatch(setGrade(index))
        }
        const index = i + 1

        return (
          <div onClick={onClickHandler} key={g.id} className={s.starBlock}>
            <div className={s.hoverBlock}>
              <Star active={index <= active} />
              <div className={s.text}>{g.title}</div>
            </div>
          </div>
        )
      })}
    </>
  )
})
