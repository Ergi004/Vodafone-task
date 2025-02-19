import { useEffect, useState } from "react";
import { User } from "../types/User";
import { Api } from "../Api/UserApi";
import clsx from "clsx";
import { CreateUserModal } from "./CreateUserModal";
import { UpdateUserModal } from "./UpdateUserModal";

export const Table = () => {
  const [users, setUsers] = useState<User[]>([]);
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

  useEffect(() => {
    getUsers();
  }, []);

  return (
    <table className="table-auto flex flex-col min-w-[1500px]">
      <CreateUserModal user={user} setUser={setUser} setUsers={setUsers} />
      <thead className="h-20 font-bold text-lg text-whtie flex items-center w-full">
        <tr className="grid grid-cols-8 w-full">
          <th className="col-span-1 border-r">Id</th>
          <th className="col-span-1 border-r">Name</th>
          <th className="col-span-1 border-r">User Name</th>
          <th className="col-span-1 border-r">Company</th>
          <th className="col-span-1 border-r">Address</th>
          <th className="col-span-1 border-r">Email</th>
          <th className="col-span-1 border-r">Phone</th>
          <th className="col-span-1 border-r">Options</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user, idx) => {
          return (
            <tr
              key={idx}
              className={clsx(
                "grid grid-cols-8 py-2",
                idx % 2 === 0 ? "bg-gray-100" : "bg-white"
              )}
            >
              <td className="col-span-1">
                <div className="h-full w-full flex items-center justify-center">
                  <span>{user.id}</span>
                </div>
              </td>
              <td className="col-span-1">
                <div className="h-full w-full flex items-center ">
                  <span>{user.name}</span>
                </div>
              </td>
              <td className="col-span-1">
                <div className="h-full w-full flex items-center ">
                  <span>{user.username}</span>
                </div>
              </td>
              <td className="col-span-1">
                <div className="h-full w-full flex items-center ">
                  <span>{user.company.name}</span>
                </div>
              </td>
              <td className="col-span-1 flex flex-col  gap-y-1.5 ">
                <div className="flex gap-x-1.5">
                  <span>{user.address.street}</span>
                </div>
              </td>
              <td className="col-span-1">
                <div className="w-full h-full flex items-center  ">
                  <span>{user.email}</span>
                </div>
              </td>
              <td className="col-span-1">
                <div className="w-full h-full flex items-center  text-center justify-center">
                  <span>{user.phone}</span>
                </div>
              </td>
              <td className="col-span-1">
                <div className="w-full h-full flex items-center justify-center">
                  <UpdateUserModal userId={user.id} setUsers={setUsers} />
                </div>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
};
