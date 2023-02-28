import React, { memo, useEffect, useState } from 'react'

import s from './TbodyCard.module.scss'

import { isClosingForAnimation, modalStatus } from 'app/appSelectors'
import { setModalStatus } from 'app/appSlice'
import { EmptyPack } from 'common/components/EmptyPack/EmptyPack'
import { DeleteIcon } from 'common/components/Icon/DeleteIcon/Delete'
import { EditIcon } from 'common/components/Icon/EditIcon/EditIcon'
import { CardsRating } from 'common/components/Rating/Rating'
import { useAppDispatch, useAppSelector, useDebounce } from 'common/hooks'
import { dateHandler } from 'common/utils'
import { deCover } from 'features/cards/CardList/cardSelectors'
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
  const deCoverPack = useAppSelector(deCover)
  const dispatch = useAppDispatch()
  const isClosing = useAppSelector(isClosingForAnimation)
  const status = useAppSelector(modalStatus)
  const isOpen = status !== 'idle'
  const debounce = useDebounce(isClosing, 200)

  const [id, setId] = useState('')
  const [question, setQuestion] = useState('')
  const [answer, setAnswer] = useState('')
  const [questionFile, setQuestionFile] = useState('')
  const [answerFile, setAnswerFile] = useState('')

  useEffect(() => {
    setId('')
    setQuestion('')
    setAnswer('')
    setQuestionFile('')
    setAnswerFile('')
  }, [debounce])

  const isMyCard = userId === packUserId

  useEffect(() => {
    console.log(userId === packUserId)
  }, [packUserId, dispatch, userId])

  return (
    <>
      <tbody className={s.body}>
        {card?.map(t => {
          const update = dateHandler(t.updated)

          const editModalHandler = () => {
            dispatch(setModalStatus('CardForm'))
            setId(t._id)
            setQuestion(t.question)
            setAnswer(t.answer)
            setAnswerFile(t.answerImg)
            setQuestionFile(t.questionImg)
          }

          const deleteModalHandler = () => {
            dispatch(setModalStatus('Delete card'))
            setId(t._id)
            setQuestion(t.question)
          }

          return isMyCard ? (
            <tr key={t._id} className={s.tr}>
              <td className={s.td}>
                <div className={s.title}>{t.question}</div>
              </td>
              <td className={s.td}>
                <div className={s.title}>{t.answer}</div>
              </td>
              <td className={s.td}>{update}</td>
              <td className={s.td}>
                <div className={s.iconContainer}>
                  <EditIcon onClick={editModalHandler} />
                  <DeleteIcon onClick={deleteModalHandler} />
                </div>
              </td>
              <td className={s.td}>
                <div className={s.gradeColumn}>
                  <div className={s.grade}>
                    <CardsRating value={t.grade} />
                  </div>
                </div>
              </td>
            </tr>
          ) : (
            <tr key={t._id} className={s.tr}>
              <td className={s.td}>
                <div className={s.title}>{t.question}</div>
              </td>
              <td className={s.td}>
                <div className={s.title}>{t.answer}</div>
              </td>
              <td className={s.td}>{update}</td>
              <td className={s.td}>
                <div className={s.iconContainer}>
                  <EditIcon fill={'#908c8c'} />
                  <DeleteIcon fill={'#908c8c'} />
                </div>
              </td>
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
        answer={answer}
        deckCover={deCoverPack}
        questionFile={questionFile}
        answerFile={answerFile}
      />
    </>
  )
})
