import { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";

import { fetchDataApi } from "../utils/api";
import SearchResultHeader from "./SearchResultHeader";
import Footer from "./Footer";
import SearchedItem from "./SearchedItem";
import SearchedImageItem from "./SearchedImageItem";
import Pagination from "./Pagination";
import { Context } from "../utils/ContextApi";

function SearchResult() {
  const [result, setResult] = useState();
  const { query, startIndex } = useParams();
  const { imageSearch } = useContext(Context);

  useEffect(() => {
    fetchSearchResult();
  }, [query, startIndex, imageSearch]);

  const fetchSearchResult = () => {
    let payload = { q: query, start: startIndex };
    if (imageSearch) {
      payload.searchType = "image";
    }
    fetchDataApi(payload).then((res) => {
      console.log(res);
      setResult(res);
    });
  };

  if (!result) return;
  const { queries, items, searchInformation } = result;

  return (
    <div className="flex  flex-col min-h-[100vh]">
      <SearchResultHeader />
      <main className="grow  p-[13px] pb-0 md:pr-10 md:pl-20 ">
        <div className="flex text-sm text-[#70747b] mb-4">
          {`About ${searchInformation.formattedTotalResults} results in (${searchInformation.formattedSearchTime})`}
        </div>
        {imageSearch ? (
          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-5 gap-4">
            {items.map((item, index) => (
              <SearchedImageItem key={index} data={item} />
            ))}
          </div>
        ) : (
          <>
            {items.map((item, index) => (
              <SearchedItem key={index} data={item} />
            ))}
          </>
        )}
        <Pagination queries={queries} />
      </main>
      <Footer />
    </div>
  );
}

export default SearchResult;
