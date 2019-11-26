import { create } from '@storybook/theming'

import PropsTable from '../components/PropsTable'
import defaultTheme from '../../src/theme'
const addonInfoPrimary = defaultTheme.palette.primary.main

const storySort = (a, b) => {
  const left = a[1]
  const right = b[1]
  if (left.kind !== right.kind || right.name === 'API') {
    return 0
  } else if (left.name === 'Default') {
    return -1
  }
  return left.id.localeCompare(right.id, { numeric: true })
}

const theme = create({
  brandTitle: 'components-extra',
})

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
