import React from "react";
import PageHeader from "../PageHeader";
import PageLayout from "../pageLayout";

const OrderComponent = () => {
  return (
    <PageLayout>
      <PageHeader
        pageTitle="Orders"
        showAddButton={true}
        addRouter={"/users/orders"}
      />
      <div className="m-3 justify-between">
        
      </div>
    </PageLayout>
  );
};

export default OrderComponent;
