import React, { useEffect, useState } from 'react'
import styled from 'styled-components'

import { Translate as IconTranslate } from '@material-ui/icons'
import { IconButton, Typography } from '@material-ui/core'

import LanguagesMenu from './LanguagesMenu'

import isEmpty from 'utils/isEmpty'

import { useLanguages } from '../hooks'

const Container = styled.div`
  display: flex;
  align-items: center;
`

const Locale = styled(Typography).attrs(() => ({
  variant: 'body2',
}))`
  margin-right: 12px;
  margin-left: 4px;
`

const Language = () => {
  const { languages } = useLanguages()
  const [currentLang, setCurrentLang] = useState({})
  const [langAnchor, setLangAnchor] = useState(null)

  useEffect(() => {
    const initLang = languages.find(language => language.isDefault) || {}
    setCurrentLang(initLang)
  }, [])

  const { locale } = currentLang

  return (
    !isEmpty(languages) && (
      <>
        <Container>
          <IconButton
            aria-label="Change language"
            color="secondary"
            onClick={e => setLangAnchor(e.currentTarget)}
            title="Change language"
          >
            <IconTranslate />
          </IconButton>
          {locale && <Locale color="secondary">{locale}</Locale>}
        </Container>
        <LanguagesMenu
          langAnchor={langAnchor}
          onClose={() => setLangAnchor(null)}
          setCurrentLang={setCurrentLang}
        />
      </>
    )
  )
}

export default Language
