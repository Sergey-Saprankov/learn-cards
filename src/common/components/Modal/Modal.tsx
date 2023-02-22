import React, { FC, memo, ReactNode, MouseEvent, useEffect, useState, useCallback } from 'react'

import { set } from 'react-hook-form'

import { useDebounce } from '../../hooks'
import { classNames } from '../../utils/classNames'
import { Portal } from '../Portal/Portal'

import s from './Modal.module.scss'

type ModalType = {
  className?: string
  children?: ReactNode
  isOpen: boolean
  onClose?: () => void
}

export const Modal: FC<ModalType> = memo(({ children, onClose, isOpen, className }) => {
  const [isClosing, setClosing] = useState(false)
  let debouncedValue = useDebounce<boolean>(isClosing, 400)

  useEffect(() => {
    onClose?.()
    setClosing(false)
  }, [debouncedValue])

  className = className ? className : ''

  const onCloseHandler = useCallback(() => {
    setClosing(true)
  }, [onClose])

  const onContentState = (e: MouseEvent<HTMLDivElement>) => {
    e.stopPropagation()
  }

  const mods: Record<string, boolean | string> = {
    [s.opened]: isOpen,
    [s.isClosing]: isClosing,
  }

  return (
    <Portal>
      <div className={classNames(s.Modal, mods, [className])}>
        <div onClick={onCloseHandler} className={s.overlay}>
          <div onClick={onContentState} className={s.content}>
            {children}
          </div>
        </div>
      </div>
    </Portal>
  )
})
