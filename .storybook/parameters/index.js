import { create } from '@storybook/theming'

const theme = create({
  brandTitle: 'components-extra',
})

export default {
  options: {
    theme,
    addonPanelInRight: true,
  },
}
