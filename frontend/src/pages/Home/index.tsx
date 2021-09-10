import Footer from "components/Footer";
import NavBar from "components/NavBar";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <>
    <NavBar />
      <div className="container text-center">
        <div className="jumbotron">
          <h1 className="display-4">DM Vendas</h1>
          <p className="lead">
            Analise o desempenho das suas vendas por diferentes perspectivas
          </p>
          <hr />
          <p>
            Esta aplicação consiste em exibir um dashboard a partir de dados
            fornecidos por um back end construído com Spring Boot.
          </p>
          <Link to="/dashboard">
          <button type="button" className="btn btn-lg btn-outline-danger col-md-12">Acessar Dashboard</button>
          </Link>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Home;
