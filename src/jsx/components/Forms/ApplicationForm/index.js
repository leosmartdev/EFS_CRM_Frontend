import React, { Fragment } from "react";
import Multistep from "react-multistep";

import ClientContactDetails from "./ClientContactDetails";
import PropertyDetails from "./PropertyDetails";
import HeatingDetails from "./HeatingDetails";
import QualifyingDetails from "./QualifyingDetails";
import PageTitle from "../../../layouts/PageTitle";

const ApplicationForm = () => {
  const steps = [
    { name: "Client Contact Details", component: <ClientContactDetails /> },
    { name: "Property Details", component: <PropertyDetails /> },
    { name: "Heating Details", component: <HeatingDetails /> },
    { name: "Qualifying Details", component: <QualifyingDetails /> },
  ];
  const prevStyle = {
    background: "#F7FAFC",
    borderWidth: "0px",
    color: "#333333",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "600",
    padding: "0.55em 2em",
    border: "1px solid #EEEEEE",
    marginRight: "1rem",
  };
  const nextStyle = {
    background: "#EB8153",
    borderWidth: "0px",
    color: "#fff",
    borderRadius: "4px",
    fontSize: "14px",
    fontWeight: "600",
    padding: "0.55em 2em",
  };
  return (
    <Fragment>
      <PageTitle activeMenu="Components" motherMenu="Home" pageContent="Customer Application" />

      <div className="row">
        <div className="col-xl-12 col-xxl-12">
          <div className="card">
            <div className="card-header">
              <h4 className="card-title">Customer Application Step</h4>
            </div>
            <div className="card-body">
              <form
                onSubmit={(e) => e.preventDefault()}
                id="step-form-horizontal"
                className="step-form-horizontal"
              >
                <Multistep
                  showNavigation={true}
                  steps={steps}
                  prevStyle={prevStyle}
                  nextStyle={nextStyle}
                />
              </form>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default ApplicationForm;
