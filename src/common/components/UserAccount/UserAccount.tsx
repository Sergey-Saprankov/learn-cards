import React from 'react'

import { Navigate, useNavigate } from 'react-router-dom'

import EditableSpan from '../EditableSpan/EditableSpan'

import s from './UserAccount.module.scss'

import arrow from 'assets/arrow.svg'
import avatar from 'assets/avatarBig.png'
import camera from 'assets/cameraIcon.svg'
import logout from 'assets/logout.svg'
import { PATH } from 'common/constans/path'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { userNameHandler } from 'common/utils/userNameHandler'
import { authUserInfoSelector, isLoggedInSelector } from 'features/auth/authSelectors'
import { logoutTC } from 'features/auth/authSlice'

export const UserAccount = () => {
  const dispatch = useAppDispatch()
  const navigate = useNavigate()
  const isLoggedIn = useAppSelector(isLoggedInSelector)
  // данные для UserAccount (name and email)
  const user = useAppSelector(authUserInfoSelector)
  const userName = userNameHandler(user.name)
  // пока только на имя, аватарку не трогал

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
            </div>
            <img src={avatar} alt="user avatar" />
          </div>

          {/*пока сделал новую компоненту, не вижу смысла тут отслеживать с помощью react hook form*/}
          <EditableSpan value={userName} />

          <span className={s.emailText}>{user.email}</span>
          <span onClick={logoutHandler} className={s.logOut}>
            <img className={s.logOutIcon} src={logout} alt="button logout" />
            <span className={s.logOutText}>Log out</span>
          </span>
        </div>
      </div>
    </div>
  )
}
