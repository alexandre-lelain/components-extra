import React, { useState, useEffect, createContext, useContext } from 'react'
import styled from 'styled-components'
import { find, includes, map, toLower } from 'lodash-es'
import { useIsDesktop } from 'components-extra'
import packageConfig from 'components-extra/package.json'
import {
  Button,
  Collapse,
  Drawer,
  Hidden,
  List,
  ListItem,
  ListItemText,
  ListItemProps,
  Typography,
} from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { ExpandMore, ExpandLess, Menu } from '@icons'
import { Link as GatsbyLink, useStaticQuery, graphql } from 'gatsby'
import { StaticImage } from 'gatsby-plugin-image'

const { version } = packageConfig

const useStyle = makeStyles(({ zIndex, transitions }) => ({
  paper: {
    minWidth: 250,
    zIndex: zIndex.appBar - 1,
    transition: transitions.backgroundColor,
  },
}))

const useListStyle = makeStyles(({ spacing }) => ({
  root: {
    paddingLeft: spacing(4),
  },
  subListItem: {
    paddingTop: spacing(0.5),
    paddingBottom: spacing(0.5),
  },
  primary: {
    fontWeight: 500,
  },
}))

const StyledNavButton = styled(Button)`
  ${({ theme: { breakpoints, spacing } }): string => `
    margin-left: ${spacing(3)}px;
    ${breakpoints.down('xs')} {
      margin-left: ${spacing(1)}px;
    }
  `}
`

const DrawerContainer = styled.div`
  padding: 72px 0;
`

const StyledListItemText = styled(ListItemText)`
  ${({ theme: { spacing } }): string => `
    padding: 0 ${spacing(2)}px;
  `}
`

const ImageContainer = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  ${({ theme: { spacing } }): string => `
    padding: ${spacing(2)}px;
  `}
`

const MENU_ORDER = ['Introduction', 'Components', 'Utils', 'Theming', 'Guides', 'Examples']

const query = graphql`
  {
    allMdx(
      filter: { frontmatter: { name: { regex: "/[a-z]+/" } } }
      sort: { fields: frontmatter___name }
    ) {
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

const RouteContext = createContext('/')

const RouteProvider: React.FC<RouteProviderProps> = ({
  currentRoute,
  ...rest
}: RouteProviderProps) => <RouteContext.Provider value={currentRoute} {...rest} />

const useCurrentRoute = (): string => useContext(RouteContext)

const Navigation: React.FC<NavigationProps> = ({ currentRoute }: NavigationProps) => {
  const classes = useStyle()
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
    <RouteProvider currentRoute={currentRoute}>
      <Hidden mdDown implementation="css">
        <Drawer classes={{ ...classes }} variant="permanent" anchor="left">
          <DrawerContent />
        </Drawer>
      </Hidden>
      <Hidden lgUp implementation="css">
        <StyledNavButton startIcon={<Menu />} onClick={(): void => openMenu((prev) => !prev)}>
          Navigation
        </StyledNavButton>
        <Drawer
          classes={{ ...classes }}
          variant="temporary"
          anchor="left"
          open={isOpen}
          onClose={(): void => openMenu(false)}
        >
          <DrawerContent />
        </Drawer>
      </Hidden>
    </RouteProvider>
  )
}

const LeafItem: React.FC<LeafItemProps> = ({ name, route, isRoot, ...rest }: LeafItemProps) => {
  const currentRoute = useCurrentRoute()
  const classes = useListStyle()

  return (
    <ListItem
      button
      key={name}
      selected={currentRoute === route}
      to={route}
      component={GatsbyLink}
      className={isRoot ? undefined : classes.subListItem}
      {...rest}
    >
      <StyledListItemText classes={{ primary: isRoot ? classes.primary : undefined }}>
        {name}
      </StyledListItemText>
    </ListItem>
  )
}

const NodeItem: React.FC<NodeItemProps> = ({ name, leaves = [] }: NodeItemProps) => {
  const currentRoute = useCurrentRoute()
  const classes = useListStyle()
  const [open, toggle] = useState(includes(currentRoute, toLower(name)))

  return (
    <>
      <ListItem button onClick={(): void => toggle((prev) => !prev)}>
        <StyledListItemText primary={name} classes={{ primary: classes.primary }} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={open} timeout="auto" unmountOnExit>
        <List component="div" disablePadding>
          {map(leaves, ({ frontmatter: { name, route } }) => (
            <LeafItem classes={{ root: classes.root }} key={name} name={name} route={route} />
          ))}
        </List>
      </Collapse>
    </>
  )
}

const DrawerContent: React.FC = () => {
  const {
    allMdx: { group },
  } = useStaticQuery(query)

  return (
    <DrawerContainer>
      <ImageContainer>
        <StaticImage
          src="../images/logo.webp"
          layout="fixed"
          width={200}
          placeholder="blurred"
          alt="logo"
        />
        <Typography>v{version}</Typography>
      </ImageContainer>
      <List>
        {map(MENU_ORDER, (menuName) => {
          const { nodes } = find(group, ({ fieldValue }) => fieldValue === menuName)
          if (nodes.length < 2) {
            const { frontmatter } = nodes[0]
            return <LeafItem key={menuName} {...frontmatter} isRoot />
          }
          return <NodeItem key={menuName} name={menuName} leaves={nodes} />
        })}
      </List>
    </DrawerContainer>
  )
}

type LeafType = {
  name: string
  route: string
}

type LeavesType = {
  frontmatter: LeafType
}

interface RouteProviderProps {
  children: React.ReactNode
  currentRoute: string
}

interface NavigationProps {
  currentRoute: string
}

interface LeafItemProps extends ListItemProps {
  button?: any
  component?: React.ElementType
  name: string
  route: string
  to?: string
  isRoot?: boolean
}

interface NodeItemProps {
  name: string
  leaves?: LeavesType[]
}

export default Navigation
