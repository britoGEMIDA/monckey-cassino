import styled from "styled-components";

// Componente funcional Home
const Home = () => {
  return (
    <Container>
      {/* Em React, "Wrapper" é um termo comumente usado para se referir a um componente que envolve (wraps) um ou mais outros componentes.  */}
      {/* Wrapper para o conteúdo de texto */}
      <ContentWrapper>
        <Title>Fortune Tiger</Title>
        <Subtitle>Fortune Tiger é um jogo de apostas e cassino online caracterizado como jogo de azar, desenvolvido pela empresa maltesa NTP DEVS. O sistema de Fortune Tiger é hospedado fora do Brasil e a organização que desenvolveu o jogo não possui registro no país.</Subtitle>
        <CallToAction href="https://www.google.com/search?sca_esv=de93c5c4281f23a7&rlz=1C1CHZN_pt-BRBR1089BR1089&sxsrf=ACQVn08NSRr-9RpQWBpuVkY4TIHLkOPt3A:1714670715797&q=Club+Vegas+-+Jogos+de+Cassino&stick=H4sIAAAAAAAAAONgVeLVT9c3NEypSKmstEw3MxLNyk_PL1ZISVVIrEosUkhOLC7OzMs_xQhRlmxmXl5gYZKLzC80LCo8xcihn6tvYJZTUAWTgpkI46dXGVQZpZgZQJUaWqYgpFIMi82MLcxh_CKTpKocg2IjqFLTIsMsZAstsyvgtiQlm5qX51lWwPhplTlVZoVJBY8YtzJxC7z8cU9YajXTpDUnrzEuYeIS8MnPL07NqQxKzUksSU0JyRcS42JzzSvJLKkU4pHi4oI4LKfQWKiJkYs7OLUkJN83PyUzrVKoWKiQON3GJilZQq6oms2ETLg4fVNzk1KLiv3ThJS5uJzzc3JSk0sy8_OERKWEuQT1k-EC-umJuanFVkwaTEqFRnG7Lk07xxYhyAAE1_SCHKQ0tAS52FzycxMz8wTPNy-bH_T1rb2WMBdHSGJFfl5-bqXg1fiP9tWv3tsrKXIC9Ry4qHPXHqxbKNTigASzApMGgyGQl2A0VeuAFsMEJsamfSsOsXFwMAowGDFxMFQx8CxilXXOKU1SCEtNTyxW0FXwgiUHZ0hKmMDGCAAc2HiINQIAAA&sa=X&lei=f8wzZsuWBPmL5OUP2Lei0Ag">Click agora</CallToAction>
      </ContentWrapper>

      {/* Wrapper para a imagem de destaque */}
      <ImageWrapper>
        <HeroImage src="/img/fortune-tiger-logo.png" alt="Tiger" />
      </ImageWrapper>
    </Container>
  );
};

// Container principal
const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #b19141;
`;

// Wrapper para o conteúdo de texto
const ContentWrapper = styled.div`
  max-width: 500px;
  padding: 40px;
  text-align: center;
`;

// Título principal
const Title = styled.h1`
  font-size: 36px;
  font-weight: bold;
  color: #111111;
  margin-bottom: 20px;
`;

// Subtítulo
const Subtitle = styled.p`
  font-size: 18px;
  color: #010101;
  line-height: 1.5;
  margin-bottom: 30px;
`;

// Botão de "Call to Action"
const CallToAction = styled.a`
  display: inline-block;
  padding: 12px 24px;
  background-color: #010101;
  color: #ffffff;
  text-decoration: none;
  border-radius: 4px;
  font-weight: bold;
  transition: background-color 0.3s ease-in-out;

  &:hover {
    background-color: #0056b3;
  }
`;

// Wrapper para a imagem de destaque
const ImageWrapper = styled.div`
  margin-left: 70px;
`;

// Imagem de destaque
const HeroImage = styled.img`
  max-width: 500px; /* Largura máxima de 500px */
  max-height: 300px; /* Altura máxima de 300px */
  width: auto;
  height: auto;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

export default Home;
