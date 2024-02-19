import React from "react";
import { HiPencilAlt, HiTrash } from "react-icons/hi";

const UserTable = () => {
 
  return (
    <div>
      <h1>USERS LIST</h1>
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
              Roles
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
          <tr>
            <td className="px-6 py-4 whitespace-nowrap">Harshit </td>
            <td className="px-6 py-4 whitespace-nowrap">Admin</td>
            <td className="px-6 py-4 whitespace-nowrap">19th Feb</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
              {" "}
              <button
                // onClick={() => handleEdit(user.id)}
                className="text-indigo-600 hover:text-indigo-900 mr-2"
              >
                <HiPencilAlt />
              </button>
              <button
                // onClick={() => handleDelete(user.id)}
                className="text-red-600 hover:text-red-900"
              >
                <HiTrash />
              </button>
            </td>
          </tr>

          {/* {users.map((user) => (
          <tr key={user.id}>
            <td className="px-6 py-4 whitespace-nowrap">{user.name}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.roles.join(', ')}</td>
            <td className="px-6 py-4 whitespace-nowrap">{user.createdAt}</td>
            <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center"> */}

          {/* </td> */}
          {/* </tr> */}
          {/* ))} */}
        </tbody>
      </table>
    </div>
  );
};

export default UserTable;
