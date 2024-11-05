import React from "react";

import { MdCheckCircle } from "react-icons/md";

const MainContent = () => {
  return (
    <div className="w-full h-full px-4 py-5">
      <div className="flex items-center justify-between">
        <h1 className="text-3xl md:text-4xl font-bold">Todo's</h1>
        <button className="bg-secondary px-3 py-1 rounded-full text-white hover:scale-105 hover:shadow-md transition duration-200">
          Add New
        </button>
      </div>

      <div className="grid grid-cols-12 gap-4 mt-7">
        <div className="col-span-6 md:col-span-4 lg:col-span-3 bg-background rounded-xl p-3 h-full min-w-[250px]">
          <div className="flex w-full items-center justify-between ">
            <p className="text-sm text-neutral-400 flex-1">2024-12-16</p>
            <div>
              <MdCheckCircle size={18} className="text-secondary " />
            </div>
            <div></div>
          </div>
          <p className="mt-2">Lorem ipsum dolor sit.</p>
          <div className="flex items-center gap-x-1 mt-5">
            <div className="bg-secondary text-white text-xs rounded-full px-2 py-1">
              Workout
            </div>
            <div className="bg-accent text-white text-xs rounded-full px-2 py-1">
              Workout
            </div>
            <div className="bg-error text-white text-xs rounded-full px-2 py-1">
              Workout
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3 bg-background rounded-xl p-3 h-full min-w-[250px]">
          <div className="flex w-full items-center justify-between ">
            <p className="text-sm text-neutral-400 flex-1">2024-12-16</p>
            <div>
              <MdCheckCircle size={18} className="text-secondary " />
            </div>
            <div></div>
          </div>
          <p className="mt-2">Lorem ipsum dolor sit.</p>
          <div className="flex items-center gap-x-1 mt-5">
            <div className="bg-secondary text-white text-xs rounded-full px-2 py-1">
              Workout
            </div>
            <div className="bg-accent text-white text-xs rounded-full px-2 py-1">
              Workout
            </div>
            <div className="bg-error text-white text-xs rounded-full px-2 py-1">
              Workout
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3 bg-background rounded-xl p-3 h-full min-w-[250px]">
          <div className="flex w-full items-center justify-between ">
            <p className="text-sm text-neutral-400 flex-1">2024-12-16</p>
            <div>
              <MdCheckCircle size={18} className="text-secondary " />
            </div>
            <div></div>
          </div>
          <p className="mt-2">Lorem ipsum dolor sit.</p>
          <div className="flex items-center gap-x-1 mt-5">
            <div className="bg-secondary text-white text-xs rounded-full px-2 py-1">
              Workout
            </div>
            <div className="bg-accent text-white text-xs rounded-full px-2 py-1">
              Workout
            </div>
            <div className="bg-error text-white text-xs rounded-full px-2 py-1">
              Workout
            </div>
          </div>
        </div>
        <div className="col-span-6 md:col-span-4 lg:col-span-3 bg-background rounded-xl p-3 h-full min-w-[250px]">
          <div className="flex w-full items-center justify-between ">
            <p className="text-sm text-neutral-400 flex-1">2024-12-16</p>
            <div>
              <MdCheckCircle size={18} className="text-secondary " />
            </div>
            <div></div>
          </div>
          <p className="mt-2">Lorem ipsum dolor sit.</p>
          <div className="flex items-center gap-x-1 mt-5">
            <div className="bg-secondary text-white text-xs rounded-full px-2 py-1">
              Workout
            </div>
            <div className="bg-accent text-white text-xs rounded-full px-2 py-1">
              Workout
            </div>
            <div className="bg-error text-white text-xs rounded-full px-2 py-1">
              Workout
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainContent;
