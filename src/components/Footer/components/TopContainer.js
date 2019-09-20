import styled, { css } from 'styled-components'
import PropTypes from 'prop-types'

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

const TopContainer = styled.div`
  ${getBackgroundStyle};
  padding: 36px;
`

TopContainer.propTypes = {
  /**
   * The footer's background image. Optional.
   */
  image: PropTypes.string,
}

export default TopContainer
