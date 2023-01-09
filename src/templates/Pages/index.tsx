import { CloseOutline } from '@styled-icons/evaicons-outline/CloseOutline'
import { LinkWrapper } from 'components/LinkWrapper'
import { SettingButton } from 'components/SettingButton'

import * as S from './styles'

export type PageTemplateProps = {
  heading: string
  body: string
}

const PageTemplate = ({ heading, body }: PageTemplateProps) => (
  <S.Content>
    <LinkWrapper href="/">
      <CloseOutline size={32} aria-label="Clique para retornar para o mapa." />
    </LinkWrapper>
    <SettingButton />

    <S.Heading>{heading}</S.Heading>
    <S.Body>
      <div dangerouslySetInnerHTML={{ __html: body }} />
    </S.Body>
  </S.Content>
)

export default PageTemplate
