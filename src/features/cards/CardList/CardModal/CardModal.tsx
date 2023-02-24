import React from 'react'

import s from './CardModal.module.scss'

import { SuperInput } from 'common/components/SuperInput/SuperInput'

export const CardModal = () => {
  return (
    <div className={s.container}>
      <SuperInput />
      <div></div>
    </div>
  )
}
