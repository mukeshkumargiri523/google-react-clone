import React from "react";

function SearchedItem({ data }) {
  function createMarkup(htmlsnippet) {
    return { __html: htmlsnippet };
  }
  return (
    <div className="flex flex-col py-4 max-w-[700px]">
      <div
        className="group cursor-pointer"
        onClick={() => window.open(data.link)}
      >
        <div className="text-lg truncate font-semibold text-[#202228]">
          {data.displayLink}
        </div>
        <div className="text-sm truncate text-[#202228]">
          {data.formattedUrl}
        </div>
        <div className="text-xl font-semibold text-[#1a0dab] truncate group-hover:underline pt-2">
          {data.title}
        </div>
      </div>
      <div
        className="text-sm text-[#4d5257] leading-7 pt-2"
        dangerouslySetInnerHTML={createMarkup(data.htmlSnippet)}
      />
    </div>
  );
}

export default SearchedItem;
