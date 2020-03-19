# 2.5.1

## Features

* `BackToTop` button is now animated. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.5.0

## Features

* All components now have a more consistant and coherent usage of the theme. The
backgrounds now relies on the `primary` main color, and the buttons, text & icons on them
now have a `contrastColor` to adapt to any theme value provided. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* `Paragraph`'s default variant changed to `body1`. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* components' elevations now follow those of Material-ui. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.4.2

## Docs

* Update link to bundlesize in README. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.4.1

## Features

* Reduce bundle-size by replacing lodash. ([@alexandre-lelain](https://github.com/alexandre-lelain))

## Fixes

* Add missing `@babel/runtime` dependency. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.4.0

## Features

* Add `dark` theme support in `<StyledProvider>`. ([@alexandre-lelain](https://github.com/alexandre-lelain))

## Docs

* Add `Palette` page and fixed typos. ([@alexandre-lelain](https://github.com/alexandre-lelain))

## Fixes

* Fix label's click not changing value of switch in `CookiesConsent`. ([@alexandre-lelain](https://github.com/alexandre-lelain))

## Chores

* Bump dependencies to latest versions. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* **Breaking-change**: `@material-ui/core` is now a peer-dependency. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.3.4

## Docs

* Remove usage of `Typography` in docs to make copy-paste easier for users. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Add link to Contributing.md in README. ([@alexandre-lelain](https://github.com/alexandre-lelain))

## Fixes

* Fix wrong prop-type of `bottomBanner` prop (Footer) & `icon` prop (Footer.Item). ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.3.3

## Docs

* Fix wrong import in README. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Added `Guides` reference to documentation site. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.3.2

## Docs

* Updated README. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.3.1

## Fixes

* fix to small switch-label's width in `CookiesConsent`. ([@alexandre-lelain](https://github.com/alexandre-lelain))

## Chores

* Updated all dependencies to latest stable versions. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.3.0

## Features

* add `CookiesConsent` component. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.2.4

## Docs

* add `Troubleshooting` section in storybook. ([@alexandre-lelain](https://github.com/alexandre-lelain))

## Fixes

* fix `CookiesBanner`'s cookie icon display on sm screens. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* fix `CookiesBanner`'s elevation. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.2.3

## Features

* `Card`'s description is now of type `node`. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* `Card`'s content will now render inside a `div` instead of a `button` if no onClick function is provided. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.2.2

## Fixes

* Fixed text content of `Newsletter` not being centered. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Navbar's title now has a normal line-height. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.2.1

## Refactor

* Reduce bundle size by replacing `TextField` with `OutlinedInput` in `Newsletter` component. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.2.0

## Features

* Added `Newsletter` component. ([@alexandre-lelain](https://github.com/alexandre-lelain))

## Tests

* Added more accurate tests on forwarded refs. ([@alexandre-lelain](https://github.com/alexandre-lelain))

## Docs

* Added `SSR` section to storybook. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Code snippets of storybook are now styled with `react-syntax-highlighter`. ([@alexandre-lelain](https://github.com/alexandre-lelain))

## Fixes

* Added missing `babel-plugin-transform-react-remove-prop-types` dev dep. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Fix `Navbar` menu not closing on Mobile. ([@alexandre-lelain](https://github.com/alexandre-lelain))

## Chores

* Bump `rollup-plugin-terser` & `@storybook/react` versions. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Bump latest material-ui versions. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Added external plugin to rollup for umd build. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.1.4

## Features

* Set default dimensions props on `Navbar` icons to improve display on SSR rendering. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.1.3

## Fix

* Fix `BackToTop` component crashing on SSR build. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.1.2

## Fix

* Added check for SSR on `BackToTop` button. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.1.1

## Features

* Added `big` prop to `Card`. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.1.0

## Features

* Added `resetCSS` helper to exports. ([@alexandre-lelain](https://github.com/alexandre-lelain))

## Chore

* Bump react & react-dom to 16.12.0. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.0.3

## Features

* `Navbar.Language` now have `smallScreenSupport` bool prop to cut the selectedLanguage on very small screens. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.0.2

## Fixes

* Fixed `Paragraph` component not being exported. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.0.1

## Features

* Add `fonts` section to README & stories. ([@alexandre-lelain](https://github.com/alexandre-lelain))

# 2.0.0

## Breaking changes

* The Compound Pattern was applied to all components. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* `Card` now have `Card.Button` for the controls. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Renamed *onCardClick* prop of `Card` component to *onClick*. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* `CookiesBanner` now have `CookiesBanner.Button` for the controls. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* `Footer` now have `Footer.Column` & `Footer.Item` inner components. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Renamed `bannerContent` prop of `Footer` to `bottomBanner`. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Updated all stories with latest changes. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* `Navbar` now follow compound pattern. ([@alexandre-lelain](https://github.com/alexandre-lelain))
* Added copy&paste example in the storybook. ([@alexandre-lelain](https://github.com/alexandre-lelain))

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
