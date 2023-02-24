import React, { FC, memo, ReactNode } from 'react'

import { ModalStatus } from 'app/appSlice'
import { Modal } from 'common/components/Modal/Modal'
import { CardForm } from 'features/cards/CardList/CardForm/CardForm'
import { DeleteFormTemplate } from 'features/MainModal/DeleteFormTemplate/DeleteFormTemplate'
import { PackForm } from 'features/packs/PackList/PackModal/PackForm/PackForm/PackForm'

type ModalWrapperType = {
  className?: string
  isOpen: boolean
  status: ModalStatus
  packId?: string
  name?: string
  question?: string
  cardId?: string
  answer?: string
}

export const ModalWrapper: FC<ModalWrapperType> = memo(
  ({ className, isOpen, status, packId, name, question, cardId, answer }) => {
    const changePack = status === 'PackForm' && <PackForm id={packId} name={name} />
    const deletePack = status === 'Delete pack' && (
      <DeleteFormTemplate packId={packId} name={name} title={status} />
    )
    const deleteCard = status === 'Delete card' && (
      <DeleteFormTemplate cardId={cardId} name={question} title={status} />
    )
    const changeCard = status === 'CardForm' && (
      <CardForm question={question} answer={answer} cardId={cardId} packId={packId} />
    )
    const form = changePack || deletePack || deleteCard || changeCard || null

    return (
      <Modal isOpen={isOpen} className={className}>
        {form}
      </Modal>
    )
  }
)
