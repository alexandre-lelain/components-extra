import React from 'react'
import { CardActionArea } from '@material-ui/core'

const CardContentWrapper: React.FC<CardContentWrapperProps> = ({ children, onClick }: CardContentWrapperProps) => (
  onClick ? (
    <CardActionArea onClick={onClick}>
      {children}
    </CardActionArea>)
    : <>{children}</>
)

interface CardContentWrapperProps {
  children: React.ReactNode;
  onClick?: OnCardClick; 
}

export type OnCardClick =
  | ((event: React.MouseEvent<HTMLButtonElement | HTMLDivElement, MouseEvent>) => void)
  | undefined

export default CardContentWrapper