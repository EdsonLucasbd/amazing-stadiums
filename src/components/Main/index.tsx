import * as S from './styles'

export const Main = () => (
  <S.Wrapper>
    <S.Logo src="/img/logo.svg" alt="" aria-hidden />
    <S.Title>Amazing Boilerplate</S.Title>
    <S.Description>
      TypeScript, ReactJS, NextJS e Styled Components
    </S.Description>
    <S.Illustration
      src="/img/hero-illustration.svg"
      alt="Um desenvolvedor de frente para uma tela com códigos."
    />
  </S.Wrapper>
)
