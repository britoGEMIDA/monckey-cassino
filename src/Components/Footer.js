import React from 'react';
import styled from "styled-components";

const StyledFooter = styled.footer`
  background-color: #343a40;
  color: #ffffff;
  padding: 50px 0;
  text-align: center;

  h5 {
    margin-bottom: 20px;
  }

  ul {
    padding: 0;
    list-style: none;
  }

  ul li {
    margin-bottom: 10px;
  }

  ul li a {
    color: #ffffff;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  ul li a:hover {
    color: #f0f0f0;
  }

  .row {
    display: flex;
    justify-content: space-around;
  }

  .col-md-4 {
    flex: 0 0 30%;
    max-width: 30%;
  }

  .logo-img {
    width: 130px; /* Tamanho desejado da imagem */
    margin-bottom: 20px;
  }
`;

const Footer = () => {
  return (
    <StyledFooter>
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
            {/* <h5>Logo</h5> */}
            <img src="/img/logo.png" alt="Logo" className="logo-img img-fluid mx-auto" />
          </div>
          <div className="col-md-4 text-center">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Produtos</a></li>
              <li><a href="#">Contatos</a></li>
              <li><a href="/contact">Formulário</a></li>
            </ul>
          </div>
          <div className="col-md-4 text-center">
            <h5>Redes Sociais</h5>
            <ul className="list-unstyled">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>
        </div>
      </div>
    </StyledFooter>
  );
};

export default Footer;
