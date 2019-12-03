# 2.0.0

## Breaking changes

* The Compound Pattern was applied to all components. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* `Card` now have `Card.Button` for the controls. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Renamed *onCardClick* prop of `Card` component to *onClick*. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* `CookiesBanner` now have `CookiesBanner.Button` for the controls. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* `Footer` now have `Footer.Column` & `Footer.Item` inner components. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Renamed `bannerContent` prop of `Footer` to `bottomBanner`. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Updated all stories with latest changes. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 1.0.0

* First major release of the project. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.6.0

* Updated dependencies. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Add `StyledProvider` and `Customization` stories. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Updated README. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* **Breaking-change**: renamed `otherTheme` prop of *StyledProvider* to `theme`. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.5.2

* Fix `PropTypes.oneOfType` bad representation on API stories. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.5.1

* Fix forgotten export of `CreditCardNumber` component in the main entry. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.5.0

* Add `CreditCardNumber` component. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Add react-hook eslint plugin. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.4.9

* Fix wrong github `repository` value. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.4.8

* Add `README` in published build folder. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.4.7

* Replace `postinstall` script by after build script. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Add `release` script to publish build folder only. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.4.6

* Fixed too big link of `Navbar`'s brand title. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.4.5

* Remove `@material-ui/icons` dependency. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* es5 components can now be imported via `components-extra/[COMPONENT]` if es modules are not supported. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Improved README display. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.4.4

* Fixed typo in package.json. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.4.3

* Fixed build entries in package.json. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.4.2

* Add `babel-plugin-transform-imports` plugin to babel conf to tree shake material-ui imports. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Updated README. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Shorten default components imports from users' projects. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.4.1

* Updated README. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Replaced named imports from `@material-ui/icons` to default. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.4.0

* `components-extra` is now tree-shakable! :) ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Replaced webpack by rollupJS. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Add `cjs`, `umd`, `esm` & `es` builds. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Replaced `.babelrc` config by `babel.config.js` file. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.3.2

* Fix wrong link to CI badge in Readme (again!). ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Fix typo in code snippet in README. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.3.1

* Fix wrong link to CI badge in Readme. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.3.0

* Added components tests. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Added npm versioning scripts to package.json. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Added connection to Travis CI pipelines. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* `Navbar` component now set the first item of `languages` array prop if no default is provided. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.2.2

* Fixed broken API on storybook. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.2.1

* Renamed old Navbar's props `options` & `renderBrandIcon` to `navItems` & `brandIcon`. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Added default value props to components. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* All components are now exported with `React.forwardRef`. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.2.0

* Changed `Footer` main container element from `<div>` to `<footer>`. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Add `Paragraph` component. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Add `CookiesBanner` component. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.1.12

* Add `Footer` component. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.1.11

## Fixes

* Fix README missing symbol in code snippets. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.1.10

## Features

* Add `Menu` & `Contributing` sections in README. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Add more details in `Customization` section in README. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Add `Components` & `Introduction` in storybook, along with `get Started` story. ([@alexandre-lelain](https://github.com/alexandre-lelain))

## Fixes

* Fix typos in README. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.1.9

## Features

* The components' api props-table in the storybook is now generic. ([@alexandre-lelain](https://github.com/alexandre-lelain))

## Fixes

* Fix `Navbar` navigation items bug when using `linkComponent` prop. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Added missing default props in various components. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.1.8

## Fixes

* `Card`'s content is now left aligned. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.1.7

## Features

* Add `Card` component. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.1.6

## Features

* `Navbar` & `BackToTop` components are now exported as styled-components. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.1.5

## Features

* Add badges in Readme. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.1.4

## Fixes

* Fix `Navbar` & `BackToTop` secondary components color. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 0.1.3

## Features

* Initial publish of the project. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Add Navbar, BackToTop & StylesProvider components. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# < 0.1.3

Build not working properly. Do not use.
