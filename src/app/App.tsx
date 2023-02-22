import React, { useEffect, useState } from 'react'

import './App.css'

import { Button } from '../common/components/Button/Button'
import { Modal } from '../common/components/Modal/Modal'

import { appStatusSelector, isInitializedSelector } from './appSelectors'

import { Header } from 'common/components/Header/Header'
import Loader from 'common/components/Loader/Loader'
import SimpleSnackbar from 'common/components/SnackBar/Snackbar'
import { useAppDispatch, useAppSelector } from 'common/hooks'
import { authMeTC } from 'features/auth/authSlice'
import Pages from 'pages/Pages'

function App() {
  const dispatch = useAppDispatch()
  const [isOpen, setOpen] = useState<boolean>(false)
  const isInitialized = useAppSelector(isInitializedSelector)
  const appStatus = useAppSelector(appStatusSelector)
  // const modalType = useAppSelector(modalTypeSelector)

  useEffect(() => {
    dispatch(authMeTC())
  }, [])

  if (!isInitialized) {
    return <Loader />
  }

  return (
    <div className={'app'}>
      <Modal isOpen={isOpen} onClose={() => setOpen(false)}>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore facere magni nostrum
        officiis rem. Accusantium ad, culpa dolorem doloremque eos est eum ipsum iste minus numquam
        obcaecati quae voluptatem. Tenetur?
      </Modal>
      <Button onClick={() => setOpen(true)}>toggle</Button>
      <Header />
      {/*{modalType !== 'idle' && <Modal modalType={modalType} />}*/}
      <Pages />
      <SimpleSnackbar />
      {appStatus === 'loading' && <Loader />}
    </div>
  )
}

export default App
