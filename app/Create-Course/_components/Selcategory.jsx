import CategoryList from "../../_Shared/CategoryList";
import React, { useContext } from "react";
import Image from "next/image";
import { UserInputContext } from "../../_Context/UserInputContext";

const Selcategory = () => {
  const [userCourseInput, setUserCourseInput] = useContext(UserInputContext);

  const handleCategoryChange = (category) => {
    setUserCourseInput((prev) => ({
      ...prev,
      category: category,
    }));
  };

  return (
    <div className="px-10 md:px-20 mt-10 cursor-pointer">
      <h2 className="text-2xl font-bold mb-5 text-center">
        Select the Course Category
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {CategoryList.map((item) => (
          <div
            key={item.id}
            className={`flex flex-col items-center p-5 border rounded-lg shadow-lg transition-transform transform hover:scale-105 hover:shadow-2xl h-[110%] ${
              userCourseInput.category === item.name ? "bg-slate-300" : ""
            }`}
            onClick={() => handleCategoryChange(item.name)}
          >
            <Image
              src={item.icon}
              width={50}
              height={50}
              alt="Category Image Icons"
              className="mb-3"
            />
            <h2 className="text-xl font-semibold">{item.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Selcategory;
