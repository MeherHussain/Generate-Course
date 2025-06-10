import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "../../../components/ui/menu";
import Delbutton from "./DelButton";

function DropDown({ children, course, handleOnDelete }) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger>{children}</DropdownMenuTrigger>
      <DropdownMenuContent className="bg-white shadow-md rounded-md p-2">
        <DropdownMenuItem>
          <Delbutton id={`delbutton-${course?.courseId}`} />
        </DropdownMenuItem>
        <DropdownMenuItem>
          <button className="text-red-500 text-center rounded-full">
            Delete
          </button>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export default DropDown;
