import React from 'react'

import s from './SelectionFile.module.scss'

export const SelectionFile = () => {
  return (
    <div className={s.container}>
      <label className={s.label}>
        <span className={s.labelText}>Chose file</span>
        <input style={{ display: 'none' }} accept={'.png, .jpg, .jpeg, .gif'} type="file" />
      </label>
    </div>
  )
}
