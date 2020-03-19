import React, { useState } from 'react'
import styled from 'styled-components'
import { Button, Popover, TextField, Typography } from '@material-ui/core'
import { useTheme } from '@material-ui/core'
import PropTypes from 'prop-types'

const StyledInput = styled(TextField)``

const FieldContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`

const StyledButton = styled(Button)`
  margin-top: 24px;
`

const StyledForm = styled.form`
  padding: 24px;
  display: flex;
  flex-direction: column;
  ${StyledInput} {
    margin-bottom: 12px;
  }
`

const Box = styled.div`
  border: solid grey 1px;
  height: 32px;
  width: 32px;
  border-radius: 4px;
  margin-left: 8px;
  background-color: ${({ color }) => color};
`

const isColor = str => /#[a-z,0-9]{6}/gi.test(str)

const Form = ({ onChange, onClose, ...rest }) => {
  const { palette } = useTheme()
  const initPrimary = palette.primary.main
  const initSecondary = palette.secondary.main
  const [primary, setPrimary] = useState(initPrimary)
  const [secondary, setSecondary] = useState(initSecondary)

  const onApplyTheme = () => {
    if (!isColor(primary)) {
      setPrimary(initPrimary)
    }
    if (!isColor(secondary)) {
      setSecondary(initSecondary)
    }
    onChange &&
      onChange({
        palette: {
          primary: {
            main: isColor(primary) ? primary : initPrimary,
          },
          secondary: {
            main: isColor(secondary) ? secondary : initSecondary,
          },
        },
      })
  }

  return (
    <Popover
      {...rest}
      onClose={onClose}
      anchorOrigin={{
        vertical: 'top',
        horizontal: 'left',
      }}
      transformOrigin={{
        vertical: 'bottom',
        horizontal: 'left',
      }}
    >
      <StyledForm>
        <Typography>Change the main theme's colors</Typography>
        <hr />
        <FieldContainer>
          <StyledInput
            id="primary-color"
            label="primary.main"
            placeholder={palette.primary.main}
            onChange={e => setPrimary(e.target.value)}
          />
          <Box color={primary} />
        </FieldContainer>
        <FieldContainer>
          <StyledInput
            id="secondary-color"
            label="secondary.main"
            placeholder={palette.secondary.main}
            onChange={e => setSecondary(e.target.value)}
          />
          <Box color={secondary} />
        </FieldContainer>
        <FieldContainer>
          <StyledButton variant="contained" color="primary" onClick={onApplyTheme}>
            Apply
          </StyledButton>
          <StyledButton variant="outlined" onClick={onClose}>
            Close
          </StyledButton>
        </FieldContainer>
      </StyledForm>
    </Popover>
  )
}

Form.propTypes = {
  onChange: PropTypes.func,
  onClose: PropTypes.func,
}

export default Form
