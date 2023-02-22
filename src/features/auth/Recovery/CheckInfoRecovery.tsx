import React, { useEffect } from 'react'

import { useNavigate } from 'react-router-dom'

import sendMessage from '../../../assets/sendMessage.png'
import { Button } from '../../../common/components/Button/Button'
import { FormWrapper } from '../../../common/components/Form/FormWrapper/FormWrapper'
import s from '../../../common/components/Header/HeaderSignIn/HeaderSignIn.module.scss'
import { PATH } from '../../../common/constans/path'
import { useAppDispatch, useAppSelector } from '../../../common/hooks'
import { getRecoveryEmailSelector } from '../authSelectors'
import { isMessageSend } from '../authSlice'

import style from './CheckInfoRecovery.module.scss'

export const CheckInfoRecovery = () => {
  const navigate = useNavigate()

  const dispatch = useAppDispatch()

  useEffect(() => {
    dispatch(isMessageSend(false))
  }, [])

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
