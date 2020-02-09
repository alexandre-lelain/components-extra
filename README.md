<div align="center">
  <h1>components-extra</h1>

  <p>React UI molecule-components built on top of <a href="https://styled-components.com">styled-components</a> & <a href="https://material-ui.com">material-ui components</a>.
  </p>

  <br/>

  [**Read the API**](https://components-extra.netlify.com)

  <br/>

  [![Docs Status](https://api.netlify.com/api/v1/badges/950cb520-b2e5-434f-b777-c36eede4e727/deploy-status)](https://components-extra.netlify.com/) [![npm version](https://img.shields.io/npm/v/components-extra.svg?style=flat)](https://www.npmjs.com/package/components-extra) [![ci status](https://travis-ci.org/alexandre-lelain/components-extra.svg?branch=master)](https://travis-ci.org/alexandre-lelain/components-extra) [![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://github.com/alexandre-lelain/components-extra/blob/master/LICENSE) [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)](https://github.com/alexandre-lelain/components-extra/pulls)
[![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)
[![style: styled-components](https://img.shields.io/badge/style-%F0%9F%92%85%20styled--components-orange.svg?colorB=daa357&colorA=db748e)](https://github.com/styled-components/styled-components)
[![build formats](https://img.shields.io/badge/module%20formats-umd%2C%20cjs%2C%20esm-green.svg)](https://github.com/alexandre-lelain/components-extra)


</div>

## Motivation

Do you have a web application to develop as soon as possible ? Are you tired of duplicating components such as a Navbar or a CookiesBanner across all your applications ?
Do you want to use [material-design](material.io/design/) standards ?

Well, you are in the right place. This lib was made **just** for **you**.

The aim of the project is to provide fast-to-use **molecule** components (like a Navbar, a CookiesBanner, and so on) built on top of material-ui components & standards.

The components are built under the [compound pattern](https://kentcdodds.com/blog/compound-components-with-react-hooks) with this very simple purpose: **save you time**. They focus
on what they were made for. They have very few props so you can integrate them **right-away** as they all have
a built-in default behavior.

The compound pattern allows you to customize easily any single inner component of a molecule component, and
you can bring your own **theme** to customize them with your own styleguide.

## Menu

- [UI components](#ui-components)
- [Requirements](#requirements)
- [Installation](#installation)
- [Getting started in only 2 steps](#getting-started-in-only-2-steps)
- [Customization](#customization)
- [Bundling in your project](#bundling-in-your-project)
- [Contributing](#contributing)


## UI components

[Cick here](https://components-extra.netlify.com) to see the list of available components the lib has to offer. You can check out the props of each component, see the source code of the stories and even play with them live with the react-live editor.


## Requirements

In order for the lib to be the smallest possible, the three following dependencies are externals to the lib.
So you will need to have those three installed on your app:

- **[react >= 16.8.0](https://www.npmjs.com/package/react)**
- **[react-dom >= 16.8.0](https://www.npmjs.com/package/react-dom)**
- **[styled-components](https://www.npmjs.com/package/styled-components)**

## Installation

```shell
yarn add components-extra
```

or

```shell
npm -i components-extra
```

Some more good news: This library is **tree-shakeable** and **side-effect free**! It also supports older builds like cjs and umd if needed.

### Fonts

Like Material-UI, the components all use **[Roboto](https://fonts.google.com/specimen/Roboto)** font-familly as their main option, but it is not included in **components-extra** to provide more freedom to the developers.

You have to manually use the following CDN link to include the Roboto font in your application:

```html
<link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
```

## Getting started in only 2 steps

### Step 1

**components-extra** relies on both [material-ui theme](https://material-ui.com/customization/theming/) configuration as well as the [styled-components](https://www.styled-components.com/docs/advanced) theming system.

So the first step consists into wrapping your web application in **components-extra**'s default theme provider `<StyledProvider>`:

```jsx
import React from 'react'
import { StyledProvider } from 'components-extra'

const App = () => {

  return (
    <StyledProvider>
      <p>Simple, is it not ?</p>
    </StyledProvider>
  )
}
```

Doing so will forward the **theme** object to all the children recursively. Not using this Provider above
the other components will result in an JS error.

### Step 2

Import the component you want to use. For example, the `BackToTop` button:

```jsx
import React from 'react'
import { BackToTop, StyledProvider } from 'components-extra'

const App = () => {

  return (
    <StyledProvider>
      <BackToTop />
    </StyledProvider>
  )
}
```

And voilà! You're all set and ready to create your website's interface.

## Customization

You can totally override the default **theme**. By default, the components use the
following [custom theme](https://components-extra.netlify.com/?path=/story/introduction-default-theme--values).
This default theme is applied on top of the [material-ui](https://material-ui.com/customization/theming/) one.

You can override this theme with the prop `theme` of the `StyledProvider` component
mentionned above.

> **Note:** your theme object needs to follow the structure of Material-ui's theme. You can find it here: https://material-ui.com/customization/default-theme/

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
import yourTheme from './YourTheme'

const App = () => {

  return (
    <StyledProvider theme={yourTheme}>
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
import styled from 'styled-components'

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
import styled from 'styled-components'

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

## Bundling in your project

**components-extra** is tree-shakeable, meaning that you can import its components as named imports, like this:

```jsx
import { BackToTop } from 'components-extra'
```

If your bundler is set up to use the tree-shakeable libraries, it will automatically **only add the named imports
you used**. In this example, only the `BackToTop` button will be included in your bundle.

Else, if your bundler is not set up to use **esm/es** builds, you can still only include the components you need
by importing them as defaults like this:

```jsx
import BackToTop from 'components-extra/components/BackToTop'
```

## Contributing

Do you have a component you would like to add in the library ? Please, open an issue and/or
a PR! :)

Do you want to fix a broken feature ? Please, go ahead :)

Any ideas, suggestions ? Feel free to open an issue!

More about contributing guidelines & how to's can be found [here](https://github.com/alexandre-lelain/components-extra/blob/master/CONTRIBUTING.md).