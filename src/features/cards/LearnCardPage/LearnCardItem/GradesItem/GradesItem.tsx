import React, { FC, memo } from 'react'

import { AnswerStatuses } from '../../learnCardSlice'

import s from './GradesItem.module.scss'

import { Stars } from 'common/components/Star/Stars'

type GradesItemType = {}

export const GradesItem: FC<GradesItemType> = memo(({}) => {
  return (
    <div className={s.gradesItem}>
      <h3 className={s.grades}>Rate yourself:</h3>
      <div className={s.gradesBlock}>
        <Stars />
      </div>
    </div>
  )
})
