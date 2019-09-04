# components-extra

[![Storybook](https://cdn.jsdelivr.net/gh/storybookjs/brand@master/badge/badge-storybook.svg)](https://components-extra.netlify.com/) [![npm version](https://img.shields.io/npm/v/components-extra.svg?style=flat)](https://www.npmjs.com/package/components-extra) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/alexandre-lelain/components-extra/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/alexandre-lelain/components-extra/pulls)

React UI components built on top of [styled-components](styled-components.com) & [material-ui components](material-ui.com).

To see the list of available components, please visit the [storybook](https://components-extra.netlify.com).

To see the API of each component, simply visit their `API` story on the storybook. You can also see the source code of each story by clicking the "show info" button on the
top-right corner.

## Motivation

Do you have a web app to develop asap ? With extremely short deadlines ?
Do you want to use [material-design](material.io/design/) standards ?

Well, you are in the right place. This lib was made **just** for **you**.

The aim of the project is to provide **simple-to-use** components built on top of material-ui components & standards.

The components are not too generic for this very simple purpose: **save you time**. They focus
on what they were made for. While you may not be able to customize them from the bottom to the top,
you can bring your own **theme** to customize them with your own styleguide.

## Menu

- [Requirements](#requirements)
- [Installation](#installation)
- [Getting started in only 2 steps](#getting-started-in-only-2-steps)
- [Customization](#customization)
- [Demo](#demo)
- [Contributing](#contributing)

## Requirements

In order for the lib to be the smallest as possible, the three following dependencies are externals to the lib.
So you will need to have those three installed on your app:

- **[react](https://www.npmjs.com/package/react)**
- **[react-dom](https://www.npmjs.com/package/react-dom)**
- **[styled-components](https://www.npmjs.com/package/styled-components)**

## Installation

```shell
yarn add components-extra
```

or

```shell
npm -i components-extra
```

## Getting started in only 2 steps

### Step 1

**components-extra** relies on both [material-ui theme](https://material-ui.com/customization/theming/) configuration
as well as the [styled-components](https://www.styled-components.com/docs/advanced) theming system.

So the first step consists into wrapping your web application in **components-extra**'s default theme provider `<StyledProvider>`:

```js
import { StyledProvider } from 'components-extra'

const App = () => {

  return (
    <StyledProvider>
      <p>Simple, is it not ?</p>
    </StyledProvider>
  )
}
```

Doing so will forward the **theme** object to all the children recursively. Not using it
will result in an JS error.

### Step 2

Import the component you want to use. For example, the `BackToTop` button:

```js
import { BackToTop, StyledProvider } from 'components-extra'

const App = () => {

  return (
    <StyledProvider>
      <BackToTop />
    </StyledProvider>
  )
}
```

And voilà! you're all set and ready to create your website's interface.

## Customization

You can totally override the default **theme**. By default, the components use the
following [custom theme](https://components-extra.netlify.com/?path=/story/theme--default).
This default theme is applied on top of the [material-ui](https://material-ui.com/customization/theming/) one.

You can override this theme with the prop `otherTheme` of the `StyledProvider` component
mentionned above.

Say, for example, you want to override the 2 main palette colors to have this:

```js
// YourTheme.js
export default {
  palette: {
    primary: {
      main: '#0000cc',
    },
    secondary: {
      main: '#ff471a',
    },
  },
}
```

You can apply it this way:

```js
// index.js
import { BackToTop, StyledProvider } from 'components-extra'
import yourTheme from './YourTheme.js'

const App = () => {

  return (
    <StyledProvider otherTheme={yourTheme}>
      <BackToTop />
    </StyledProvider>
  )
}
```

### Extend the components

All the **components-extra** are exported as [styled-components](styled-components.com), so you can extend them, and
use them as styled selectors.


For example, to extend the **BackToTop** component:

```js
import { BackToTop, StyledProvider } from 'components-extra'
import styled from 'styled-components

const CustomBackToTop = styled(BackToTop)`
  opacity: 0.5;
`

const App = () => {

  return (
    <StyledProvider>
      <CustomBackToTop />
    </StyledProvider>
  )
}
```

Or to use it as a styled selector:

```js
import { BackToTop, StyledProvider } from 'components-extra'
import styled from 'styled-components

const Container = styled.div`
  ${BackToTop} {
    opacity: 0.5;
  }
`

const App = () => {

  return (
    <StyledProvider>
      <Container>
        <BackToTop />
      </Container>
    </StyledProvider>
  )
}
```

## Demo

Cick [here](https://components-extra.netlify.com) to see the storybook.

## Contributing

Do you have a component you would like to add in the library ? Please, open an issue and/or
a PR! :)

Do you want to fix a broken features ? Please, go ahead :)

Any ideas, suggestions ? Feel free to open an issue!

If you open a PR, please run the following command to ensure your code meets the lint config, and that it builds correctly. Your code will be prettier-ed automatically when you commit thanks to a pre-commit hook.

```
yarn lint && yarn build
```

