import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { CardType } from '../cardType'

export enum AnswerStatuses {
  IsNoActive = 0,
  IsActive = 1,
}

const learnCard = [
  { id: 1, title: 'Did not know', status: AnswerStatuses.IsNoActive },
  { id: 2, title: 'Forgot', status: AnswerStatuses.IsNoActive },
  { id: 3, title: 'A lot of thought', status: AnswerStatuses.IsNoActive },
  { id: 4, title: 'Сonfused', status: AnswerStatuses.IsNoActive },
  { id: 5, title: 'Knew the answer', status: AnswerStatuses.IsNoActive },
]

type LearnCardType = typeof learnCard

type initialStateType = {
  learnCard: LearnCardType
}

const initialState: initialStateType = {
  learnCard: learnCard,
}

const cardSlice = createSlice({
  name: 'learnCardPage',
  initialState,
  reducers: {
    changeStatus: (state, action: PayloadAction<{ id: number; status: AnswerStatuses }>) => {
      state.learnCard.find(el =>
        el.id === action.payload.id ? { ...el, status: action.payload.status } : el
      )
    },
    resetStatus: state => (state = initialState),
  },
})

export const { changeStatus, resetStatus } = cardSlice.actions

export const learnCardReducer = cardSlice.reducer
