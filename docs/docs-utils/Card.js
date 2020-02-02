import styled from 'styled-components'

import RealCard from 'components/Card'

export const Card = styled(RealCard)`
  width: 70%;
`

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