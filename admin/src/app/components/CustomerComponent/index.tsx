import React from "react";
import PageHeader from "../PageHeader";
import PageLayout from "../pageLayout";

const CustomerComponent = () => {
  return (
    <PageLayout>
      <PageHeader
        pageTitle="Customers"
        showAddButton={true}
        addRouter={"/users/customer"}
      />
      <div className="m-3 justify-between"></div>
    </PageLayout>
  );
};

export default CustomerComponent;
