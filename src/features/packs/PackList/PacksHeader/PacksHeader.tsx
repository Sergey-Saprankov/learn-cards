import React, { FC, memo, useState } from 'react'

import { setModalStatus } from '../../../../app/appSlice'
import { Button } from '../../../../common/components/Button/Button'
import { useAppDispatch, useAppSelector } from '../../../../common/hooks'

import s from './PacksHeader.module.scss'

type PacksHeaderType = {
  title: string
  buttonTitle: string
}

export const PacksHeader: FC<PacksHeaderType> = memo(({ title, buttonTitle }) => {
  const dispatch = useAppDispatch()

  const openModalHandler = () => {
    dispatch(setModalStatus('ChangePackForm'))
  }

  return (
    <div className={s.innerWrapper}>
      <h2 className={s.title}>{title}</h2>
      <Button onClick={openModalHandler} className={s.btn}>
        {buttonTitle}
      </Button>
    </div>
  )
})
