import React, { useState, FC, memo, useCallback, useEffect } from 'react'

import { isClosingModal } from 'app/appSlice'
import { Button } from 'common/components/Button/Button'
import { Select } from 'common/components/Select/Select'
import { SelectBlock } from 'common/components/SelectBlock/SelectBlock'
import { useAppDispatch } from 'common/hooks'
import s from 'features/cards/CardList/CardForm/CardForm.module.scss'
import { createCardTC, updateCardTC } from 'features/cards/cardSlice'

type CardFormType = {
  answer?: string
  question?: string
  cardId?: string
  packId?: string
  answerFile?: string
  questionFile?: string
}

const option = ['text', 'image']

export const CardForm: FC<CardFormType> = memo(
  ({ cardId, question, answer, packId, answerFile, questionFile }) => {
    let startQuestion = ''

    if (questionFile && questionFile !== 'null') startQuestion = questionFile
    if (question && questionFile && questionFile === 'null') startQuestion = question

    let startAnswer = ''

    if (answerFile && answerFile !== 'null') startAnswer = answerFile
    if (answer && answerFile && answerFile === 'null') startAnswer = answer
    const dispatch = useAppDispatch()
    const [questionSelect, setQuestionSelect] = useState(
      startQuestion === question ? 'text' : 'image'
    )
    const [answerSelect, setAnswerSelect] = useState(startAnswer === answer ? 'text' : 'image')
    const [cardQuestionText, setCardQuestionText] = useState(
      startQuestion === question ? question : ''
    )
    const [cardAnswerText, setCardAnswerText] = useState(startAnswer === answer ? answer : '')
    const [cardQuestionFile, setCardQuestionFile] = useState(
      startQuestion === questionFile ? questionFile : ''
    )
    const [cardAnswerFile, setCardAnswerFile] = useState(
      startAnswer === answerFile ? answerFile : ''
    )
    const title = answer && question ? 'Update card' : 'Add new card'

    const onChangeCardQuestionTextHandler = useCallback(
      (value: string) => {
        setCardQuestionText(value)
      },
      [setCardQuestionText]
    )

    const onChangeCardAnswerTextHandler = useCallback(
      (value: string) => {
        setCardAnswerText(value)
      },
      [setCardAnswerText]
    )

    const onChangeCardQuestionFileHandler = useCallback(
      (value: string) => {
        setCardQuestionFile(value)
      },
      [setCardQuestionFile]
    )

    const onChangeCardAnswerFileHandler = useCallback(
      (value: string) => {
        setCardAnswerFile(value)
      },
      [setCardAnswerFile]
    )

    const changeQuestionSelect = useCallback(
      (value: string) => {
        setQuestionSelect(value)
      },
      [setQuestionSelect]
    )

    const changeAnswerSelect = useCallback(
      (value: string) => {
        setAnswerSelect(value)
      },
      [setAnswerSelect]
    )

    const closeModalHandler = () => {
      dispatch(isClosingModal(true))
    }

    const onChangeCardHandler = () => {
      const updateQuestionText =
        questionSelect === 'text' && cardQuestionText ? cardQuestionText : ''
      const updateAnswerText = answerSelect === 'text' && cardAnswerText ? cardAnswerText : ''
      const updateQuestionFile =
        cardQuestionFile !== 'null' && questionSelect === 'image' ? cardQuestionFile : 'null'
      const updateAnswerFile =
        cardAnswerFile !== 'null' && answerSelect === 'image' ? cardAnswerFile : 'null'

      if (question && answer && cardId && packId) {
        dispatch(
          updateCardTC({
            updateCard: {
              card: {
                _id: cardId,
                question: updateQuestionText,
                answer: updateAnswerText,
                answerImg: updateAnswerFile,
                questionImg: updateQuestionFile,
              },
            },
            cardsPackID: packId,
          })
        )
      }
      if (packId && !answer && !question) {
        dispatch(
          createCardTC({
            card: {
              cardsPack_id: packId,
              question: updateQuestionText,
              answer: updateAnswerText,
              answerImg: updateAnswerFile,
              questionImg: updateQuestionFile,
            },
          })
        )
      }
      dispatch(isClosingModal(true))
    }

    return (
      <div className={s.CardForm}>
        <h3 className={s.title}>{title}</h3>
        <Select options={option} text={questionSelect} onChange={changeQuestionSelect} />
        <SelectBlock
          condition={questionSelect}
          value={questionSelect === 'text' ? cardQuestionText : cardQuestionFile}
          label={'question'}
          onChange={
            questionSelect === 'text'
              ? onChangeCardQuestionTextHandler
              : onChangeCardQuestionFileHandler
          }
        />

        <Select options={option} text={answerSelect} onChange={changeAnswerSelect} />
        <SelectBlock
          condition={answerSelect}
          value={answerSelect === 'text' ? cardAnswerText : cardAnswerFile}
          label={'question'}
          onChange={
            answerSelect === 'text' ? onChangeCardAnswerTextHandler : onChangeCardAnswerFileHandler
          }
        />

        <div className={s.buttonContainer}>
          <Button onClick={closeModalHandler} className={s.btn}>
            Cancel
          </Button>
          <Button onClick={onChangeCardHandler} className={`${s.btn} ${s.primary}`}>
            Save
          </Button>
        </div>
      </div>
    )
  }
)
