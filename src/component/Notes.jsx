import React from "react";
import Note from "./Note";
import { useState } from "react";
import ReactPaginate from "react-paginate";

export default function Notes ({ notes, onDelete, onEdit }) {
  const [currentPage, setCurrentPage] = useState(0);

  const PER_PAGE = 3;
  const pageCount = Math.ceil(notes.length / PER_PAGE);

  function handlePageclick({ selected: selectedPage}) {
    setCurrentPage(selectedPage);
  }
  const offset = currentPage * PER_PAGE;
  return (
    <>
    <div className="flex flex-col ">
      {notes.slice(offset, offset + PER_PAGE).map((item) => (
        <Note key={item.id} note={item} onDelete={onDelete} onEdit={onEdit} />
      ))}{" "}
    </div>
    <ReactPaginate
       breakLabel="..."
       previousLabel="< previous"
       nextLabel="next >"
       pageCount={pageCount}
       onPageChange={handlePageclick}
       pageRangeDisplayed={5}
       renderOnZeroPageCount={null}
       className="flex justify-between my-4"
    />
    </>
  );
}