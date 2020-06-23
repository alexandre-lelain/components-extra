import styled from 'styled-components'
import React from 'react'
import { Card as RealCard } from 'components-extra'

export const Cont = styled.div`
  ${RealCard.Button} {
    margin-bottom: 500px;
  }
`

export const Cont2 = styled.div`
  ${RealCard} {
    margin-bottom: 500px;
  }
`

export const Card = styled(RealCard)`
  width: 70%;
`

export const Toto: React.FC = () => <ExtendedCardButton title="qsdqsd">qsd</ExtendedCardButton>

export const Toto2: React.FC = () => <Card title="qsdqsd">qsd</Card>

export const ExtendedCard = styled(RealCard)`
  width: 90%;
  margin: auto;
  background-color: #3377ff;
  border-radius: 18px;
  box-shadow: 2px 2px 2px 2px grey;
  * {
    color: white;
  }
`

export const ExtendedCardButton = styled(RealCard.Button)`
  background-color: #3377ff;
  border-radius: 18px;
  box-shadow: 2px 2px 2px 2px grey;
  * {
    color: white;
  }
`
