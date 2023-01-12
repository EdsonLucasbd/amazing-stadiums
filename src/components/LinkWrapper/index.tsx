import Link from 'next/link'
import * as S from './styles'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
  locale?: string
}

export const LinkWrapper = ({ href, children, locale }: LinkWrapperProps) => {
  return (
    <S.Wrapper>
      <Link href={href} locale={locale}>
        {children}
      </Link>
    </S.Wrapper>
  )
}
