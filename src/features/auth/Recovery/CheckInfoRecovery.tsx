import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import { getRecoveryEmailSelector } from '../authSelectors'
import { isMessageSend } from '../authSlice'

import style from './CheckInfoRecovery.module.scss'

import sendMessage from 'assets/sendMessage.png'
import { Button } from 'common/components/Button/Button'
import { FormWrapper } from 'common/components/Form/FormWrapper/FormWrapper'
import { PATH } from 'common/constans/path'
import { useAppDispatch, useAppSelector } from 'common/hooks'

export const CheckInfoRecovery = () => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(isMessageSend(false))
  }, [dispatch])

  const email = useAppSelector(getRecoveryEmailSelector)

  const onClickInInfoHandler = () => {
    return navigate(PATH.LOGIN)
  }

  return (
    <FormWrapper title={'Check Email'}>
      <img src={sendMessage} alt={'sen message'} />
      <div className={style.description}>
        We’ve sent an Email with instructions to <div>{email}</div>
      </div>
      <Button className={style.btn} onClick={onClickInInfoHandler}>
        Back to login
      </Button>
    </FormWrapper>
  )
}
