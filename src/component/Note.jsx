import React, { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import dot from "../Asset/dot.png";

export default function Note({ note, onDelete, onEdit }) {
  return (
    <div className="border border-[#00000024] rounded-[5px] flex relative justify-between p-6 mt-8">
      <div>
        <p className="text-lg capitalize mb-6">{note.title}</p>
        <p className="roboto text-[#000000BA] font-light">{note.description}</p>
        <span className="flex items-center gap-2 pt-8">
          <button className="bg-[#FA9F5E] rounded-[25px] px-4 py-2 text-white">
            Created
          </button>
          <p>Wednesday, 1st January, 2020</p>
        </span>
      </div>

      {/* dropdown menu */}
      <div>
        <Menu as="div" className=" flex items-center w-full">
          <Menu.Button>
            <img src={dot} alt="" />
          </Menu.Button>
          <Transition
            as={Fragment}
            enter="transition ease-out duration-100"
            enterFrom="transform opacity-0 scale-95"
            enterTo="transform opacity-100 scale-100"
            leave="transition ease-in duration-75"
            leaveFrom="transform opacity-100 scale-100"
            leaveTo="transform opacity-0 scale-95"
          >
            <Menu.Items className="origin-top-right absolute border border-[#FA9F5E] right-0 top-10 py-2 w-max rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none mt-2 z-10">
              <div className="py-1 flex flex-col gap-2 w-32">
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`flex items-center px-4 py-2 cursor-pointer font-raleway text-xs ${
                        active ? "bg-gray-100 text-gray-900" : "text-[#828282]"
                      }`}
                      onClick={() => onDelete(note.id)}
                    >
                      Delete
                    </button>
                  )}
                </Menu.Item>
                <hr className="bg-[#FA9F5E] py-[.5px]" />
                <Menu.Item>
                  {({ active }) => (
                    <button
                      className={`flex items-center px-4 py-2 cursor-pointer font-raleway text-xs ${
                        active ? "bg-gray-100 text-gray-900" : "text-[#828282]"
                      }`}
                      onClick={() => {
                        onEdit(note.id);
                      }}
                    >
                      Edit
                    </button>
                  )}
                </Menu.Item>
              </div>
            </Menu.Items>
          </Transition>
        </Menu>
      </div>
    </div>
  );
}