import React, { memo, useEffect, useState } from 'react'

import { useNavigate } from 'react-router-dom'

import { isClosingForAnimation, modalStatus } from '../../../../app/appSelectors'
import { setModalStatus } from '../../../../app/appSlice'
import Delete from '../../../../assets/Delete.svg'
import edit from '../../../../assets/Edit.svg'
import { EmptyPack } from '../../../../common/components/EmptyPack/EmptyPack'
import { DeleteIcon } from '../../../../common/components/Icon/DeleteIcon/Delete'
import { EditIcon } from '../../../../common/components/Icon/EditIcon/EditIcon'

import s from './TbodyCard.module.scss'

import { CardsRating } from 'common/components/Rating/Rating'
import { useAppDispatch, useAppSelector, useDebounce } from 'common/hooks'
import { dateHandler } from 'common/utils'
import { CardType } from 'features/cards/cardType'
import { ModalWrapper } from 'features/MainModal/ModalWrapper'

type TbodyType = {
  card?: CardType[]
  packName?: string
  packId?: string
}

export const TbodyCard: React.FC<TbodyType> = memo(({ card, packName, packId }) => {
  const userId = useAppSelector(state => state.auth.user._id)
  const packUserId = useAppSelector(state => state.card.searchParams.packUserId)

  const dispatch = useAppDispatch()
  const isClosing = useAppSelector(isClosingForAnimation)
  const status = useAppSelector(modalStatus)
  const isOpen = status !== 'idle'
  const debounce = useDebounce(isClosing, 200)

  const [id, setId] = useState('')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')

  useEffect(() => {
    setId('')
    setQuestion('')
    setAnswer('')
  }, [debounce])

  let isMyCard = userId === packUserId

  useEffect(() => {
    console.log(userId === packUserId)
  }, [packUserId])

  return (
    <>
      <tbody>
        {card?.map(t => {
          const update = dateHandler(t.updated)

          const editModalHandler = () => {
            dispatch(setModalStatus('ChangeCardForm'))
            setId(t._id)
            setQuestion(t.question)
            setAnswer(t.answer)
          }

          const deleteModalHandler = () => {
            dispatch(setModalStatus('Delete card'))
            setId(t._id)
            setQuestion(t.question)
          }

          return isMyCard ? (
            <tr key={t._id} className={s.tr}>
              <td className={s.td}>{t.question}</td>
              <td className={s.td}>{t.answer}</td>
              <td className={s.td}>{update}</td>
              <td className={s.td}>
                <div className={s.gradeColumn}>
                  <div className={s.grade}>
                    <CardsRating value={t.grade} />
                  </div>
                  <div className={s.iconContainer}>
                    <EditIcon onClick={editModalHandler} />
                    <DeleteIcon onClick={deleteModalHandler} />
                  </div>
                </div>
              </td>
            </tr>
          ) : (
            <tr key={t._id} className={s.tr}>
              <td className={s.td}>{t.question}</td>
              <td className={s.td}>{t.answer}</td>
              <td className={s.td}>{update}</td>
              <td className={s.td}>
                <CardsRating value={t.grade} />
              </td>
            </tr>
          )
        })}
      </tbody>
      {card?.length === 0 && <EmptyPack />}
      <ModalWrapper
        isOpen={isOpen}
        status={status}
        packId={packId}
        name={packName}
        question={question}
        cardId={id}
      />
    </>
  )
})
