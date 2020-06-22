import React from 'react'
import { map, isEmpty } from 'lodash-es'
import styled from 'styled-components'
import { 
  Paper,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
  TableContainer,
} from '@material-ui/core'

import { useProps } from './PropsProvider'
import { SpacedParagraph } from './Paragraph'
import InlineCode from './InlineCode'

const StyledTableContainer = styled(Paper)`
  width: 100%;
  overflow: auto;
  ${({ theme: { spacing }}): string => `
    margin: ${spacing(4)}px 0px;
  `}
`

const HeadCell = styled(TableCell)`
  font-size: 1rem;
`

const TypeCell = styled(TableCell)`
  ${({ theme: { palette: { type, secondary } }}): string => `
    color: ${type === 'light' ? secondary.main : '#ffb399' };
  `}
`

const RequiredNameCell = styled(TableCell)`
  ${({ theme: { palette: { type, primary } }}): string => `
    color: ${type === 'light' ? primary.main : '#b3c6ff' };
  `}
`

const DescriptionCell = styled(TableCell)`
  min-width: 250px;
`

const Props: React.FC<PropsProps> = ({ of: component }: PropsProps) => {
  const allProps = useProps()
  const { props = [] } = allProps[component]

  return (
    <>
      {isEmpty(props) ? null : (
        <StyledTableContainer>
          <Table aria-label={`Props of ${component}`}>
            <TableHead>
              <TableRow>
                <HeadCell>Name</HeadCell>
                <HeadCell>Type</HeadCell>
                <HeadCell>Default</HeadCell>
                <HeadCell>Description</HeadCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {map(props, ({ defaultValue, description, required, name, type }) => {
                const { value: propDefaultValue } = defaultValue || {}
                const { text: propDescription } = description || {}
                const { name: propType } = type || {}

                return (
                  <TableRow key={name}>
                    {required ? (
                      <RequiredNameCell>
                        {name}*
                      </RequiredNameCell>
                    ) : (
                      <TableCell>
                        {name}
                      </TableCell>
                    )}
                    <TypeCell>{propType}</TypeCell>
                    <TableCell>{propDefaultValue}</TableCell>
                    <DescriptionCell>{propDescription}</DescriptionCell>
                  </TableRow>
                )
              })}
            </TableBody>
          </Table>
        </StyledTableContainer>
       )}
       <SpacedParagraph>
          The <InlineCode>ref</InlineCode> will be forwarded to the html root element, as well as any other props.
       </SpacedParagraph>
    </>
  )
}

export interface PropsProps {
  of: string;
}

export default Props