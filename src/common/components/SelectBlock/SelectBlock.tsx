import React, { memo, FC } from 'react'

import { SelectionFile } from 'common/components/SelectionFile/SelectionFile'
import { SuperInput } from 'common/components/SuperInput/SuperInput'
import s from 'features/cards/CardList/CardForm/CardForm.module.scss'

type SelectBlockType = {
  condition: string
  onChange: (value: string) => void
  value: string
  label: string
}
export const SelectBlock: FC<SelectBlockType> = memo(({ condition, onChange, value, label }) => {
  return (
    <>
      {condition === 'text' ? (
        <>
          <label>
            {label}
            <SuperInput value={value} onChange={onChange} placeholder={'no question'} />
          </label>
        </>
      ) : (
        <>
          <div className={s.fileContainer}>
            <span className={s.description}>Question</span>
            <SelectionFile onChange={onChange} file={value} />
          </div>
        </>
      )}
    </>
  )
})
