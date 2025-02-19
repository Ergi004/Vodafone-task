import React, { useState } from "react";
import { Modal } from "./Modal";
import { User } from "../types/User";
import { Api } from "../Api/UserApi";
import { SlOptionsVertical } from "react-icons/sl";

interface UpdateModalProps {
  userId: number;
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
}
export const UpdateUserModal = ({ setUsers, userId }: UpdateModalProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<User>({
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
    id: 0,
  });

  const getUsers = async () => {
    const data = await Api.getUsers();
    setUsers(data);
  };
  const updateUser = async (user?: User) => {
    await Api.updateUser(user);
    getUsers();
    setIsOpen(false);
  };

  const deleteUser = async (id?: number) => {
    await Api.deleteUser(id);
    getUsers();
    setIsOpen(false);
  };

  const getUser = async (id: number) => {
    const user = await Api.getUserById(id);

    setUser(user);
    setIsOpen(true);
  };

  return (
    <>
      <div
        onClick={() => getUser(userId)}
        className="p-2 hover:bg-gray-300 transition-all duration-150 rounded-full "
      >
        <SlOptionsVertical />
      </div>
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
        <div className="w-full flex items-center mt-6 justify-end gap-x-3 text-white ">
          <button
            onClick={() => setIsOpen(false)}
            className="px-3 py-2 font-semibold bg-white border border-blue-900 text-blue-900 rounded hover:bg-gray-100"
          >
            Cancel
          </button>
          <button
            onClick={() => updateUser(user)}
            className="px-3 py-2 font-semibold bg-blue-900 rounded"
          >
            Update user
          </button>
          <button
            onClick={() => deleteUser(user?.id)}
            className="px-3 py-2 font-semibold bg-red-600 rounded"
          >
            Delete user
          </button>
        </div>{" "}
      </Modal>
    </>
  );
};
