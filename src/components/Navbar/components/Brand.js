import React from 'react'
import styled from 'styled-components'
import PropTypes from 'prop-types'
import { Link, Typography } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'
import { isEmpty } from 'utils'

const useStyles = makeStyles({
  title: {
    lineHeight: 'normal',
  },
})

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
  display: flex;
  align-items: center;
`

const BrandContainer = styled.div`
  display: flex;
  flex-grow: 1;
`

const Brand = ({ className, children, href = '', title, ...rest }) => {
  const classes = useStyles()
  return (
    <BrandContainer className={className} {...rest}>
      <BrandLink href={href}>
        {!isEmpty(children) && <IconContainer>{children}</IconContainer>}
        {title && (
          <Typography className={classes.title} variant="h6">
            {title}
          </Typography>
        )}
      </BrandLink>
    </BrandContainer>
  )
}

Brand.propTypes = {
  /**
   * The navbar's brand link. By default it links to the same page.
   */
  href: PropTypes.string,
  /**
   * The navbar's title.
   */
  title: PropTypes.string,
}

const DefaultComponent = styled(Brand)``
DefaultComponent.displayName = 'Navbar.Brand'
DefaultComponent.propTypes = Brand.propTypes

export { Brand as BaseBrand }
export default DefaultComponent
