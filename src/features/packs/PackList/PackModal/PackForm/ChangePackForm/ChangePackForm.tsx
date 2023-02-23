import React, { FC, memo, useState } from 'react'

import { isClosingModal } from '../../../../../../app/appSlice'
import { Button } from '../../../../../../common/components/Button/Button'
import { SelectionFile } from '../../../../../../common/components/SelectionFile/SelectionFile'
import { SuperInput } from '../../../../../../common/components/SuperInput/SuperInput'
import { useAppDispatch } from '../../../../../../common/hooks'
import { createPackTC, updatePackTC } from '../../../../packsSlice'

import s from './ChangePackForm.module.scss'

type ChangePackFormType = {
  id?: string
  name?: string
}

export const ChangePackForm: FC<ChangePackFormType> = memo(({ id, name }) => {
  const dispatch = useAppDispatch()

  const [title, setTitle] = useState(name ? name : '')
  const titleForm = name ? 'Edit pack' : 'Add pack'

  console.log(id, name, titleForm)
  const [checked, setChecked] = useState(false)

  const onChangePackNameHandler = (value: string) => {
    setTitle(value)
  }

  const onChangeChecked = (value: boolean) => {
    setChecked(value)
  }

  const onChangePackHandler = () => {
    if (name && id) {
      dispatch(updatePackTC({ cardsPack: { _id: id, name: title } }))
    } else {
      dispatch(createPackTC({ cardsPack: { name: title } }))
    }

    dispatch(isClosingModal(true))
  }

  const closeModalHandler = () => {
    dispatch(isClosingModal(true))
  }

  return (
    <div className={s.container}>
      <h3 className={s.title}>{titleForm}</h3>

      <label>
        Pack name
        <SuperInput onChange={onChangePackNameHandler} placeholder={'no name'} value={title} />
      </label>

      <SelectionFile />
      <div className={s.checkBoxContainer}>
        <label className={s.label}>
          <SuperInput type={'checkbox'} onChangeChecked={onChangeChecked} className={s.checkBox} />
          <span>Private Pack</span>
        </label>
      </div>
      <div className={s.buttonContainer}>
        <Button onClick={onChangePackHandler} className={s.btn}>
          Save
        </Button>
        <Button onClick={closeModalHandler} className={`${s.btn} ${s.primary}`}>
          Cancel
        </Button>
      </div>
    </div>
  )
})
