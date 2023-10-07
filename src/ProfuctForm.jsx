import React, { useState, useEffect } from "react";

import { useFormik } from "formik";
import * as yup from "yup";


export default function ProfuctForm() {
    const [data, setdata] = useState([]);

    const formik = useFormik({
        initialValues: {
          productName: "",
          email: "",
          price: "",
          qnt: "",
          city: "",
          state: "",
          zip: "",
        },
        validationSchema: yup.object({
          productName: yup.string().required("Please Entre your productName  "),
          email: yup.string().required("Please Entre your Email ID"),
          price: yup.number().required("Please  Entre The Price "),
    
          qty: yup.number().required("Please  Entre The qty "),
          city: yup.string().required("Please  Entre The city "),
          state: yup.string().required("Please  Entre The state "),
          zip: yup  
            .string()
            .min(6, "Too Short!")
            .max(6, "Too Long!")
            .required("Please  Entre The state "),
        }),
        onSubmit: (values, { resetForm }) => {
          console.log(values);
    
          setdata((preData) => [...preData, values]);
          const data2 = JSON.stringify(values);
    
          console.log("data2", data2);
          localStorage.setItem("productData", data2);
          resetForm();
        },
      });
  return (
    <div>
          <div className="row mt-5">
          <div className="col-sm-6 offset-3">
            <div className="card px-2">
              <form onSubmit={formik.handleSubmit}>
                <div>
                  <label htmlFor="" className="form-label">
                    Product Name
                  </label>
                  <input
                    name="productName"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className={
                      formik.errors.productName && formik.touched.productName
                        ? "form-control is-invalid"
                        : "form-control "
                    }
                    id="productName"
                    value={formik.values.productName}
                    placeholder="Product Name"
                  />

                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">
                    {formik.errors.productName}
                  </div>
                </div>
                <div className="my-2">
                  <label htmlFor="" className="form-label">
                    Email
                  </label>
                  <input
                    name="email"
                    onBlur={formik.handleBlur}
                    onChange={formik.handleChange}
                    className={
                      formik.errors.email && formik.touched.email
                        ? "form-control is-invalid"
                        : "form-control "
                    }
                    id="email"
                    value={formik.values.email}
                    placeholder="email"
                  />

                  <div className="valid-feedback">Looks good!</div>
                  <div className="invalid-feedback">{formik.errors.email}</div>
                </div>
                <div className="my-2">
                  <div className="row">
                    <div className="col-sm-7">
                      <label htmlFor="" className="form-label">
                        Price
                      </label>
                      <input
                        name="price"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        className={
                          formik.errors.price && formik.touched.price
                            ? "form-control is-invalid"
                            : "form-control "
                        }
                        id="price"
                        value={formik.values.price}
                        placeholder="price"
                      />

                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        {formik.errors.price}
                      </div>
                    </div>
                    <div className="col-sm-4 ms-1">
                      <label htmlFor="" className="form-label">
                        Quantity
                      </label>
                      <input
                        name="qty"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        className={
                          formik.errors.qty && formik.touched.qty
                            ? "form-control is-invalid"
                            : "form-control "
                        }
                        id="qty"
                        value={formik.values.qty}
                        placeholder="qty"
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        {formik.errors.qty}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-2">
                  <div className="row">
                    <div className="col-sm-4 ">
                      <label htmlFor="" className="form-label">
                        City
                      </label>
                      <input
                        name="city"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        className={
                          formik.errors.city && formik.touched.city
                            ? "form-control is-invalid"
                            : "form-control "
                        }
                        id="city"
                        value={formik.values.city}
                        placeholder="City"
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        {formik.errors.city}
                      </div>
                    </div>
                    <div className="col-sm-4 ">
                      <label htmlFor="" className="form-label">
                        State
                      </label>
                      <input
                        name="state"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        className={
                          formik.errors.state && formik.touched.state
                            ? "form-control is-invalid"
                            : "form-control "
                        }
                        id="state"
                        value={formik.values.state}
                        placeholder="State"
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        {formik.errors.state}
                      </div>
                    </div>
                    <div className="col-sm-4 ">
                      <label htmlFor="" className="form-label">
                        Zip
                      </label>
                      <input
                        name="zip"
                        onBlur={formik.handleBlur}
                        onChange={formik.handleChange}
                        className={
                          formik.errors.zip && formik.touched.zip
                            ? "form-control is-invalid"
                            : "form-control "
                        }
                        id="zip"
                        value={formik.values.zip}
                        placeholder="Zip Code"
                      />
                      <div className="valid-feedback">Looks good!</div>
                      <div className="invalid-feedback">
                        {formik.errors.zip}
                      </div>
                    </div>
                  </div>
                </div>

                <div className="my-5">
                  <button type="submit" className="btn btn-dark w-100">
                    Place Order
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
    </div>
  )
}
