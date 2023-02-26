import React, { FC, memo, useState, useCallback } from 'react'

import { isClosingModal } from 'app/appSlice'
import { Button } from 'common/components/Button/Button'
import { SelectionFile } from 'common/components/SelectionFile/SelectionFile'
import { SuperInput } from 'common/components/SuperInput/SuperInput'
import { useAppDispatch } from 'common/hooks'
import s from 'features/packs/PackList/PackModal/PackForm/PackForm/PackForm.module.scss'
import { createPackTC, updatePackTC } from 'features/packs/packsSlice'

type ChangePackFormType = {
  id?: string
  name?: string
  deckCover?: string
}

export const PackForm: FC<ChangePackFormType> = memo(({ id, name, deckCover }) => {
  const dispatch = useAppDispatch()

  const [title, setTitle] = useState(name ? name : '')
  const [file, setFile] = useState(deckCover ? deckCover : '')
  const titleForm = name ? 'Edit pack' : 'Add pack'

  const [checked, setChecked] = useState(false)

  const getImage = useCallback(
    (file: string) => {
      setFile(file)
    },
    [setFile]
  )

  const onChangePackNameHandler = (value: string) => {
    setTitle(value)
  }

  const onChangeChecked = (value: boolean) => {
    setChecked(value)
  }

  const onChangePackHandler = () => {
    if (name && id) {
      dispatch(updatePackTC({ cardsPack: { _id: id, name: title, deckCover: file } }))
    } else {
      dispatch(createPackTC({ cardsPack: { name: title, deckCover: file } }))
    }

    dispatch(isClosingModal(true))
  }

  const closeModalHandler = () => {
    dispatch(isClosingModal(true))
  }

  return (
    <div className={s.container}>
      <h3 className={s.title}>{titleForm}</h3>

      <label>
        Pack name
        <SuperInput onChange={onChangePackNameHandler} placeholder={'no name'} value={title} />
      </label>

      <SelectionFile onChange={getImage} file={file} />
      <div className={s.checkBoxContainer}>
        <label className={s.label}>
          <SuperInput type={'checkbox'} onChangeChecked={onChangeChecked} className={s.checkBox} />
          <span>Private Pack</span>
        </label>
      </div>
      <div className={s.buttonContainer}>
        <Button onClick={closeModalHandler} className={s.btn}>
          Cancel
        </Button>
        <Button onClick={onChangePackHandler} className={`${s.btn} ${s.primary}`}>
          Save
        </Button>
      </div>
    </div>
  )
})
