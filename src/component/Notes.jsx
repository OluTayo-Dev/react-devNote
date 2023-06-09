import React from "react";
import Note from "./Note";

export default function Notes ({ notes, onDelete, onEdit }) {
  return (
    <div className="flex flex-col ">
      {notes.map((item) => (
        <Note key={item.id} note={item} onDelete={onDelete} onEdit={onEdit} />
      ))}{" "}
    </div>
  );
}