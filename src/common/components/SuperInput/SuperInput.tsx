import React, { ChangeEvent, FC, InputHTMLAttributes, memo } from 'react'

import s from './SuperInput.module.scss'

import { classNames } from 'common/utils/classNames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface SuperInputType extends HTMLInputProps {
  value?: string
  onChange?: (value: string) => void
  className: string
}
export const SuperInput: FC<SuperInputType> = memo(
  ({ className, placeholder, value, onChange, type = 'text', ...other }) => {
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.currentTarget.value)
    }

    return (
      <div className={classNames(s.Input, {}, [className])}>
        <input value={value} onChange={onChangeHandler} type={type} placeholder={placeholder} />
      </div>
    )
  }
)
