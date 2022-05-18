import React, { useState } from "react";
import DatePicker from "react-datepicker";

const PropertyDetails = () => {
   const [epcRegistered, setEpcRegistered] = useState("");
   const [epcExpiryDate, setEpcExpiryDate] = useState(new Date());

   return (
      <section>
         <div className="row">
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Dwelling Type*</label>
                  <div className="input-group mb-3">
                     {/* <div className="input-group-prepend">
                      <label className="input-group-text">Dwelling Type</label>
                    </div> */}
                     <select
                        name="dwelling_type"
                        defaultValue={""}
                        className="form-control form-control-lg custom-select"
                     >
                        <option value="" disabled>
                           Choose...
                        </option>
                        <option value="House">House</option>
                        <option value="Bungalow">Bungalow</option>
                        <option value="Flat">Flat</option>
                        <option value="Park Home">Park Home</option>
                     </select>
                  </div>
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Detachment Type*</label>
                  <div className="input-group mb-3">
                     <select
                        name="detachment_type"
                        defaultValue={""}
                        className="form-control form-control-lg custom-select"
                     >
                        <option value="" disabled>
                           Choose...
                        </option>
                        <option value="Detached">Detached</option>
                        <option value="Semi">Semi</option>
                        <option value="End Terrace">End Terrace</option>
                        <option value="Mid Terrace">Mid Terrace</option>
                     </select>
                  </div>
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Number of bedrooms*</label>
                  <input
                     type="number"
                     name="bedroom_number"
                     className="form-control"
                     placeholder="1,2,3,4,5,6+"
                     required
                  />
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Property Ownership*</label>
                  <div className="input-group mb-3">
                     <select
                        name="property_ownership"
                        defaultValue={""}
                        className="form-control form-control-lg custom-select"
                     >
                        <option value="" disabled>
                           Choose...
                        </option>
                        <option value="Owned">Owned</option>
                        <option value="Rented">Rented</option>
                     </select>
                  </div>
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">EPC Registered*</label>
                  <div className="input-group mb-3">
                     <select
                        name="epc_registered"
                        defaultValue={""}
                        value={epcRegistered}
                        onChange={(e) => setEpcRegistered(e.target.value)}
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
            {epcRegistered === "Yes" && (
               <>
                  <div className="col-lg-12 mb-2">
                     <div className="form-group">
                        <label className="text-label">EPC Expiry Date</label>
                        <DatePicker
                           selected={ epcExpiryDate }
                           onChange={ (value) => setEpcExpiryDate(value) }
                           name="epc_expiry_date"
                           className="form-control"
                        /> 
                     </div>
                  </div>
                  <div className="col-lg-12 mb-2">
                     <div className="form-group">
                        <label className="text-label">Current EPC Rating*</label>
                        <div className="input-group mb-3">
                           <select
                              name="current_epc_rating"
                              defaultValue={""}
                              className="form-control form-control-lg custom-select"
                           >
                              <option value="" disabled>
                                 Choose...
                              </option>
                              <option value="A">A</option>
                              <option value="B">B</option>
                              <option value="C">C</option>
                              <option value="D">D</option>
                              <option value="E">E</option>
                              <option value="F">F</option>
                              <option value="G">G</option>
                           </select>
                        </div>
                     </div>
                  </div>
               </>
            )}
            {epcRegistered === "No" && (
               <>
                  <div className="col-lg-12 mb-2">
                     <div className="form-group">
                        <label className="text-label">Wall Type</label>
                        <div className="input-group mb-3">
                           <select
                              name="wall_type"
                              defaultValue={""}
                              className="form-control form-control-lg custom-select"
                           >
                              <option value="" disabled>
                                 Choose...
                              </option>
                              <option value="Cavity">Cavity</option>
                              <option value="Solid">Solid</option>
                           </select>
                        </div>
                     </div>
                  </div>
               </>
            )}
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">UPRN*</label>
                  <input
                     type="text"
                     name="uprn"
                     className="form-control"
                     placeholder="Example Number: 100012381456"
                     required
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default PropertyDetails;
