import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export type StatusCardsModal = 'CardForm' | 'Delete card'
export type StatusPackModal = 'PackForm' | 'Delete pack'
export type ModalStatus = 'idle' | StatusPackModal | StatusCardsModal

type StatusType = 'idle' | 'loading' | 'failed' | 'success'
const packList = [
  { title: 'Name', status: 0, sortName: 'name', size: 30 },
  { title: 'Cards', status: 0, sortName: 'cardsCount', size: 13.13 },
  { title: 'Last Updated', status: 0, sortName: 'updated', size: 13.13 },
  { title: 'Created by', status: 0, sortName: 'user_name', size: 13.13 },
  { title: 'Actions', status: 0, size: 10 },
]

const cardList = [
  { title: 'Question', status: 0, sortName: 'question', size: 20 },
  { title: 'Answer', status: 0, sortName: 'answer', size: 20 },
  { title: 'Last Updated', status: 0, sortName: 'updated', size: 13.13 },
  { title: 'Actions', status: 0, size: 13.13 },
  { title: 'Grade', status: 0, sortName: 'grade', size: 13.13 },
]

export type CardListType = typeof cardList

export type PackListType = typeof packList

type InitialStateType = {
  appError: string | null
  appStatus: StatusType
  isInitialized: boolean
  packList: PackListType
  cardList: CardListType
  modalStatus: ModalStatus
  isClosingForAnimation: boolean
}

const initialState: InitialStateType = {
  appError: null,
  appStatus: 'idle',
  isInitialized: false,
  packList,
  cardList,
  modalStatus: 'idle',
  isClosingForAnimation: false,
}

export const appSlice = createSlice({
  name: 'app',
  initialState,
  reducers: {
    setAppError: (state, action: PayloadAction<string | null>) => {
      state.appError = action.payload
    },
    setAppStatus: (state, action: PayloadAction<StatusType>) => {
      state.appStatus = action.payload
    },
    isInitialized: (state, action: PayloadAction<boolean>) => {
      state.isInitialized = action.payload
    },
    setSortStatusPack: (state, action: PayloadAction<PackListType>) => {
      state.packList = action.payload
    },
    setSortStatusCards: (state, action: PayloadAction<CardListType>) => {
      state.cardList = action.payload
    },
    resetSort: state => {
      state.packList = state.packList.map(t => (t.status ? { ...t, status: 0 } : t))
    },
    setModalStatus: (state, action: PayloadAction<ModalStatus>) => {
      state.modalStatus = action.payload
    },
    isClosingModal: (state, action: PayloadAction<boolean>) => {
      state.isClosingForAnimation = action.payload
    },
  },
})

export const {
  setAppError,
  isInitialized,
  setAppStatus,
  setSortStatusPack,
  setSortStatusCards,
  resetSort,
  setModalStatus,
  isClosingModal,
} = appSlice.actions

export const appReducer = appSlice.reducer
