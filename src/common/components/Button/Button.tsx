import React, { ButtonHTMLAttributes, FC, memo } from 'react'

import s from './Button.module.scss'

interface ButtonType extends ButtonHTMLAttributes<HTMLButtonElement> {
  isValid?: boolean
  className?: string
}

export const Button: FC<ButtonType> = memo(
  ({ type, isValid, children, className, onClick, ...other }) => {
    return (
      <button
        onClick={onClick}
        disabled={isValid ? !isValid : false}
        className={`${s.btn} ${className}`}
        type={type}
      >
        {children}
      </button>
    )
  }
)
