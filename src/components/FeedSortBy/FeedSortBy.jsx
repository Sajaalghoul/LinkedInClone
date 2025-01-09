import { useState } from "react";

const FeedSortBy = () => {
  const [selectType, setSelectType] = useState("top");
  const handleSelect = (event) => setSelectType(event.target.value);

  return (
    <div
      className="flex justify-center items-center
     px-5 py-1 text-black cursor-pointer text-sm "
    >
      <hr className="h-0.5 " />
      <p className="pl-2">SortBy:</p>
      <select
        value={selectType}
        className="cursor-pointer"
        onChange={handleSelect}
      >
        <option value="top">Top</option>
        <option value="recent">Recent</option>
      </select>
    </div>
  );
};

export default FeedSortBy;
