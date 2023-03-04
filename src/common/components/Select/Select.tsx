import React, { useState, FC, memo, useEffect } from 'react'

import s from './Select.module.scss'

import { isClosingForAnimation } from 'app/appSelectors'
import arrow from 'assets/arrowDown.svg'
import { useAppSelector } from 'common/hooks'
import { classNames } from 'common/utils/classNames'

type SelectType = {
  options?: string[]
  text: string
  onChange: (value: string) => void
}

export const Select: FC<SelectType> = memo(({ options, onChange, text }) => {
  const [open, setOpen] = useState(false)
  const isClosing = useAppSelector(isClosingForAnimation)

  useEffect(() => {
    setOpen(false)
  }, [isClosing])

  const mods = {
    [s.rotate]: open,
  }

  const onChangeHandler = (value: string) => {
    onChange(value)
  }

  const mappingOptions = options?.map((el, i) => {
    return (
      <div key={i + 1} onClick={() => onChangeHandler(el)} className={s.option}>
        {el}
      </div>
    )
  })

  const onClickHandler = () => {
    setOpen(!open)
  }

  return (
    <>
      <div onBlur={() => console.log(1)} onClick={onClickHandler} className={s.Select}>
        <span className={s.text}>{text}</span>
        <img
          onClick={onClickHandler}
          className={classNames(s.arrow, mods)}
          src={arrow}
          alt="arrow icon"
        />
        {open && (
          <div className={s.optionsContainer}>
            <div className={s.optionWrapper}>{mappingOptions}</div>
          </div>
        )}
      </div>
    </>
  )
})
