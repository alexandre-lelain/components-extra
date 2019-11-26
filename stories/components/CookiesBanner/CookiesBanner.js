import React from 'react'
import styled from 'styled-components'
import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { Typography } from '@material-ui/core'

import CookiesBanner, { BaseCookiesBanner } from 'components/CookiesBanner'
import createApiStory from '../../helpers/createApiStory'

const story = storiesOf('Components|CookiesBanner', module)

const COOKIE_TEXT =
  'Please be aware that this awesome cookies banner informs you that this awesome website uses cookies. Why ? Because cookies are an awesome delight of course!'

const FixedCookiesBannerContainer = styled.div`
  position: fixed;
  width: 100%;
  ${({ isBottom }) => (isBottom ? 'bottom: 0;' : 'top: 0;')};
`

story.add('Default', () => (
  <CookiesBanner text={COOKIE_TEXT}>
    <CookiesBanner.Button href="#">More information</CookiesBanner.Button>
    <CookiesBanner.Button onClick={action('Got-it-button clicked!')}>
      Awesome, I got it!
    </CookiesBanner.Button>
  </CookiesBanner>
))

story.add('With one button only', () => (
  <CookiesBanner text={COOKIE_TEXT}>
    <CookiesBanner.Button href="#">More information</CookiesBanner.Button>
  </CookiesBanner>
))

story.add('With a custom component of your choice', () => (
  <CookiesBanner text={COOKIE_TEXT}>
    <button onClick={action('Got-it-button clicked!')}>Your awesome control component</button>
  </CookiesBanner>
))

story.add('Real life situation (top)', () => (
  <>
    <FixedCookiesBannerContainer>
      <CookiesBanner text={COOKIE_TEXT}>
        <CookiesBanner.Button href="#">More information</CookiesBanner.Button>
        <CookiesBanner.Button onClick={action('Got-it-button clicked!')}>
          Awesome, I got it!
        </CookiesBanner.Button>
      </CookiesBanner>
    </FixedCookiesBannerContainer>
    <HugeText />
  </>
))

story.add('Real life situation (bottom)', () => (
  <>
    <FixedCookiesBannerContainer isBottom>
      <CookiesBanner text={COOKIE_TEXT}>
        <CookiesBanner.Button href="#">More information</CookiesBanner.Button>
        <CookiesBanner.Button onClick={action('Got-it-button clicked!')}>
          Awesome, I got it!
        </CookiesBanner.Button>
      </CookiesBanner>
    </FixedCookiesBannerContainer>
    <HugeText />
  </>
))

createApiStory(story, BaseCookiesBanner)

