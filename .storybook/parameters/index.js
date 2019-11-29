import { create } from '@storybook/theming'

import PropsTable from '../components/PropsTable'
import defaultTheme from '../../src/theme'
const addonInfoPrimary = defaultTheme.palette.primary.main

const theme = create({
  brandTitle: 'components-extra',
})

const storySort = (a, b) =>
  a[1].kind === b[1].kind ? 0 : a[1].id.localeCompare(b[1].id, { numeric: true })

export default {
  options: {
    theme,
    panelPosition: 'right',
    showPanel: true,
    storySort,
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
