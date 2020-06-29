import React from 'react'
import { render, RenderResult } from '@testing-library/react'

import { StyledProvider } from '../components'

export default (component: React.ReactNode, rest?: Record<string, unknown>): RenderResult =>
  render(<StyledProvider>{component}</StyledProvider>, { ...rest })
