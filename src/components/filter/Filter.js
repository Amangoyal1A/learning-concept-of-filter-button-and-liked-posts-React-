import React from "react";
import "../filter/Filter.css"

const Filter = ({ FilterData,category,setCategory }) => {

function handleFilter(title){
setCategory(title)
}

  return (
    <div className="Filter-btn">
      {FilterData.map((data, index) => (
        <button onClick={()=>handleFilter(data.title)} key={index}>{data.title}</button>
      ))}
    </div>
  );
};

export default Filter;
