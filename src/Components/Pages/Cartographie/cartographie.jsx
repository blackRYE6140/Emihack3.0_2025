import React from 'react'
import CarteCentreDeSoin from './carteCentreDeSoin'
import CarteEpidemi from './carteEpidemi'

function cartographie() {
  return (
    <div className='Cartographie'>
        <CarteEpidemi/>
      <CarteCentreDeSoin/>
    </div>
  )
}

export default cartographie
