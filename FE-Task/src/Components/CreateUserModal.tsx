import React, { useState } from "react";
import { Modal } from "./Modal";
import { User } from "../types/User";
import { Api } from "../Api/UserApi";
import { IoAdd } from "react-icons/io5";

interface CreateModalProps {
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}

const initalUserState: User = {
  id: 0,
  name: "",
  username: "",
  email: "",
  address: {
    street: "",
    suite: "",
    city: "",
    zipcode: "",
    geo: { lat: "", lng: "" },
  },
  phone: "",
  website: "",
  company: { name: "", catchPhrase: "", bs: "" },
};
export const CreateUserModal = ({ setUsers }: CreateModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User>(initalUserState);

  const getUsers = async () => {
    const data = await Api.getUsers();
    setUsers(data);
  };
  const createUser = async (user: User) => {
    await Api.createUser(user);
    getUsers();
    setIsOpen(false);
    setUser(initalUserState);
  };

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="px-4 py-2 ml-auto mr-3 rounded text-center bg-red-600 text-white  flex items-center gap-x-2 "
      >
        <IoAdd />
        <span className="text-lg font-semibold">Create user</span>
      </button>
      <Modal isOpen={isOpen} setIsOpen={setIsOpen}>
        <div className="w-full h-full">
          <div className="flex items-center gap-x-3 w-full">
            <div className="flex flex-col justify-start gap-y-2 w-full">
              <label>Name</label>
              <input
                value={user?.name}
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
                className="px-3 py-2 rounded-none border w-full"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col justify-start gap-y-2 w-full">
              <label>User Name</label>
              <input
                value={user?.username}
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    username: e.target.value,
                  }))
                }
                className="px-3 py-2 rounded-none border w-full"
                type="text"
                required
              />
            </div>
          </div>
          <div className="flex items-center gap-x-3 w-full">
            <div className="flex flex-col justify-start gap-y-2 w-full">
              <label>Email</label>
              <input
                value={user?.email}
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    email: e.target.value,
                  }))
                }
                className="px-3 py-2 rounded-none border w-full"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col justify-start gap-y-2 w-full">
              <label>Address</label>
              <input
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    address: {
                      street: e.target.value,
                      suite: e.target.value,
                      city: e.target.value,
                      zipcode: e.target.value,
                      geo: {
                        lat: e.target.value,
                        lng: e.target.value,
                      },
                    },
                  }))
                }
                value={user?.address.street}
                className="px-3 py-2 rounded-none border w-full"
                type="text"
                required
              />
            </div>
          </div>
          <div className="flex items-center gap-x-3 w-full">
            <div className="flex flex-col justify-start gap-y-2 w-full">
              <label>Website</label>
              <input
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    website: e.target.value,
                  }))
                }
                value={user?.website}
                className="px-3 py-2 rounded-none border w-full"
                type="text"
                required
              />
            </div>
            <div className="flex flex-col justify-start gap-y-2 w-full">
              <label>Company</label>
              <input
                onChange={(e) =>
                  setUser((prev) => ({
                    ...prev,
                    company: {
                      name: e.target.value,
                      catchPhrase: e.target.value,
                      bs: e.target.value,
                    },
                  }))
                }
                value={user?.company.name}
                className="px-3 py-2 rounded-none border w-full"
                type="text"
                required
              />
            </div>
          </div>
          <label>Phone</label>
          <input
            value={user?.phone}
            onChange={(e) =>
              setUser((prev) => ({
                ...prev,
                phone: e.target.value,
              }))
            }
            className="px-3 py-2 rounded-none border w-full"
            type="text"
            required
          />
        </div>
        <div className="w-full flex items-center mt-6 justify-end gap-x-3 text-white">
          <button
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 font-semibold bg-white border border-red-600 text-red-600 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => createUser(user)}
            className="px-3 py-2 font-semibold bg-red-600 rounded"
          >
            Create user
          </button>
        </div>
      </Modal>
    </>
  );
};
