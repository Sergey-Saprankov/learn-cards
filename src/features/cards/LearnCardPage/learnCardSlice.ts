import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export enum AnswerStatuses {
  IsNoActive = 0,
  IsActive = 1,
}

const learnCard = [
  { id: 1, title: 'Did not know' },
  { id: 2, title: 'Forgot' },
  { id: 3, title: 'A lot of thought' },
  { id: 4, title: 'Сonfused' },
  { id: 5, title: 'Knew the answer' },
]

type LearnCardType = typeof learnCard

type initialStateType = {
  learnCard: LearnCardType
  grade: number
}

const initialState: initialStateType = {
  learnCard: learnCard,
  grade: 0,
}

const cardSlice = createSlice({
  name: 'learnCardPage',
  initialState,
  reducers: {
    resetStatus: state => (state = initialState),
    setGrade: (state, action: PayloadAction<number>) => {
      state.grade = action.payload
    },
  },
})

export const { resetStatus, setGrade } = cardSlice.actions

export const learnCardReducer = cardSlice.reducer
