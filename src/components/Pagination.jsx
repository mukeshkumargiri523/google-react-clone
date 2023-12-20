import React, { useEffect, useState } from "react";
import { FiChevronRight, FiChevronLeft } from "react-icons/fi";

import { pagination } from "../utils/Constants";
import { useParams, useNavigate } from "react-router-dom";
import pageLogo from "../assets/google-pagination-logo.png";

function Pagination({ queries }) {
  const { query } = useParams();
  const [page, setPage] = useState(pagination[0].startIndex);
  const navigate = useNavigate();

  useEffect(() => {
    setPage(pagination[0].startIndex);
  }, [query]);

  const paginationClickHandler = (startIndex) => {
    setPage(startIndex);
    navigate(`/${query}/${startIndex}`);
  };

  return (
    <div className="flex flex-col items-center py-16 max-w-[660px] ">
      <div className="relative text-[#4284f3]">
        {queries.previousPage && (
          <div
            className="absolute left-[-35px] md:left-[-44px] top-[9px]"
            onClick={() =>
              paginationClickHandler(queries.previousPage[0].startIndex)
            }
          >
            <FiChevronLeft size={24} className="cursor-pointer" />
            <div className="cursor-pointer absolute  top-[20px] hidden md:block">
              Prev
            </div>
          </div>
        )}
        <img className="w-[260px] md:w-[320px]" src={pageLogo} />
        {queries.nextPage && (
          <div
            className="absolute right-[-35px] md:right-[-44px] top-[9px]"
            onClick={() =>
              paginationClickHandler(queries.nextPage[0].startIndex)
            }
          >
            <FiChevronRight size={24} className="cursor-pointer" />
            <div className="cursor-pointer absolute  top-[20px] hidden md:block">
              Next
            </div>
          </div>
        )}
      </div>
      <div className="flex gap-3 text-blue-500 text-sm">
        {pagination.map((p) => (
          <span
            key={p.page}
            onClick={() => paginationClickHandler(p.startIndex)}
            className={`cursor-pointer ${
              page === p.startIndex ? "text-black" : ""
            }`}
          >
            {p.page}
          </span>
        ))}
      </div>
    </div>
  );
}

export default Pagination;
