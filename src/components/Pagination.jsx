//import { useState } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import "../styles/pagination.css"
import PageBtn from "./mainComponents/PageBtn";
export default function Pagination(){

    const [currentPage, setCurrentPage] = useState();

    return(
        <div className="pagination">
            {/* <Link to={`/page/${currentPage-1}`} onClick={setCurrentPage(setCurrentPage-1)}>
            <PageBtn btnName={currentPage-1} btnClass={"inActive"} />
            </Link> */}

            <Link to={`/products/page/1`} >
               <PageBtn btnName={1} btnClass={"active"} />
            </Link>

            <Link to={`/products/page/${2}`}  onclick={setCurrentPage(currentPage+1)}>
                <PageBtn btnName={currentPage+1} btnClass={"inActive"}/>
            </Link>


        </div>
    )
}