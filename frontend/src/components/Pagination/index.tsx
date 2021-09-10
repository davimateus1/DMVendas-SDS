import { SalePage } from "types/sale";

type Props = {
    page: SalePage;
    onPageChange: Function;
}

const Pagination = ( { page, onPageChange } : Props ) => {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <nav>
          <ul className="pagination">
            <li className={`page-item ${page.first ? 'disabled' : ''}`}>
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true" onClick={() => onPageChange(page.number - 1)}>&laquo;</span>
              </a>
            </li>
            <li className="page-item disabled">
              <span className="page-link">{page.number + 1}</span>
            </li>
            <li className={`page-item ${page.last ? 'disabled' : ''}`}>
              <a className="page-link" href="#" aria-label="Next">
                <span aria-hidden="true" onClick={() => onPageChange(page.number + 1)}>&raquo;</span>
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </div>
  );
};

export default Pagination;
