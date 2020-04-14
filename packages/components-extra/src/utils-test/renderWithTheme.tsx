import React from 'react'
import { render } from '@testing-library/react'

import StyledProvider from 'components/StyledProvider'

export default (component, { ...rest }): React.ReactElement =>
  render(<StyledProvider>{component}</StyledProvider>, { ...rest })
