"use client";
import React from "react";

import { UserData } from "../Users/users";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import Link from "next/link";


const Table = ({data,fields, handleDelete,editRoute}:{data:UserData[],fields:TableFields[], handleDelete:(id: string)=> Promise<void>,editRoute:string}) => {
  return (
    <div className="margin-top:20px ">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-50 border-b border-gray-300">
          <tr>
           {fields.map((field:TableFields)=> {
            return <th 
               key={field.id}
              scope="col"
              className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
            >
              {field.name}
            </th>
           })

           }
           <th key={'action'} className=" text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
            Actions
           </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300">
          {data.map((columnValue: UserData, index: number) => (
            <tr key={columnValue._id}>
              <td className="px-6 py-4 whitespace-nowrap">{columnValue.name}</td>
              <td className="px-6 py-4 whitespace-nowrap">{columnValue.email}</td>
              <td className="px-6 py-4 whitespace-nowrap">{columnValue.role}</td>
              <td className="px-6 py-4 whitespace-nowrap">{columnValue.createdAt}</td>
              <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500 flex items-center">
                <Link
                href={`${editRoute}/${columnValue._id}`}
                  className="text-indigo-600 hover:text-indigo-900 mr-2"
                >
                  <HiPencilAlt />
                </Link>
                <button
                  onClick={() => handleDelete(columnValue._id)}
                  className="text-red-600 hover:text-red-900"
                >
                  <HiTrash />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
