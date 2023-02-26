import React, { ChangeEvent, useState } from 'react'

import { Navigate, useNavigate } from 'react-router-dom'

import { Button } from '../Button/Button'
import EditableSpan from '../EditableSpan/EditableSpan'

import s from './UserAccount.module.scss'

import arrow from 'assets/arrow.svg'
import camera from 'assets/cameraIcon.svg'
import defaultAva from 'assets/default.png'
import logout from 'assets/logout.svg'
import { PATH } from 'common/constans/path'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { userNameHandler } from 'common/utils/userNameHandler'
import { authUserInfoSelector, isLoggedInSelector } from 'features/auth/authSelectors'
import { logoutTC, updateUserTC } from 'features/auth/authSlice'

export const UserAccount = () => {
  const [ava, setAva] = useState(defaultAva)
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const isLoggedIn = useAppSelector(isLoggedInSelector)
  const user = useAppSelector(authUserInfoSelector)
  const userName = userNameHandler(user.name)
  let userAvatar = user.avatar

  const errorHandler = () => {
    userAvatar = defaultAva
  }

  const changeFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      if (file.size < 4000000) {
        convertFileToBase64(file, (file64: string) => {
          console.log(file64)
          dispatch(updateUserTC({ name: userName, avatar: file64 }))
        })
      } else {
        console.error('Error: ', 'Файл слишком большого размера')
      }
    }
  }

  const convertFileToBase64 = (file: File, callBack: (value: string) => void) => {
    const reader = new FileReader()

    reader.onloadend = () => {
      const file64 = reader.result as string

      callBack(file64)
    }
    reader.readAsDataURL(file)
  }

  const logoutHandler = () => {
    dispatch(logoutTC())
  }

  if (!isLoggedIn) {
    return <Navigate to={PATH.LOGIN} />
  }

  return (
    <div className={s.container}>
      <div className={s.wrapper}>
        <div onClick={() => navigate(-1)} className={s.linkBackward}>
          <img className={s.arrow} src={arrow} alt="arrow backward" />
          <span className={s.backwardText}>Back to Packs List</span>
        </div>
        <div className={s.profileContainer}>
          <h2 className={s.title}>Personal Information</h2>
          <div className={s.avatarContainer}>
            <div className={s.decoration}>
              <img className={s.cameraIcon} src={camera} alt="camera icon" />
              <label className={s.label}>
                <input
                  accept={'.png, .jpg, .jpeg, .gif'}
                  style={{ display: 'none' }}
                  type="file"
                  onChange={changeFileHandler}
                />
              </label>
            </div>
            <div className={s.innerAvaContainer}>
              <img className={s.avatar} src={userAvatar} alt={''} onError={errorHandler} />
            </div>
          </div>

          {/*пока сделал новую компоненту, не вижу смысла тут отслеживать с помощью react hook form*/}
          <EditableSpan value={userName} />

          <span className={s.emailText}>{user.email}</span>
          <Button onClick={logoutHandler} className={s.logOut}>
            <img className={s.logOutIcon} src={logout} alt="button logout" />
            <span className={s.logOutText}>Log out</span>
          </Button>
        </div>
      </div>
    </div>
  )
}
