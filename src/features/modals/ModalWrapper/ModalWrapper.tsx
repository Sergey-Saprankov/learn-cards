import React, { FC, ReactNode } from 'react'

import CloseIcon from '@mui/icons-material/Close'
import Divider from '@mui/material/Divider'
import IconButton from '@mui/material/IconButton'

import s from './ModalWrapper.module.scss'

import { Portal } from 'common/components/Portal/Portal'
import { useAppDispatch } from 'common/hooks'
import { resetModalValues } from 'common/utils'

type PropsType = {
  children?: ReactNode
  title: string
}
const ModalWrapper: FC<PropsType> = ({ children, title }) => {
  const dispatch = useAppDispatch()
  const closeModal = () => {
    resetModalValues(dispatch)
  }

  const onContentClick = (e: React.MouseEvent) => {
    e.stopPropagation()
  }

  return (
    <Portal>
      <div className={s.container} onClick={closeModal}>
        <div onClick={onContentClick} className={s.wrapper}>
          <div className={s.modalHeader}>
            <div className={s.title}>{title}</div>
            <IconButton onClick={closeModal} size={'small'}>
              <CloseIcon />
            </IconButton>
          </div>
          <Divider />
          <div>{children}</div>
        </div>
      </div>
    </Portal>
  )
}

export default ModalWrapper
