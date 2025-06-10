import React, { useState } from "react";

export const DropdownMenu = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="relative">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { isOpen, toggleMenu })
      )}
    </div>
  );
};

export const DropdownMenuTrigger = ({ children, toggleMenu }) => (
  <button onClick={toggleMenu} className="cursor-pointer">
    {children}
  </button>
);

export const DropdownMenuContent = ({ children, isOpen }) =>
  isOpen && (
    <div className="absolute right-0 mt-2 bg-white border rounded shadow-lg">
      {children}
    </div>
  );

export const DropdownMenuItem = ({ children }) => (
  <div className="p-2 hover:bg-gray-100 cursor-pointer">{children}</div>
);

export const DropdownMenuLabel = ({ children }) => (
  <div className="font-bold p-2">{children}</div>
);

export const DropdownMenuSeparator = () => <hr className="my-2" />;
