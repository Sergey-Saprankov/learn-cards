import React, { memo, ChangeEvent } from 'react'

import { CardType } from '../../cardType'
import s from '../LearnCardItem/LearnCardItem.module.scss'
import { AnswerStatuses } from '../learnCardSlice'

import { GradesItem } from './GradesItem/GradesItem'

import defaultAva from 'assets/notFound.jpg'
import { Button } from 'common/components/Button/Button'

type FormWrapperType = {
  card: CardType
  title: string
  isChecked: boolean
  onNext: () => void
  onShowAnswer: () => void
}

export const LearnCardItem = memo(
  ({ card, title, isChecked, onNext, onShowAnswer }: FormWrapperType) => {
    const errorImgHandler = (e: ChangeEvent<HTMLImageElement>) => {
      e.currentTarget.src = defaultAva
    }
    const answer =
      card.answerImg === 'null' ? (
        card.answer
      ) : (
        <div className={s.imgContainer}>
          <img
            className={s.img}
            onError={errorImgHandler}
            src={card.answerImg ? card.answerImg : defaultAva}
            alt="answer"
          />
        </div>
      )
    const question =
      card.questionImg === 'null' ? (
        card.question
      ) : (
        <div className={s.imgContainer}>
          <img
            className={s.img}
            onError={errorImgHandler}
            src={card.questionImg ? card.questionImg : defaultAva}
            alt="question"
          />
        </div>
      )

    return (
      <div className={s.container}>
        <div className={s.wrapper}>
          <div className={s.innerWrapper}>
            <h3 className={s.title}>{`Learn "${title}"`}</h3>

            <div className={s.blockQueAns}>
              <div className={s.questionBlock}>
                <h3>Question:</h3>
                <div className={s.questionItem}>
                  <div className={s.question}>{question}</div>
                </div>
              </div>
              <div className={s.answerBlock}>
                <h3>Answer:</h3>
                <div className={s.answerItem}>
                  {isChecked && <div className={s.answer}>{answer}</div>}
                  {!isChecked && (
                    <Button onClick={onShowAnswer} className={`${s.btn} ${s.color}`}>
                      Show answer
                    </Button>
                  )}
                </div>
              </div>
            </div>
            <div className={s.discriptionBlock}>
              <div className={s.questionDescription}>
                Number of attempts to answer the question: <b>{card.shots}</b>
              </div>
              {isChecked && (
                <>
                  <GradesItem />
                  <Button onClick={onNext} className={`${s.btn} ${s.color}`}>
                    Next
                  </Button>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    )
  }
)
