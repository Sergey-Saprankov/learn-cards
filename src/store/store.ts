import { configureStore } from '@reduxjs/toolkit'

import { appReducer } from 'app/appSlice'
import { authReducer } from 'features/auth/authSlice'
import { cardReducer } from 'features/cards/cardSlice'
import { learnCardReducer } from 'features/cards/LearnCardPage/learnCardSlice'
import packsReducer from 'features/packs/packsSlice'

export const store = configureStore({
  reducer: {
    auth: authReducer,
    app: appReducer,
    packs: packsReducer,
    card: cardReducer,
    learnCard: learnCardReducer,
  },
})

export type RootStateType = ReturnType<typeof store.getState>
