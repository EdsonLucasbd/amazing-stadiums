import Link from 'next/link'
import * as S from './styles'

type LinkWrapperProps = {
  href: string
  children: React.ReactNode
  locale?: string
  shallow?: boolean
}

export const LinkWrapper = ({
  href,
  children,
  locale,
  shallow
}: LinkWrapperProps) => {
  return (
    <S.Wrapper>
      <Link href={href} locale={locale} shallow={shallow}>
        {children}
      </Link>
    </S.Wrapper>
  )
}
