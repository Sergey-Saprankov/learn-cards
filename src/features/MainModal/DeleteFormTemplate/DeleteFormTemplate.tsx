import React, { FC, memo } from 'react'

import { useNavigate } from 'react-router-dom'

import { deleteCardTC } from '../../cards/cardSlice'

import s from './DeleteFormTemplate.module.scss'

import { isClosingModal } from 'app/appSlice'
import { Button } from 'common/components/Button/Button'
import { PATH } from 'common/constans/path'
import { useAppDispatch } from 'common/hooks'
import { deletePackTC } from 'features/packs/packsSlice'

type DeleteFormTemplateType = {
  packId?: string
  cardId?: string
  name?: string
  title?: string
}

export const DeleteFormTemplate: FC<DeleteFormTemplateType> = memo(
  ({ packId, cardId, name, title }) => {
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const closeModalHandler = () => {
      dispatch(isClosingModal(true))
    }

    const deletePackHandler = () => {
      if (packId) {
        dispatch(isClosingModal(true))
        dispatch(deletePackTC(packId)).then(() => navigate(PATH.PACK_LIST))
      }
      if (cardId) {
        dispatch(isClosingModal(true))
        dispatch(deleteCardTC(cardId))
      }
    }

    return (
      <div className={s.container}>
        <h3 className={s.title}>{title}</h3>
        <p
          className={s.text}
        >{`Do you really want to remove ${name}? All cards will be deleted.`}</p>
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
  }
)
