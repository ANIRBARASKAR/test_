import React, { useState, useEffect } from "react";

import { useFormik } from "formik";
import * as yup from "yup";
import ProfuctForm from "./ProfuctForm";

export default function Product() {
  const [data, setdata] = useState([]);

  const [editProductData, seteditProductData] = useState();
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

  //   **************  edit data

  const editFormik = useFormik({
    initialValues: {
      editproductName: editProductData?.productName,
      editemail: editProductData?.email,
      editprice: editProductData?.price,
      editqnt: editProductData?.qnt,
      editcity: editProductData?.city,
      editstate: editProductData?.state,
      editzip: editProductData?.zip,
    },
    validationSchema: yup.object({
      editproductName: yup.string().required("Please Entre your productName  "),
      editemail: yup.string().required("Please Entre your Email ID"),
      editprice: yup.number().required("Please  Entre The Price "),
      editqty: yup.number().required("Please  Entre The qty "),
      editcity: yup.string().required("Please  Entre The city "),
      editstate: yup.string().required("Please  Entre The state "),
      editzip: yup
        .string()
        .min(6, "Too Short!")
        .max(6, "Too Long!")
        .required("Please  Entre The state "),
    }),
    onSubmit: (values, { resetForm }) => {
      console.log(values);

      setdata((preData) => [...preData, values]);
      resetForm();
    },
  });
  //   **************  edit data

  const handleEditData = (arg) => {
    console.log("arg handleEditData", arg);

    seteditProductData(arg);
  };

  useEffect(() => {
    console.log("data", data);
  }, [data]);
  useEffect(() => {
    console.log("editProductData", editProductData);
  }, [editProductData]);

  const handleDelete = (arg) => {
    console.log(arg);

    const updateData = data.splice(arg, 1);
    setdata(updateData);
  };

  return (
    <div>
      <div className="container">
        {/* form data */}
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

        {/* <ProfuctForm/> */}

        {/* tabel */}

        <div className="row">
          <table class="table">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Product Name</th>
                <th scope="col">Email</th>
                <th scope="col">Price</th>
                <th scope="col">Quantity</th>
                <th scope="col">City</th>
                <th scope="col">State</th>
                <th scope="col">Zip Code</th>
                <th scope="col">Edit</th>
                <th scope="col">Delete</th>
              </tr>
            </thead>
            <tbody>
              {data.map((item, i) => (
                <tr>
                  {/* {console.log("item",item)} */}
                  <th scope="row">{i + 1}</th>
                  <td>{item.productName}</td>
                  <td>{item.email}</td>
                  <td>{item.price}</td>
                  <td>{item.qty}</td>
                  <td>{item.city}</td>
                  <td>{item.state}</td>
                  <td>{item.zip}</td>
                  <td>
                    <button
                      type="button"
                      class="btn btn-primary"
                      data-bs-toggle="modal"
                      data-bs-target="#exampleModal"
                      onClick={() => handleEditData(item)}
                    >
                      Edit
                    </button>
                  </td>
                  <td>
                    <button className="dark" onClick={() => handleDelete(i)}>
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* ******  edit form data */}

        {/* <!-- Button trigger modal --> */}

        {/* <!-- Modal --> */}
        <div
          class="modal fade"
          id="exampleModal"
          tabindex="-1"
          aria-labelledby="exampleModalLabel"
          aria-hidden="true"
        >
          <div class="modal-dialog modal-lg">
            <div class="modal-content">
              <div class="modal-header">
                <h5 class="modal-title" id="exampleModalLabel">
                  Modal title
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                ></button>
              </div>
              <div class="modal-body">
                <div className="row mt-5">
                  <div className="col-sm-6 offset-3">
                    <div className="card px-2">
                      <form onSubmit={editFormik.handleSubmit}>
                        <div>
                          <label htmlFor="" className="form-label">
                            Product Name
                          </label>
                          <input
                            name="editproductName"
                            onBlur={formik.handleBlur}
                            onChange={formik.handleChange}
                            className={
                              formik.errors.editproductName &&
                              formik.touched.editproductName
                                ? "form-control is-invalid"
                                : "form-control "
                            }
                            id="editproductName"
                            value={formik.values.editproductName}
                            placeholder="Product Name"
                          />

                          <div className="valid-feedback">Looks good!</div>
                          <div className="invalid-feedback">
                            {formik.errors.editproductName}
                          </div>
                        </div>
                        {/* <div className="my-2">
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
                          <div className="invalid-feedback">
                            {formik.errors.email}
                          </div>
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
                        </div> */}

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
              <div class="modal-footer">
                <button
                  type="button"
                  class="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Close
                </button>
                <button type="button" class="btn btn-primary">
                  Save changes
                </button>
              </div>
            </div>
          </div>
        </div>

        <div style={{ height: 200 }}></div>
      </div>
    </div>
  );
}
