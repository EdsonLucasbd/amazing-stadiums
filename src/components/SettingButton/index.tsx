import { SettingsOutline, CloseOutline } from '@styled-icons/evaicons-outline'
import { useState } from 'react'
import * as S from './styles'
import { useRouter } from 'next/router'
import Link from 'next/link'

export const SettingButton = () => {
  const [isOpen, setIsOpen] = useState(false)

  const router = useRouter()
  const { pathname, asPath, query, locales, locale: activeLocale } = router

  const handleOpenMenu = () => {
    setIsOpen(!isOpen)
  }

  return (
    <S.Wrapper>
      <button onClick={() => handleOpenMenu()}>
        <SettingsOutline
          size={32}
          aria-label="Clique para acessar as configurações de idioma"
        />
      </button>
      <S.MenuContainer open={isOpen}>
        <button onClick={() => handleOpenMenu()}>
          <CloseOutline
            size={32}
            aria-label="Clique para acessar as configurações de idioma"
          />
        </button>
        <S.LanguageContainer>
          <p>{router.locale === 'pt_BR' ? 'Idioma:' : 'Language:'}</p>

          <S.ListWrapper>
            {locales?.map((locale) => {
              return (
                <S.ListItem current={locale === activeLocale} key={locale}>
                  <Link
                    href={{ pathname, query }}
                    as={asPath}
                    locale={locale}
                    onClick={handleOpenMenu}
                    legacyBehavior={false}
                  >
                    {locale}
                  </Link>
                </S.ListItem>
              )
            })}
          </S.ListWrapper>
        </S.LanguageContainer>
      </S.MenuContainer>
    </S.Wrapper>
  )
}
