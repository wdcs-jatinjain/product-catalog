import Link from "next/link";
import React from "react";

const PageHeader = ({
  showAddButton,
  pageTitle,
  addRouter,
}: {
  pageTitle: string;
  showAddButton: boolean;
  addRouter?: string;
}) => {
  return (
    <div className="flex justify-between">
      <h1>{pageTitle}</h1>
      {showAddButton && addRouter ? (
        <Link href={addRouter}>
          + Add{pageTitle.slice(pageTitle.length - 0)}
        </Link>
      ) : null}
    </div>
  );
};

export default PageHeader;
