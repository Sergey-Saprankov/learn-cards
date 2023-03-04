import React, { Suspense } from 'react'

import { Navigate, Route, Routes } from 'react-router-dom'

import RequireAuth from './RequireAuth'

import Loader from 'common/components/Loader/Loader'
import { UserAccountAsync } from 'common/components/UserAccount/UserAccount.async'
import { PATH } from 'common/constans/path'
import { LoginAsync } from 'features/auth/Login/Login.async'
import { CheckInfoRecovery } from 'features/auth/Recovery/CheckInfoRecovery'
import { NewPasswordAsync } from 'features/auth/Recovery/NewPassword.async'
import { RecoveryAsync } from 'features/auth/Recovery/Recovery.async'
import { RegistrationAsync } from 'features/auth/Registration/Regestaration.async'
import { CardListAsync } from 'features/cards/CardList/CardList.async'
import { LearnCardPageAsync } from 'features/cards/LearnCardPage/LearnCardPage.async'
import { PackListAsync } from 'features/packs/PackList/PackList.async'

const Pages = () => {
  return (
    <Suspense fallback={<Loader />}>
      <Routes>
        <Route path={PATH.LOGIN} element={<LoginAsync />} />
        <Route path={PATH.REGISTER} element={<RegistrationAsync />} />
        <Route path={PATH.RECOVERY} element={<RecoveryAsync />} />
        <Route path={PATH.NEW_PASSWORD} element={<NewPasswordAsync />}>
          <Route path="*" element={<Navigate to={PATH.NEW_PASSWORD} />} />
          <Route path=":resetPasswordToken" element={<NewPasswordAsync />} />
        </Route>
        <Route path={PATH.RECOVERY_INFO} element={<CheckInfoRecovery />} />
        <Route element={<RequireAuth />}>
          <Route path={'/'} element={<Navigate to={PATH.PACK_LIST} />} />
          <Route path={PATH.PACK_LIST} element={<PackListAsync />} />
          <Route path={PATH.CARD_LIST} element={<CardListAsync />} />
          <Route path={PATH.CARD_LIST_ID} element={<CardListAsync />} />
          <Route path={PATH.ACCOUNT} element={<UserAccountAsync />} />
          <Route path={PATH.CARD_LEARN + '/:packId'} element={<LearnCardPageAsync />} />
        </Route>
      </Routes>
    </Suspense>
  )
}

export default Pages
