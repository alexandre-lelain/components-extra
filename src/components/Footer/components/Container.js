import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import MUIContainer from '@material-ui/core/Container'

const getBackgroundStyle = ({ image = null, theme }) => {
  return image
    ? css`
        background-image: url(${image});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      `
    : css`
        background-color: ${theme.palette.primary.main};
      `
}

const Container = styled(MUIContainer)`
  ${getBackgroundStyle};
  padding: 24px;
`

Container.propTypes = {
  /**
   * The footer's background image. Optional.
   */
  image: PropTypes.string,
}

export default Container