const HugeText = () => (
  <Typography>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque sed pellentesque justo.
    Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Duis
    lorem risus, vulputate pulvinar feugiat aliquam, blandit vitae ante. Aliquam nunc nisl, mollis
    non tincidunt a, sollicitudin sit amet mi. Morbi vehicula ac ex quis laoreet. Pellentesque
    aliquam elit suscipit nunc posuere dictum. Pellentesque tincidunt, augue id porttitor efficitur,
    nibh sem auctor orci, non finibus enim felis suscipit tellus. Cras risus eros, aliquam vel nibh
    sit amet, venenatis volutpat est. Quisque at pulvinar quam, et pretium metus. Nam quis
    sollicitudin neque. Praesent tempor hendrerit tortor a ultrices. Nunc luctus, lorem sed laoreet
    sagittis, tortor libero pretium leo, a finibus tellus odio sit amet nulla. Vestibulum ultrices
    pharetra faucibus. Mauris dolor urna, posuere sed blandit vitae, aliquam eget tortor. Duis
    scelerisque leo in orci blandit finibus. Pellentesque elementum consequat augue et tempor.
    Quisque ut urna laoreet, gravida leo et, feugiat risus. Sed non nisi non turpis consectetur
    aliquam ut ut magna. Cras imperdiet felis dui, et ultricies mi vehicula in. Duis volutpat, lorem
    vitae feugiat lacinia, arcu elit volutpat odio, eu cursus nibh orci at nulla. Nullam odio
    lectus, semper ac molestie vitae, porttitor id lectus. Sed tellus mauris, varius quis ligula eu,
    accumsan ornare nisl. Maecenas a mollis ex. Donec a ex dui. Morbi euismod finibus elit. Aliquam
    quis mi luctus, facilisis nunc nec, scelerisque metus. Aenean turpis dui, faucibus condimentum
    rutrum id, rhoncus at dui. Curabitur velit nisi, rutrum hendrerit lectus quis, laoreet ultricies
    purus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus ultricies erat at
    purus feugiat facilisis. Vivamus dictum mollis tellus nec malesuada. Sed dictum vulputate quam,
    consectetur finibus massa. Sed ultricies ut felis nec facilisis. Nam lacinia sapien nec lectus
    feugiat elementum. Suspendisse ut eleifend mi. Quisque malesuada ligula ac elit elementum, ac
    imperdiet lectus vulputate. Curabitur sed justo sodales, blandit augue ac, congue nulla. Nulla
    tristique tellus ligula, et maximus nisl pretium ut. Proin sit amet feugiat quam, ac molestie
    nibh. Ut congue lacus vel velit commodo rhoncus. Nam pharetra tincidunt egestas. Proin ornare
    eros tortor, a auctor libero dignissim sed. Sed quam leo, dignissim at ipsum ultrices, euismod
    volutpat enim. Sed et neque sodales, tincidunt diam in, sodales quam. Donec fermentum diam eu
    felis gravida, eget porta nibh bibendum. Donec eu elementum tortor, at vestibulum sapien. Fusce
    ultricies orci quis cursus vehicula. Maecenas a viverra lectus. In sem mauris, varius quis felis
    vulputate, luctus vulputate sem. Sed maximus sagittis quam sit amet luctus. Vivamus porttitor
    posuere eros, quis pretium est egestas nec. Aenean metus velit, fermentum nec justo id,
    imperdiet venenatis est. Pellentesque efficitur urna non eros interdum facilisis. Sed sed ex a
    ipsum dignissim congue. Aliquam bibendum ante ac mollis tempus. Vestibulum in arcu in metus
    bibendum efficitur vel eget libero. In magna dolor, facilisis a mauris sed, rhoncus congue ante.
    Sed nibh turpis, porttitor non vehicula at, gravida et nulla. Interdum et malesuada fames ac
    ante ipsum primis in faucibus. Nulla quis ex eu justo pellentesque tempus vel nec odio. Cras
    fringilla nunc id nisi bibendum tincidunt. Aliquam malesuada laoreet diam, at pellentesque velit
    faucibus vitae. Vivamus eleifend sit amet eros non suscipit. Morbi consequat sodales nisl sit
    amet auctor. Pellentesque et nunc ante. Praesent tempor, felis vitae ornare eleifend, neque elit
    finibus eros, quis tincidunt augue tortor in odio. Nam sagittis metus non magna varius, sit amet
    posuere turpis rhoncus. Ut ac molestie tortor, suscipit posuere massa. Nam aliquam est tellus.
    Ut sodales leo non mi semper, vitae commodo urna faucibus. Phasellus posuere ac elit ut
    elementum. Sed efficitur, nulla a elementum sagittis, enim velit tempor nisi, non consectetur
    lectus quam a lorem. Fusce dapibus est at lacinia suscipit. Duis fringilla et nunc non mattis.
    Morbi tempus dictum viverra. Aenean mollis placerat risus, ut condimentum ligula facilisis in.
    Curabitur diam nibh, auctor et quam vitae, fermentum aliquam lacus. Donec quis accumsan lorem,
    ut porttitor mi. Mauris venenatis, sapien id vestibulum condimentum, nibh mauris dignissim
    magna, eu scelerisque quam mauris in nulla. Sed ultrices blandit nunc, ut congue urna. Nullam
    rhoncus justo ultricies eros euismod facilisis. Integer eu mi sit amet turpis pretium vestibulum
    non at lorem. Nunc nec venenatis libero. Nulla sed velit mattis, bibendum lorem at, feugiat dui.
    Suspendisse mi justo, malesuada vel urna eu, lacinia dictum enim. Donec eget sagittis mauris. Ut
    luctus semper erat, quis aliquam enim. Suspendisse luctus eros nisi, sit amet rhoncus enim
    sollicitudin nec. Phasellus interdum mollis nisl, ac dignissim purus venenatis vel. Cras ornare
    ultrices leo et volutpat. Quisque viverra placerat orci, sed laoreet leo bibendum non. Sed vel
    purus malesuada, venenatis ipsum vel, lobortis quam. Duis commodo tortor est, eget dignissim
    lorem viverra vitae. Nam fringilla enim vel tellus aliquet condimentum. Integer sed libero
    luctus, aliquet lectus eu, elementum dui. Mauris dapibus purus et tincidunt tincidunt. Fusce id
    tempor leo, id euismod nulla. Nullam et dapibus tortor, eget eleifend est. Maecenas vitae est eu
    est laoreet euismod. Cras tristique neque non porttitor tempor. Phasellus placerat nisl et
    consectetur venenatis. Vivamus ac urna risus. Aliquam non nisi ultrices, fringilla dolor in,
    hendrerit est. Donec non lectus arcu. Aliquam scelerisque at arcu non tempor. Nulla tincidunt
    sagittis justo, non elementum augue posuere id. Donec tincidunt non mi sed auctor. Fusce massa
    nulla, rhoncus eget eros eget, vulputate aliquam purus. Phasellus at sem lacus. Phasellus ornare
    mollis lorem, sed eleifend neque placerat in. Nullam ligula metus, posuere ac augue vitae,
    ullamcorper vestibulum urna. Vivamus commodo velit magna, et rhoncus diam venenatis sit amet.
    Aliquam tincidunt ultrices massa ut porttitor. Aliquam erat volutpat. Quisque in feugiat nulla,
    in tristique metus. Praesent rhoncus sit amet purus quis blandit. Nulla ullamcorper, tortor in
    tristique tincidunt, sem ex tempor nibh, in fermentum quam nulla at est. Fusce mattis nulla
    quam, vitae egestas lacus blandit at. Praesent lacus dui, laoreet id nulla eu, finibus
    pellentesque urna. Ut sed justo et tellus ornare auctor nec bibendum neque. Pellentesque et
    sagittis dui, blandit ullamcorper lorem. Pellentesque semper id sapien a facilisis. Cras sodales
    elit eu nisi blandit, ac consequat mi aliquet. Integer quis ante ullamcorper, blandit quam ac,
    molestie est. Ut ac auctor quam, sit amet blandit est. Aliquam lacinia scelerisque risus et
    placerat. Vivamus id commodo justo. Ut vulputate consequat enim ac dapibus. Maecenas euismod
    elit leo. Donec dignissim lacinia suscipit. Sed ultricies pretium metus at ullamcorper. Nulla
    dolor ligula, tristique id volutpat quis, suscipit at purus. Vivamus tempus nibh vel metus
    feugiat, non rhoncus quam vestibulum. Suspendisse iaculis eleifend elit. Vestibulum pharetra
    rutrum ligula quis tristique. Mauris elit augue, tempus at nunc ut, malesuada fringilla magna.
    Suspendisse potenti. Nullam ac ligula id sem vulputate euismod. Morbi urna velit, scelerisque
    sed dictum vitae, dapibus at justo. Etiam dapibus massa vel mattis fringilla. Curabitur molestie
    gravida aliquet. In hac habitasse platea dictumst. Quisque semper mauris sed odio tincidunt
    molestie. Vestibulum vitae nibh hendrerit eros malesuada auctor sollicitudin at massa. Maecenas
    accumsan tellus id nisl consectetur mattis in quis lacus. Suspendisse congue nulla ac lorem
    sodales rhoncus. Proin ultrices ante convallis nisi ultricies dictum. Etiam ultrices vehicula
    ipsum, eget dapibus urna blandit a. Fusce nec nunc eu eros porta lobortis. Curabitur a sem
    condimentum, finibus velit a, fringilla erat. Donec consequat viverra lorem sed hendrerit. Ut
    porttitor condimentum leo iaculis scelerisque. Aenean vel venenatis ex. Fusce aliquam a sapien
    laoreet aliquam. Vivamus rhoncus, ante vel pharetra pellentesque, purus lorem posuere justo,
    quis venenatis sapien ligula nec erat. Fusce pulvinar malesuada tellus, vestibulum tempus ante
    tincidunt sed. Curabitur at posuere velit, dapibus ultrices mi. Aenean eget ante elit. Nunc
    luctus augue non sodales ultricies. Mauris vehicula at justo a convallis. Curabitur sit amet est
    in erat luctus rhoncus. Cras condimentum tincidunt nibh vitae cursus. Fusce molestie dui
    interdum risus auctor, non lobortis orci feugiat. Vestibulum tempor est sit amet tincidunt
    elementum. Integer eu consectetur velit. Integer sit amet mollis nibh.
  </Typography>
)
