import React, { ChangeEvent, FC, InputHTMLAttributes, memo } from 'react'

import s from './SuperInput.module.scss'

import { classNames } from 'common/utils/classNames'

type HTMLInputProps = Omit<InputHTMLAttributes<HTMLInputElement>, 'value' | 'onChange'>
interface SuperInputType extends HTMLInputProps {
  value?: string
  onChange?: (value: string) => void
  className?: string
  onChangeChecked?: (checked: boolean) => void
}
export const SuperInput: FC<SuperInputType> = memo(
  ({ className, placeholder, value, onChange, type = 'text', onChangeChecked, ...other }) => {
    className = className ? className : ''
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
      onChange?.(e.currentTarget.value)
      onChangeChecked?.(e.currentTarget.checked)
    }

    return (
      <div>
        <input
          className={classNames(s.Input, {}, [className])}
          value={value}
          onChange={onChangeHandler}
          type={type}
          placeholder={placeholder}
          {...other}
        />
      </div>
    )
  }
)
