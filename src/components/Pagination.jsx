//import { useState } from "react";
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "../styles/pagination.css";
import PageBtn from "./mainComponents/PageBtn";
import User from "./mainComponents/User";

export default function Pagination({ lastPage }) {
  const zugeer = useParams();

  const [currentPage, setCurrentPage] = useState(zugeer && Number(zugeer.id));
  useEffect(() => {
    setCurrentPage(zugeer && Number(zugeer.id));
  }, [zugeer]);
  return (
    <div className="pagination">
      {/* {currentPage > 2 && (
        <Link
          to={`/products/page/${currentPage - 1}`}
          onClick={() => setCurrentPage(currentPage - 1)}
        >
          <PageBtn btnName={"Өмнөх"} btnClass={"inActive"} />
        </Link>
      )} */}
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

      {lastPage > currentPage && (
        <Link
          to={`/products/page/${currentPage + 1}`}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <PageBtn btnName={currentPage + 1} btnClass={"inActive"} />
        </Link>
      )}
      {/* {lastPage > currentPage && (
        <Link
          to={`/products/page/${currentPage + 1}`}
          onClick={() => setCurrentPage(currentPage + 1)}
        >
          <PageBtn btnName={"Дараах"} btnClass={"inActive"} />
        </Link>
      )} */}
      {/* {lastPage < 2 && (
        <Link to={`/products/page/${lastPage}`}>
          <PageBtn btnName={lastPage} btnClass={"inActive"} />
        </Link>
      )} */}
    </div>
  );
}
