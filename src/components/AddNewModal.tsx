import { useState } from "react";
import AddCategoryModal from "./AddCategoryModal";

const AddNewModal = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    // modal container
    <form className="z-30 bg-background rounded-xl p-5 w-[300px] h-fit min-h-[300px] shadow-xl space-y-5 ">
      <div className="font-poppins flex flex-col">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          placeholder="Go to shop"
          className="text-sm bg-disabled rounded-md px-3 py-1.5 placeholder:text-black/60
        "
        />
      </div>
      <div className="font-poppins flex flex-col">
        <label htmlFor="title">Description:</label>
        <textarea
          cols={16}
          placeholder="Go to shop"
          className="text-sm bg-disabled rounded-md px-3 py-1.5 placeholder:text-black/60
        "
        />
      </div>

      <div className="flex flex-col">
        <div className="flex items-center justify-between w-full mb-3">
          <label htmlFor="title">Categories:</label>
          <button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            className="px-2 py-1 text-sm font-medium text-white bg-secondary rounded-full">
            Add
          </button>
        </div>

        <div className="px-3 py-1 bg-error w-fit rounded-full text-sm font-medium text-white">
          gym
        </div>
      </div>

      <button
        type="submit"
        className="w-full py-2 bg-primary rounded-full text-white font-semibold">
        ADD
      </button>

      <div className="absolute w-full h-[calc(100dvh-8dvh)] bg-black/60 -top-5 left-0 z-20 ">
        {isOpen && <AddCategoryModal />}
      </div>
    </form>
  );
};

export default AddNewModal;
