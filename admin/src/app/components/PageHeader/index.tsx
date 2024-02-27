import Link from "next/link";
import React from "react";
import {MdAdd} from 'react-icons/md'

const PageHeader = ({
  showAddButton,
  pageTitle,
  addRouter,
  className,
}: {
  pageTitle: string;
  showAddButton: boolean;
  addRouter?: string;
  className?:string
}) => {
  return (
    <div className="flex justify-between text-xl font-extrabold">
      <h1>{pageTitle}</h1>
      {showAddButton && addRouter ? (
        <Link href={addRouter} className={`${className? className:'bg-black text-white flex hover:bg-white hover:text-black font-bold py-2 px-4 rounded-lg'} `}>
          <MdAdd size={24} />
           Add{pageTitle.slice(pageTitle.length - 0)}
        </Link>
      ) : null}
    </div>
  );
};

export default PageHeader;
