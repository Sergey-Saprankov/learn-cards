import React, { memo, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import s from './TbodyPack.module.scss'

import { modalStatus, isClosingForAnimation } from 'app/appSelectors'
import { setModalStatus } from 'app/appSlice'
import { DeleteIcon } from 'common/components/Icon/DeleteIcon/Delete'
import { EditIcon } from 'common/components/Icon/EditIcon/EditIcon'
import { TeachIcon } from 'common/components/Icon/TeachIcon/TeachIcon'
import { PATH } from 'common/constans/path'
import { useDebounce } from 'common/hooks'
import { useAppDispatch } from 'common/hooks/useAppDispatch'
import { useAppSelector } from 'common/hooks/useAppSelector'
import { dateHandler } from 'common/utils/dateHandler'
import { userNameHandler } from 'common/utils/userNameHandler'
import { authUserIdSelector } from 'features/auth/authSelectors'
import { fetchCardTC } from 'features/cards/cardSlice'
import { ModalWrapper } from 'features/MainModal/ModalWrapper'
import { PackType } from 'features/packs/packsType'

type TbodyType = {
  packs?: PackType[]
}

export const TbodyPack: React.FC<TbodyType> = memo(({ packs }) => {
  const dispatch = useAppDispatch()
  const isClosing = useAppSelector(isClosingForAnimation)
  const userId = useAppSelector(authUserIdSelector)
  const navigate = useNavigate()
  const status = useAppSelector(modalStatus)
  const isOpen = status !== 'idle'
  const debounce = useDebounce(isClosing, 200)

  const [id, setId] = useState('')
  const [name, setName] = useState('')

  useEffect(() => {
    setId('')
    setName('')
  }, [debounce])

  return (
    <>
      <tbody>
        {packs?.map(t => {
          const dateUpdate = dateHandler(t.updated)
          const userName = userNameHandler(t.user_name)
          const getCardsPack = () => {
            return navigate(`${PATH.CARD_LIST}/${t._id}`)
          }

          const editModalHandler = () => {
            dispatch(setModalStatus('ChangePackForm'))
            setId(t._id)
            setName(t.name)
          }

          const deleteModalHandler = () => {
            dispatch(setModalStatus('Delete pack'))
            setId(t._id)
            setName(t.name)
          }

          const teachPack = () => {
            dispatch(fetchCardTC(t._id)).then(() => navigate(PATH.CARD_LEARN))
          }

          const resClass = t.cardsCount === 0 ? '#908c8c' : ''
          const teachIcon = resClass ? (
            <TeachIcon stroke={resClass} />
          ) : (
            <TeachIcon onClick={teachPack} stroke={resClass} />
          )

          return (
            <tr key={t._id} className={s.tr}>
              <td onClick={getCardsPack} className={`${s.td} ${s.packTitle}`}>
                <span className={s.title}>{t.name}</span>
              </td>
              <td className={s.td}>{t.cardsCount}</td>
              <td className={s.td}>{dateUpdate}</td>
              <td className={s.td}>{userName}</td>
              <td className={s.td}>
                {t.user_id === userId ? (
                  <div className={s.iconContainer}>
                    {teachIcon}

                    <EditIcon onClick={editModalHandler} />
                    <DeleteIcon onClick={deleteModalHandler} />
                  </div>
                ) : (
                  teachIcon
                )}
              </td>
            </tr>
          )
        })}
      </tbody>
      <ModalWrapper isOpen={isOpen} status={status} packId={id} name={name} />
    </>
  )
})
