import React, { useState, FC, memo } from 'react'

import { isClosingModal } from 'app/appSlice'
import { Button } from 'common/components/Button/Button'
import { Select } from 'common/components/Select/Select'
import { SelectionFile } from 'common/components/SelectionFile/SelectionFile'
import { SuperInput } from 'common/components/SuperInput/SuperInput'
import { useAppDispatch } from 'common/hooks'
import s from 'features/cards/CardList/CardForm/CardForm.module.scss'
import { createCardTC, updateCardTC } from 'features/cards/cardSlice'

type CardFormType = {
  answer?: string
  question?: string
  cardId?: string
  packId?: string
}

const option = ['text', 'image']

export const CardForm: FC<CardFormType> = memo(({ cardId, question, answer, packId }) => {
  const dispatch = useAppDispatch()
  const [text, setText] = useState('text')
  const [cardQuestion, setCardQuestion] = useState(question ? question : '')
  const [cardAnswer, setCardAnswer] = useState(answer ? answer : '')
  const title = answer && question ? 'Update card' : 'Add new card'

  const onChangeCardQuestionHandler = (value: string) => {
    setCardQuestion(value)
  }

  const onChangeCardAnswerHandler = (value: string) => {
    setCardAnswer(value)
  }

  const closeModalHandler = () => {
    dispatch(isClosingModal(true))
  }

  const onChangeCardHandler = () => {
    if (question && answer && cardId && packId) {
      dispatch(
        updateCardTC({
          updateCard: {
            card: { _id: cardId, question: cardQuestion, answer: cardAnswer },
          },
          cardsPackID: packId,
        })
      )
    }
    if (packId && !answer && !question) {
      dispatch(
        createCardTC({ card: { cardsPack_id: packId, question: cardQuestion, answer: cardAnswer } })
      )
    }
    dispatch(isClosingModal(true))
  }

  return (
    <div className={s.CardForm}>
      <h3 className={s.title}>{title}</h3>
      <Select options={option} text={text} onChange={setText} />
      {text === 'text' ? (
        <>
          <label>
            Question
            <SuperInput
              value={cardQuestion}
              onChange={onChangeCardQuestionHandler}
              placeholder={'no question'}
            />
          </label>
          <label>
            Answer
            <SuperInput
              value={cardAnswer}
              onChange={onChangeCardAnswerHandler}
              placeholder={'no answer'}
            />
          </label>
        </>
      ) : (
        <>
          <div className={s.fileContainer}>
            <span className={s.description}>Question</span>
            <SelectionFile />
          </div>
          <div className={s.fileContainer}>
            <span className={s.description}>Answer</span>
            <SelectionFile />
          </div>
        </>
      )}
      <div>
        <div className={s.buttonContainer}>
          <Button onClick={closeModalHandler} className={s.btn}>
            Cancel
          </Button>
          <Button onClick={onChangeCardHandler} className={`${s.btn} ${s.primary}`}>
            Save
          </Button>
        </div>
      </div>
    </div>
  )
})
