const AddCategoryModal = () => {
  return (
    <div className=" w-full h-full z-30 flex items-center justify-center">
      <form className="min-w-[150px] min-h-[150px] bg-background rounded-xl shadow-white p-3 flex flex-col justify-between">
        <div className="flex flex-col gap-2">
          <label htmlFor="category">Category:</label>
          <input
            type="text"
            className="bg-disabled px-3 py-2 rounded-md text-sm placeholder:text-black/60"
            placeholder="Workout "
          />
        </div>
        <button className="w-full bg-accent rounded-full text-white font-bold py-1">
          Add
        </button>
      </form>
    </div>
  );
};

export default AddCategoryModal;
