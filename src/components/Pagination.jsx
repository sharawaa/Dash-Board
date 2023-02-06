//import { useState } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pagination.css";
import PageBtn from "./mainComponents/PageBtn";
export default function Pagination() {
  const [currentPage, setCurrentPage] = useState(2);

  return (
    <div className="pagination">
      {currentPage > 2 && (
        <Link
          to={`/products/page/${currentPage - 1}`}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <PageBtn btnName={"Өмнөх"} btnClass={"inActive"} />
        </Link>
      )}
      {currentPage > 1 && (
        <Link
          to={`/products/page/${currentPage - 1}`}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <PageBtn btnName={currentPage - 1} btnClass={"inActive"} />
        </Link>
      )}

      <Link to={`/products/page/${currentPage}`}>
        <PageBtn btnName={currentPage} btnClass={"active_btn"} />
      </Link>

      {(<Link
        to={`/products/page/${currentPage + 1}`}
        onClick={() => setCurrentPage(currentPage + 1)}
      >
        <PageBtn btnName={currentPage + 1} btnClass={"inActive"} />
      </Link>
      )}
      {(<Link
        to={`/products/page/${currentPage + 3}`}
        onClick={() => setCurrentPage(currentPage + 3)}
      >
        <PageBtn btnName={"Дараах"} btnClass={"inActive"} />
      </Link>)}
    </div>
  );
}
