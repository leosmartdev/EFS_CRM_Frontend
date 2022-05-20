import React, { useState } from "react";
import DropdownMultiselect from "react-multiselect-dropdown-bootstrap";
import {
   Table,
} from "react-bootstrap";

const QualifyingDetails = () => {
   const [householdIncome, setHouseholdIncome] = useState("");

   return (
      <section>
         <div className="row">
            <div className="col-lg-12 mb-2">
               <h4 className="card-title">ECO 4 Primary Benefit</h4>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Benefits Received:</label>
                  <DropdownMultiselect
                     name="eco4_benefits"
                     options={["Pension Savings Credit", "Pension Guaranteed Credit", "Universal Credit", "Income Based Jobseekers Allowance JSA", "Employment Support Allowance ESA", "Income Support", "House Benefit", "Child Tax Credit", "Working Tax Credit"]}
                  />
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Other Benefit</label>
                  <DropdownMultiselect
                     name="other_benefits"
                     options={["DLA", "PIP", "Carers", "Attendance Allowance"]}
                  />
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <h4 className="card-title">LA FLEX</h4>
            </div>
            <div className="col-lg-12 mb-3">
               <div className="form-group">
                  <label className="text-label">Council area*</label>
                  <input
                     type="text"
                     name="council_area"
                     className="form-control"
                     placeholder=""
                     required
                  />
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <h4 className="card-title">Child Benefit</h4>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">How many adults live in property*</label>
                  <input
                     type="number"
                     name="adult_num"
                     className="form-control"
                     placeholder="1,2,3,4,5,6+"
                     required
                  />
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">How many children live in the property (under age 16)*</label>
                  <input
                     type="number"
                     name="child_num"
                     className="form-control"
                     placeholder="1,2,3,4,5,6+"
                     required
                  />
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Would you say your house hold income is above or below the below table*</label>
                  <div className="input-group mb-3">
                     <select
                        name="household_income"
                        defaultValue={""}
                        value={householdIncome}
                        onChange={(e) => setHouseholdIncome(e.target.value)}
                        className="form-control form-control-lg custom-select"
                     >
                        <option value="" disabled>
                           Choose...
                        </option>
                        <option value="Yes">Yes</option>
                        <option value="No">No</option>
                     </select>
                  </div>
               </div>
            </div>
            <div className="col-lg-12 mb-3 mt-3" align="center">
               <h5>Income limit if you only claim Child Benefit</h5>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <Table responsive bordered style={{ textAlign: "left" }}>
                     <thead>
                        <tr>
                           <th>Number of children</th>
                           <th>1</th>
                           <th>2</th>
                           <th>3</th>
                           <th>4</th>
                        </tr>
                     </thead>
                     <tbody>
                        <tr>
                           <th>1 adult household</th>
                           <td className="color-primary">$19,900</td>
                           <td className="color-primary">$24,800</td>
                           <td className="color-primary">$29,600</td>
                           <td className="color-primary">$34,500</td>
                        </tr>
                        <tr>
                           <th>2 adult household</th>
                           <td className="color-primary">$27,500</td>
                           <td className="color-primary">$32,300</td>
                           <td className="color-primary">$37,200</td>
                           <td className="color-primary">$42,000</td>
                        </tr>
                     </tbody>
                  </Table>
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <h4 className="card-title">Security Details</h4>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Password*</label>
                  <input
                     type="text"
                     name="password"
                     className="form-control"
                     placeholder=""
                     required
                  />
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">How did they find us*</label>
                  <div className="input-group mb-3">
                     <select
                        name="how_find_us"
                        defaultValue={""}
                        className="form-control form-control-lg custom-select"
                     >
                        <option value="" disabled>
                           Choose...
                        </option>
                        <option value="Post">Post</option>
                        <option value="Web">Web</option>
                        <option value="Referral">Referral</option>
                        <option value="Other">Other</option>
                     </select>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default QualifyingDetails;
