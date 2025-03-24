import React, { ReactNode } from "react";
import { IoCloseSharp } from "react-icons/io5";

interface ModalProps {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  children: ReactNode;
}
export const Modal = ({ isOpen, setIsOpen, children }: ModalProps) => {
  return (
    <>
      {isOpen && (
        <div
          onClick={() => setIsOpen(false)}
          className="fixed px-6 flex items-center justify-center bg-black/30 top-0 left-0 bottom-0 right-0"
        >
          <div
            onClick={(e) => {
              e.stopPropagation();
            }}
            className="w-full max-w-2xl bg-white z-10 p-4 shadow-md"
          >
            <div className=" flex justify-between items-center w-full mb-6">
              <span className="text-2xl  font-bold">User</span>
              <IoCloseSharp onClick={() => setIsOpen(false)} />
            </div>
            {children}
          </div>
        </div>
      )}
    </>
  );
};
