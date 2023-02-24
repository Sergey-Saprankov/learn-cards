import React, { FC, memo, ReactNode } from 'react'

import { ModalStatus } from 'app/appSlice'
import { Modal } from 'common/components/Modal/Modal'
import { DeleteFormTemplate } from 'features/MainModal/DeleteFormTemplate/DeleteFormTemplate'
import { ChangePackForm } from 'features/packs/PackList/PackModal/PackForm/ChangePackForm/ChangePackForm'

type ModalWrapperType = {
  className?: string
  isOpen: boolean
  status: ModalStatus
  packId?: string
  name?: string
  question?: string
  cardId?: string
}

export const ModalWrapper: FC<ModalWrapperType> = memo(
  ({ className, isOpen, status, packId, name, question, cardId }) => {
    const changePack = status === 'ChangePackForm' && <ChangePackForm id={packId} name={name} />
    const deletePack = status === 'Delete pack' && (
      <DeleteFormTemplate packId={packId} name={name} title={status} />
    )
    const deleteCard = status === 'Delete card' && (
      <DeleteFormTemplate cardId={cardId} name={question} title={status} />
    )
    const form = changePack || deletePack || deleteCard || ''

    return (
      <Modal isOpen={isOpen} className={className}>
        {form}
      </Modal>
    )
  }
)
