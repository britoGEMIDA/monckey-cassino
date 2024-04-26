import React from 'react';
import styled from "styled-components";

const Footer = () => {
  return (
    <footer className="bg-dark text-white py-5 d-flex justify-content-center align-items-center">
      <div className="container">
        <div className="row">
          <div className="col-md-4 text-center">
            <h5>Logo</h5>
            <img src="https://via.placeholder.com/80" alt="Logo" className="img-fluid mx-auto" />
          </div>
          <div className="col-md-4 text-center">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li><a href="#">Produtos</a></li>
              <li><a href="#">Contatos</a></li>
              <li><a href="#">Formulário</a></li>
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
    </footer>
  );
};

export default Footer;
