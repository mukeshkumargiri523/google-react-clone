import React from "react";

function SearchedImageItem({ data }) {
  return (
    <div
      className="group flex flex-col py-3 cursor-pointer"
      onClick={() => window.open(data.image.contextLink)}
    >
      <div className="rounded-xl overflow-hidden bg-black/[0.01] h-[130px] md:[h-150px] lg:[h-170px] group-hover:shadow-xl">
        <img src={data.link} alt="" className="h-full w-full object-contain" />
      </div>
      <div className="text-xs text-[#70757b] pt-2">{data.displayLink}</div>
      <div className="text-sm text-[#70757b] truncate pt-1 group-hover:underline">
        {data.title}
      </div>
    </div>
  );
}

export default SearchedImageItem;
