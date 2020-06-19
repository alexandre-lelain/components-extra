import React from 'react'

import { Title1 } from '@components/Titles'
import { SpacedParagraph } from '@components/Paragraph'
import SEO from '@components/Seo'

const NotFoundPage: React.FC = () => (
  <>
    <SEO title="404: Not found" />
    <Title1>NOT FOUND</Title1>
    <SpacedParagraph>You just hit a route that doesn&#39;t exist... the sadness.</SpacedParagraph>
  </>
)

export default NotFoundPage
