import ImgDmDark from 'assets/img/DMVendas.png';

const NavBar = () => {
  return (
    <div>
      <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-light border-bottom shadow-sm">
        <div className="container">
          <nav className="my-2 my-md-0 mr-md-3">
            <img src={ImgDmDark} alt="DevSuperior" width="120" />
          </nav>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
