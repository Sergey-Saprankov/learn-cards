import React, { FC, memo, useRef, useState } from 'react'

import { useAppSelector } from '../../hooks'

import { Star } from './Star/Star'
import s from './Stars.module.scss'

export const Stars = memo(() => {
  const [active, setActive] = useState(1)

  const gradesCardLearn = useAppSelector(state => state.learnCard.learnCard)

  return (
    <>
      {gradesCardLearn.map((g, i) => {
        const index = i + 1

        return (
          <div onClick={() => setActive(index)} key={g.id} className={s.starBlock}>
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
