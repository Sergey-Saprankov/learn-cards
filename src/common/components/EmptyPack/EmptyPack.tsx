import React, { memo } from 'react'

import s from './EmptyPack.module.scss'

import emptyPack from 'assets/emptyPack.png'
import { useAppSelector } from 'common/hooks/useAppSelector'

export const EmptyPack = memo(() => {
  const cardSearch = useAppSelector(state => state.card.searchParams.cardQuestion)

  return (
    <tbody className={s.body}>
      <tr className={s.tr}>
        <td className={s.td}>
          <h3 className={s.title}>Nothing found!</h3>
          <img className={s.emptyPack} src={emptyPack} alt="packEmpty" />
          <div className={s.description}>
            {cardSearch === '' ? <>Empty pack!</> : <>Change search parameters</>}
          </div>
        </td>
      </tr>
    </tbody>
  )
})
