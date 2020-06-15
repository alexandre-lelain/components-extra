import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { find, includes, map, toLower } from 'lodash-es'
import { useIsDesktop } from 'components-extra'
import { Button, Collapse, Drawer, Hidden, List, ListItem, ListItemText } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { ExpandMore, ExpandLess, Menu } from '@icons'
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

const useListStyle = makeStyles(({ spacing }) => ({
  root: {
    paddingLeft: spacing(4),
  },
}))

const StyledListItemText = styled(ListItemText)`
  ${({ theme: { spacing } }): string => `
    padding: 0 ${spacing(2)}px;
  `}
`

const MENU_ORDER = ['Introduction', 'Components', 'Utils', 'Theming', 'Guides', 'Examples']

const query = graphql`
  {
    allMdx(filter: {frontmatter: {name: {regex: "/[a-z]+/"}}}, sort: {fields: frontmatter___name}) {
      group(field: frontmatter___menu) {
        fieldValue
        nodes {
          frontmatter {
            name
            route
          }
        }
      }
    }
  }
`

const Navigation: React.FC = ({ currentRoute }) => {
  const { root, ...rest } = useStyle()
  const isDesktop = useIsDesktop()
  const [isOpen, openMenu] = useState(false)

  useEffect(() => {
    openMenu(false)
  }, [currentRoute])

  useEffect(() => {
    if (isDesktop) {
      openMenu(false)
    }
  }, [isDesktop])

  return (
    <>
      <Hidden mdDown implementation="css">
        <Drawer classes={rest} variant="permanent" anchor="left">
          <DrawerContent currentRoute={currentRoute} />
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
          <DrawerContent currentRoute={currentRoute} />
        </Drawer>
      </Hidden>
    </>
  )
}

const LeafItem = ({ currentRoute, name, route, ...rest }) => (
  <ListItem button key={name} selected={currentRoute === route} to={route} component={GatsbyLink} {...rest}>
    <StyledListItemText>{name}</StyledListItemText>
  </ListItem>
)

const NodeItem = ({ currentRoute, name, leaves = [] }) => {
  const classes = useListStyle()
  const [open, toggle] = useState(includes(currentRoute, toLower(name)))

  return (
    <>
      <ListItem button onClick={() => toggle(prev => !prev)}>
        <StyledListItemText primary={name}/>
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {map(leaves, ({ frontmatter: { name, route } }) => 
            <LeafItem classes={{...classes}} key={name} name={name} route={route} currentRoute={currentRoute}/>
          )}
        </List>
      </Collapse>
    </>
  )
}

const DrawerContent: React.FC = ({ currentRoute }) => {
  const { allMdx: { group } } = useStaticQuery(query)

  return (
    <List>
      {map(MENU_ORDER, menuName => {
        const { nodes } = find(group, ({ fieldValue }) => fieldValue === menuName)
        if (nodes.length < 2) {
          const { frontmatter } = nodes[0]
          return <LeafItem key={menuName} currentRoute={currentRoute} {...frontmatter} />
        }
        return <NodeItem key={menuName} currentRoute={currentRoute} name={menuName} leaves={nodes}/>
      })}
    </List>
  )
}

export default Navigation
