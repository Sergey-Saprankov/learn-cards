import React, { FC, memo, ReactNode } from 'react'

import { ChangePackForm } from './ChangePackForm/ChangePackForm'
import { DeletePack } from './DeletePack/DeletePack'

import { ModalStatus } from 'app/appSlice'
import { DeleteFormTemplate } from 'common/components/Modal/DeleteFormTemplate/DeleteFormTemplate'
import { Modal } from 'common/components/Modal/Modal'

type PackFormType = {
  className?: string
  isOpen: boolean
  status: ModalStatus
  id: string
  name: string
}

export const PackForm: FC<PackFormType> = memo(({ className, isOpen, status, id, name }) => {
  const changePack = status === 'ChangePackForm' && <ChangePackForm id={id} name={name} />
  const deletePack = status === 'DeletePack' && (
    <DeleteFormTemplate _id={id} name={name} title={'Delete pack'} />
  )
  const form = changePack || deletePack || ''

  return (
    <Modal isOpen={isOpen} className={className}>
      {form}
    </Modal>
  )
})
