import React, { FC, memo, ReactNode } from 'react'

import { ModalStatus } from '../../../../../app/appSlice'
import { Modal } from '../../../../../common/components/Modal/Modal'

import { ChangePackForm } from './ChangePackForm/ChangePackForm'
import { DeletePack } from './DeletePack/DeletePack'

type PackFormType = {
  className?: string
  isOpen: boolean
  status: ModalStatus
  id: string
  name: string
}

export const PackForm: FC<PackFormType> = memo(({ className, isOpen, status, id, name }) => {
  const updatePack = status === 'ChangePackForm' && <ChangePackForm id={id} name={name} />
  const deletePack = status === 'DeletePack' && <DeletePack />
  const form = updatePack || deletePack || ''

  return (
    <Modal isOpen={isOpen} className={className}>
      {form}
    </Modal>
  )
})
