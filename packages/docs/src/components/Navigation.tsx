import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { useIsDesktop } from 'components-extra'
import { Button, Drawer, Hidden } from '@material-ui/core'
import { makeStyles } from '@material-ui/core/styles'

import { Menu } from '@icons'

const useStyle = makeStyles(({ zIndex, transitions }) => ({
  paper: {
    padding: '84px 32px',
    zIndex: zIndex.appBar - 1,
    transition: transitions.backgroundColor,
  },
  modal: {
    zIndex: zIndex.appBar - 1 + '!important',
  },
}))

const Navigation: React.FC = () => {
  const classes = useStyle()
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
        <Drawer classes={classes} variant="permanent" anchor="left">
          <DrawerContent />
        </Drawer>
      </Hidden>
      <Hidden mdUp implementation="css">
        <Button startIcon={<Menu />} onClick={(): void => openMenu((prev) => !prev)}>
          Navigation
        </Button>
        <Drawer
          classes={classes}
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
  return <h1>Totocap</h1>
}

export default Navigation
