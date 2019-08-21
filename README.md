# components-extra

[![Netlify Status](https://api.netlify.com/api/v1/badges/950cb520-b2e5-434f-b777-c36eede4e727/deploy-status)](https://app.netlify.com/sites/components-extra/deploys) [![npm version](https://img.shields.io/npm/v/components-extra.svg?style=flat)](https://www.npmjs.com/package/components-extra) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/alexandre-lelain/components-extra/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/alexandre-lelain/components-extra/pulls)

React UI components built on top of [styled-components](styled-components.com) & [material-ui components](material-ui.com).

To see the list of available components, please visit the [storybook](https://components-extra.netlify.com).

## Motivation

Do you have a web app to develop asap ? With extremely short deadlines ?
Do you want to use [material-design](material.io/design/) standards ?

Well, you are in the right place. This lib was made **just** for **you**.

The aim of the project is to provide **simple-to-use** components built on top of material-ui components & standards.

The components are not too generic for this very simple purpose: **save you time**. They focus
on what they were made for. While you may not be able to customize them from the bottom to the top,
you can bring your own **theme** to customize them with your own styleguide.

## Requirements

To have the smallest build possible, the three following deps are externals to the lib.
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

## Getting started - in 2 steps (only!)

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

And voilà! you're all set :)

## Customization

You can totally override the default **theme**. By default, the components use the
following [custom theme](https://components-extra.netlify.com/?path=/story/theme--default).
This default theme is applied on top of the [material-ui](https://material-ui.com/customization/theming/) one.

You can override this theme with the prop `otherTheme` of the `StyledProvider` component
mentionned above.

Say, for example you want to override the 2 main palette colors to have this:

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


## Demo


Cick [here](https://components-extra.netlify.com) to see the storybook.
