import React from "react";

const ClientContactDetails = () => {
   return (
      <section>
         <div className="row">
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label">First Name*</label>
                  <input
                     type="text"
                     name="firstName"
                     className="form-control"
                     placeholder="Parsley"
                     required
                  />
               </div>
            </div>
            <div className="col-lg-6 mb-2">
               <div className="form-group">
                  <label className="text-label">Last Name*</label>
                  <input
                     type="text"
                     name="lastName"
                     className="form-control"
                     placeholder="Montana"
                     required
                  />
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Phone 1 *</label>
                  <input
                     type="text"
                     name="phoneNumber1"
                     className="form-control"
                     placeholder="(+1)408-657-9007"
                     required
                  />
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Phone 2</label>
                  <input
                     type="text"
                     name="phoneNumber2"
                     className="form-control"
                     placeholder=""
                  />
               </div>
            </div>
            <div className="col-lg-12 mb-2">
               <div className="form-group">
                  <label className="text-label">Email *</label>
                  <input
                     type="email"
                     className="form-control"
                     id="inputGroupPrepend2"
                     aria-describedby="inputGroupPrepend2"
                     placeholder="example@example.com.com"
                     required
                  />
               </div>
            </div>
            <div className="col-lg-12 mb-3">
               <div className="form-group">
                  <label className="text-label">Address*</label>
                  <input
                     type="text"
                     name="address"
                     className="form-control"
                     placeholder="10 Footwood Crescent"
                     required
                  />
               </div>
            </div>
            <div className="col-lg-12 mb-3">
               <div className="form-group">
                  <label className="text-label">Town*</label>
                  <input
                     type="text"
                     name="town"
                     className="form-control"
                     placeholder="Rochdale"
                     required
                  />
               </div>
            </div>
            <div className="col-lg-12 mb-3">
               <div className="form-group">
                  <label className="text-label">Post code*</label>
                  <input
                     type="text"
                     name="postcode"
                     className="form-control"
                     placeholder="OL129TF"
                     required
                  />
               </div>
            </div>
         </div>
      </section>
   );
};

export default ClientContactDetails;
