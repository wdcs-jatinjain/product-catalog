"use client";

import { RESULT_STATUS } from "@/constant";
import React, { useState, useEffect } from "react";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import { toast } from "react-toastify";

interface User {
  _id: string;
  name: string;
  role: string;
  createdAt: string;
}

const UserTable = () => {
  const [users, setUsers] = useState<User[]>([]);
  const [newUser, setNewUser] = useState<Partial<User>>({
    _id: "",
    name: "",
    role: "",
    createdAt: "",
  });
  const fetchAllUsers = async () => {
    try {
      const response = await fetch("/api/getallusers");
      if (!response.ok) {
        throw new Error("Failed to fetch users");
      }
      const data = await response.json();

      setUsers(data.GetAllUsersReturnData);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  useEffect(() => {
    fetchAllUsers();
  }, []);

  // const handleDelete = (id: number) => {
  //   setUsers(users.filter((user) => user.id !== id));
  // };

  const handleDelete = async (_id: string) => {
    try {
      const response = await fetch(`/api/deleteuser?id=${_id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
      });
      const userDeleteResponse = await response.json();
      if (userDeleteResponse.status === RESULT_STATUS.FAILURE) {
        toast.error(userDeleteResponse.message);
      } else if (userDeleteResponse.status === RESULT_STATUS.SUCCESS) {
        setUsers(users.filter((users) => users._id !== _id));

        toast.success(userDeleteResponse.message);
      }
    } catch (error: any) {
      console.error("Delete failed:", error.message);
      toast.error(error.message);
    }
  };

  return (
    <div className="margin-top:20px ">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-50 border-b border-gray-300">
          <tr>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Name
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Role
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Created At
            </th>
            <th
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300">
          {users.map((user) => (
            <tr key={user._id}>
              <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.role}</td>
              <td className="px-6 py-4 whitespace-nowrap">{user.createdAt}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
                <button
                  // onClick={() => handleEdit(user.id)}
                  className="text-indigo-600 hover:text-indigo-900 mr-2"
                >
                  <HiPencilAlt />
                </button>
                <button
                  onClick={() => handleDelete(user._id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <HiTrash />
                </button>
              </td>
            </tr>
          ))}
          <tr>
            <td>
              <input
                type="text"
                value={newUser.name}
                onChange={(e) =>
                  setNewUser({ ...newUser, name: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={newUser.role}
                onChange={(e) =>
                  setNewUser({ ...newUser, role: e.target.value })
                }
              />
            </td>
            <td>
              <input
                type="text"
                value={newUser.createdAt}
                onChange={(e) =>
                  setNewUser({ ...newUser, createdAt: e.target.value })
                }
              />
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
