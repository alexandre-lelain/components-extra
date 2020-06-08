import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { map } from 'lodash-es'
import { useIsDesktop } from 'components-extra'
import { Button, Drawer, Hidden, List, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Menu } from '@icons'
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby'

const useStyle = makeStyles(({ zIndex, spacing, transitions }) => ({
  paper: {
    padding: '84px 0px',
    minWidth: 250,
    zIndex: zIndex.appBar - 1,
    transition: transitions.backgroundColor,
  },
  modal: {
    zIndex: zIndex.appBar - 1 + '!important',
  },
  root: {
    marginLeft: spacing(3),
  }
}))

const StyledListItemText = styled(ListItemText)`
  ${({ theme: { spacing } }): string => `
    padding: 0 ${spacing(2)}px;
  `}
`

const query = graphql`
  {
    allMdx(filter: {frontmatter: {name: {regex: "/[a-z]+/"}}}) {
      nodes {
        frontmatter {
          route
          name
        }
      }
    }
  }
`

const Navigation: React.FC = () => {
  const { root, ...rest } = useStyle()
  const isDesktop = useIsDesktop()
  const [isOpen, openMenu] = useState(false)

  useEffect(() => {
    if (isDesktop) {
      openMenu(false)
    }
  }, [isDesktop])

  return (
    <>
      <Hidden mdDown implementation="css">
        <Drawer classes={rest} variant="permanent" anchor="left">
          <DrawerContent />
        </Drawer>
      </Hidden>
      <Hidden lgUp implementation="css">
        <Button classes={{ root }} startIcon={<Menu />} onClick={(): void => openMenu((prev) => !prev)}>
          Navigation
        </Button>
        <Drawer
          classes={rest}
          variant="temporary"
          anchor="left"
          open={isOpen}
          onClose={(): void => openMenu(false)}
        >
          <DrawerContent />
        </Drawer>
      </Hidden>
    </>
  )
}

const DrawerContent: React.FC = () => {
  const { allMdx: { nodes: menuItems } } = useStaticQuery(query)
  return (
    <List>
      {map(menuItems, ({ frontmatter: { name, route } }) => (
        <ListItem button key={name} to={route} component={GatsbyLink}>
          <StyledListItemText>{name}</StyledListItemText>
        </ListItem>
      ))}
    </List>
  )
}

export default Navigation
