import React, { FC, memo } from 'react'

import { AnswerStatuses } from '../../learnCardSlice'

import s from './GradesItem.module.scss'

import { Stars } from 'common/components/Star/Stars'

type GradesItemType = {
  onChangeChecked: (isActive: AnswerStatuses, grade: number) => void
}

export const GradesItem: FC<GradesItemType> = memo(({ onChangeChecked }) => {
  return (
    <div className={s.gradesItem}>
      <h3 className={s.grades}>Rate yourself:</h3>
      <div className={s.gradesBlock}>
        <Stars />
      </div>
    </div>
  )
})
