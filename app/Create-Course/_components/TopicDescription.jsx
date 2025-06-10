import React from "react";
import Input from "./Input";

function TopicDescription({
  topicName,
  setTopicName,
  description,
  setDescription,
}) {
  const handleTopicNameChange = (e) => {
    setTopicName(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <div className="mt-[50px]">
        <label className="mt-[100px]">
          <Input value={topicName} onChange={handleTopicNameChange} />
        </label>
      </div>

      <div className="flex flex-col gap-5 mt-10">
        <label className="font-bold text-lg">
          Tell us more, what you want to create course.
        </label>
        <textarea
          className="w-[800px] p-4 bg-slate-100 rounded-lg border border-white shadow-lg focus:outline-none focus:white outline-color: white; focus:border-transparent resize-none"
          placeholder="More about your course."
          rows="6"
          value={description}
          onChange={handleDescriptionChange}
        />
      </div>
    </div>
  );
}

export default TopicDescription;
