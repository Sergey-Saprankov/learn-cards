import React, { FC, memo } from 'react'

import { useParams } from 'react-router-dom'

import { isClosingModal } from '../../../../app/appSlice'
import { deletePackTC } from '../../../../features/packs/packsSlice'
import { useAppDispatch } from '../../../hooks'
import { Button } from '../../Button/Button'

import s from './DeleteFormTemplate.module.scss'

type DeleteFormTemplateType = {
  _id: string
  name: string
  title: string
}

export const DeleteFormTemplate: FC<DeleteFormTemplateType> = memo(({ _id, name, title }) => {
  // let { id } = useParams<{ id: string }>()
  // const packId = _id ? _id : id
  const dispatch = useAppDispatch()
  const closeModalHandler = () => {
    dispatch(isClosingModal(true))
  }

  const deletePackHandler = () => {
    if (_id) {
      dispatch(deletePackTC(_id))
      dispatch(isClosingModal(true))
    }
  }

  return (
    <div className={s.container}>
      <h3 className={s.title}>{title}</h3>
      <p className={s.text}>{`Do you really want to remove ${name}? All cards will be deleted.`}</p>
      <div className={s.buttonContainer}>
        <Button onClick={closeModalHandler} className={s.btn}>
          Cancel
        </Button>
        <Button onClick={deletePackHandler} className={`${s.btn} ${s.primary}`}>
          Delete
        </Button>
      </div>
    </div>
  )
})
