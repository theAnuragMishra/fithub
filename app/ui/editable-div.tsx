"use client";
import { useState } from "react";
import EditIcon from "@mui/icons-material/Edit";
import CheckIcon from "@mui/icons-material/Check";

interface props {
  text: string;
  what: string;
}

export default function EditableDiv(props: props) {
  const [isEditing, setIsEditing] = useState(false);
  const [text, setText] = useState<string>(props.text);

  const handleEditClick = () => {
    setIsEditing(!isEditing);
  };

  const handleSave = () => {
    setIsEditing(false);
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setText(event.target.value);
  };

  return (
    <div
      id="editable-div"
      className="w-52 h-10 rounded-md bg-gray-100 py-1 px-3 flex items-center justify-between"
    >
      <div>
        {isEditing ? (
          <input
            className="bg-gray-100 focus:outline-none w-2/3"
            type="text"
            value={text}
            onChange={handleChange}
          />
        ) : (
          <span>{text} </span>
        )}
        {props.what}
      </div>
      <button
        id="edit-button"
        onClick={isEditing ? handleSave : handleEditClick}
      >
        {isEditing ? <CheckIcon /> : <EditIcon />}
      </button>
    </div>
  );
}
