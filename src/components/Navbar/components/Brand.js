import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import Typography from '@material-ui/core/Typography'
import Link from '@material-ui/core/Link'

const IconContainer = styled.div`
  width: 24px;
  height: 24px;
  margin-right: 8px;
  vertical-align: middle;
  display: flex;
  justify-content: center;
  align-items: center;
  & > * {
    width: 24px;
    height: 24px;
  }
`

const BrandLink = styled(Link).attrs(() => ({
  color: 'secondary',
  underline: 'none',
}))`
  flex-grow: 1;
  display: flex;
  align-items: center;
`

const Brand = ({ brandIcon: BrandIcon, title }) => {
  return (
    <BrandLink href="/">
      {BrandIcon && (
        <IconContainer>
          <BrandIcon />
        </IconContainer>
      )}
      {title && <Typography variant="h6">{title}</Typography>}
    </BrandLink>
  )
}

Brand.propTypes = {
  brandIcon: PropTypes.func,
  title: PropTypes.string,
}

export default Brand
