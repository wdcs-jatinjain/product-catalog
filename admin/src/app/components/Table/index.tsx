"use client";
import React from "react";

import { UserData } from "../Users/users";
import { HiPencilAlt, HiTrash } from "react-icons/hi";
import Link from "next/link";

export function dateFormat(timestamp: any) {
  const plus0 = (num: any) => `0${num.toString()}`.slice(-2);
  const d = new Date(timestamp);
  const year = d.getFullYear();
  const month = (d.getMonth() + 1).toString().padStart(2, "0");
  const day = d.getDate();
  const formattedDay =
    day +
    (day === 1 || day === 21 || day === 31
      ? "st"
      : day === 2 || day === 22
      ? "nd"
      : day === 3 || day === 23
      ? "rd"
      : "th");

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  const monthName = monthNames[d.getMonth()];

  const date = `${formattedDay} ${monthName} ${year}`;
  return date;
}

const Table = ({
  data,
  fields,
  handleDelete,
  editRoute,
}: {
  data: UserData[];
  fields: TableFields[];
  handleDelete: (id: string) => Promise<void>;
  editRoute: string;
}) => {
  return (
    <div className="margin-top:20px ">
      <table className="min-w-full border border-gray-300">
        <thead className="bg-gray-50 border-b border-gray-300">
          <tr>
            {fields.map((field: TableFields) => {
              return (
                <th
                  key={field.id}
                  scope="col"
                  className="px-6 py-3 text-left text-gray-500 uppercase tracking-wider text-lg"
                >
                  {field.name}
                </th>
              );
            })}
            <th
              key={"action"}
              className=" text-left  text-lg text-gray-500 uppercase tracking-wider "
            >
              Actions
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-300">
          {data.map((columnValue: UserData, index: number) => (
            <tr key={columnValue._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {columnValue && columnValue._id ? columnValue._id : "-"}
              </td>

              <td className="px-6 py-4 whitespace-nowrap">
                {columnValue && columnValue.name ? columnValue.name : "-"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {columnValue && columnValue.email ? columnValue.email : "-"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {columnValue && columnValue.role ? columnValue.email : "-"}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {columnValue && columnValue.createdAt
                  ? dateFormat(columnValue.createdAt)
                  : "-"}
              </td>
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
