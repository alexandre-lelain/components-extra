import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'
import MUIContainer from '@material-ui/core/Container'

const getImageStyle = ({ image = null }) => {
  return image
    ? css`
        background-image: url(${image});
        background-position: center;
        background-size: cover;
        background-repeat: no-repeat;
      `
    : css``
}

const Container = styled(MUIContainer)`
  ${getImageStyle};
  padding: 24px 16px;
`

Container.propTypes = {
  /**
   * The footer's background image. Optional.
   */
  image: PropTypes.string,
}

export default Container
