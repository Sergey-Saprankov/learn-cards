import React, { FC, memo, ReactNode, MouseEvent, useEffect, useState, useCallback } from 'react'

import { set } from 'react-hook-form'

import { isClosingForAnimation } from '../../../app/appSelectors'
import { isClosingModal, setModalStatus } from '../../../app/appSlice'
import { useAppDispatch, useAppSelector, useDebounce } from '../../hooks'
import { classNames } from '../../utils/classNames'
import { Portal } from '../Portal/Portal'

import s from './Modal.module.scss'

type ModalType = {
  className?: string
  children?: ReactNode
  isOpen: boolean
}

export const Modal: FC<ModalType> = memo(({ children, isOpen, className }) => {
  const dispatch = useAppDispatch()
  const isClosing = useAppSelector(isClosingForAnimation)
  const debouncedValue = useDebounce<boolean>(isClosing, 350)

  useEffect(() => {
    dispatch(setModalStatus('idle'))
    dispatch(isClosingModal(false))
  }, [debouncedValue, dispatch])

  className = className ? className : ''

  const onCloseHandler = () => {
    dispatch(isClosingModal(true))
  }

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
