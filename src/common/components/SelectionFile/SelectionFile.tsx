import React, { ChangeEvent, memo, FC } from 'react'

import s from './SelectionFile.module.scss'

type SelectionFileType = {
  onChange?: (file: string) => void
  file?: string
}

export const SelectionFile: FC<SelectionFileType> = memo(({ onChange, file }) => {
  const changeFileHandler = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length) {
      const file = e.target.files[0]

      if (file.size < 4000000) {
        convertFileToBase64(file, (file64: string) => {
          onChange?.(file64)
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

  return (
    <div className={s.container}>
      {file && (
        <div className={s.bgContainer}>
          <img className={s.bg} src={file} alt={file} />
        </div>
      )}
      <label className={s.label}>
        <span className={s.labelText}>Chose file</span>
        <input
          onChange={changeFileHandler}
          style={{ display: 'none' }}
          accept={'.png, .jpg, .jpeg, .gif'}
          type="file"
        />
      </label>
    </div>
  )
})
