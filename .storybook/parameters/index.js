import { create } from '@storybook/theming'

import PropsTable from '../components/PropsTable'
import defaultTheme from '../../src/theme'
const addonInfoPrimary = defaultTheme.palette.primary.main

const theme = create({
  brandTitle: 'components-extra',
})

export default {
  options: {
    theme,
    sidebarAnimations: false,
    panelPosition: 'right',
    showPanel: true,
  },
}

export const infoConfig = {
  header: false,
  TableComponent: PropsTable,
  propTables: null,
  styles: {
    propTableHead: {
      color: addonInfoPrimary,
      h1: {
        color: addonInfoPrimary,
      },
    },
    source: {
      color: addonInfoPrimary,
      h1: {
        color: addonInfoPrimary,
      },
    },
    header: {
      h1: {
        color: addonInfoPrimary,
      },
      h2: {
        color: addonInfoPrimary,
      },
      h3: {
        color: addonInfoPrimary,
      },
      body: {
        color: addonInfoPrimary,
      },
    },
  },
}
