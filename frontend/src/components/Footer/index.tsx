const Footer = () => {
  return (
    <footer className="footer mt-auto py-3 bg-dark">
      <div className="container">
        <p className="text-light">
          App desenvolvido por{" "}
          <a className="text-decoration-none"
            href="https://github.com/davimateus1"
            target="_blank"
            rel="noreferrer"
          >
            Davi Mateus
          </a>
        </p>
        <p className="text-light">
          <small>
            <strong>Semana Spring React</strong>
            <br />
            Evento promovido pela escola DevSuperior:{" "}
            <a
              href="https://instagram.com/devsuperior.ig"
              target="_blank"
              rel="noreferrer"
              className="text-decoration-none"
            >
              @devsuperior.ig
            </a>
          </small>
        </p>
      </div>
    </footer>
  );
}

export default Footer;
