import React, { useState } from "react";
import DatePicker from "react-datepicker";

const HeatingDetails = () => {
   const [gasSafeRegistered, setGasSafeRegistered] = useState("");
   const [epcExpiryDate, setEpcExpiryDate] = useState(new Date());

   return (
      <section>
         <div className="row">
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Property Heating*</label>
                  <div className="input-group mb-3">
                     <select
                        name="property_heating"
                        defaultValue={""}
                        className="form-control form-control-lg custom-select"
                     >
                        <option value="" disabled>
                           Choose...
                        </option>
                        <option value="Gas">Gas</option>
                        <option value="Oil">Oil</option>
                        <option value="LPG">LPG</option>
                        <option value="Electric">Electric</option>
                        <option value="Air Source">Air Source</option>
                        <option value="Ground Source">Ground Source</option>
                        <option value="Solid Fossil Fuel">Solid Fossil Fuel</option>
                        <option value="Wood">Wood</option>
                     </select>
                  </div>
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">How old is the heating*</label>
                  <div className="input-group mb-3">
                     <select
                        name="heating_years_range"
                        defaultValue={""}
                        className="form-control form-control-lg custom-select"
                     >
                        <option value="" disabled>
                           Choose...
                        </option>
                        <option value="1">1-6 years</option>
                        <option value="2">7-10 years</option>
                        <option value="3">10-20 years</option>
                        <option value="4">20–30 years</option>
                        <option value="5">30+ years</option>
                     </select>
                  </div>
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Gas Safe Registered*</label>
                  <div className="input-group mb-3">
                     <select
                        name="gas_safe_registered"
                        defaultValue={""}
                        value={gasSafeRegistered}
                        onChange={(e) => setGasSafeRegistered(e.target.value)}
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
            {gasSafeRegistered === "Yes" && (
               <>
                  <div className="col-lg-12 mb-2">
                     <div className="form-group">
                        <label className="text-label">Gas Safe Age</label>
                        <DatePicker
                           selected={ epcExpiryDate }
                           onChange={ (value) => setEpcExpiryDate(value) }
                           name="gas_safe_age"
                           className="form-control"
                        /> 
                     </div>
                  </div>
               </>
            )}
         </div>
      </section>
   );
};

export default HeatingDetails;
