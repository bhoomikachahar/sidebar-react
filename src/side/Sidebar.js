import React from "react";
// import '../App.css'
import './All.css'
import { NavLink } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div class="col-sm-12 col-md-2 col-lg-12 bor text-center pt-4 media1 sticky-top bg-light">
            <div>
              <h4 class="fw-bold fs-5 ms-3">Logo</h4>
            </div>
            <div class="mt-5">
              <NavLink to="/"><button class="btn btn-primary  ps-4 pe-4 rounded text-light ">
                <i class="fa-solid fa-qrcode me-3 "></i> Dashboard
              </button></NavLink>
            </div>
            <div class="mt-4">
              <NavLink to="/inbox" className="text-decoration-none">
                <button class="btn clr2  ps-4 pe-4 rounded text-primary w-75 mt-5">
                  <i class="fa-solid fa-qrcode me-3"></i> Inbox
                </button>
              </NavLink>
            </div>
            <div class="mt-4">
              <NavLink to="/product" className=" text-decoration-none">
                {" "}
                <button class="btn clr2 ps-4 pe-5 rounded text-primary mt-4">
                  <i class="fa-solid fa-list me-3"></i> Products
                </button>
              </NavLink>
            </div>
            <div class="mt-4">
              <NavLink to="/cust" className="text-decoration-none">
                <button class="btn clr2 ps-4 pe-5 rounded text-primary mt-4">
                  <i class="fa-solid fa-user"></i> Customers
                </button>
              </NavLink>
            </div>
            <div class="mt-4">
              <NavLink to="/order" className="text-decoration-none">
                {" "}
                <button class="btn clr2 ps-4 pe-5 rounded text-primary w-75 mt-4">
                  <i class="fa-solid fa-list"></i> Orders
                </button>
              </NavLink>
            </div>
            <div class="mt-4">
              <NavLink to="/acc" className="text-decoration-none">
                <button class="btn clr2 ps-4 pe-5 rounded text-primary w-75 mt-4">
                  <i class="fa-solid fa-file-invoice"></i> Accounts
                </button>
              </NavLink>
            </div>
            <div class="mt-4">
              <NavLink to="/report" className="text-decoration-none">
                <button class="btn clr2 ps-4 pe-5 rounded text-primary w-75 mt-4">
                  <i class="fa-solid fa-coins"></i> Reports
                </button>
              </NavLink>
            </div>
            <div class="mt-4">
              <NavLink to="/plan" className="text-decoration-none">
                <button class="btn clr2 ps-4 pe-5 rounded text-primary w-75 mt-4">
                  <i class="fa-regular fa-square-plus"></i> My Plans
                </button>
              </NavLink>
            </div>
          </div>
          {/* <div class="col-sm-12 col-md-10 col-lg-10 d-flex justify-content-center pt-3  ">
            <div className="container">
              <div className="row">
                <div className="d-flex ">
                  <div className="  d-flex justify-content-between bg-white">
                    <div>
                      <h5 className="mt-3 text-primary ps-4">Quick Actions</h5>
                    </div>
                    <div>
                      <button className="btn btn clr1 mt-2  ms-4">
                        <i class="fa-solid fa-list"></i> +Create Order
                      </button>
                    </div>
                    <div>
                      <button className="btn btn clr1 mt-2 ms-4">
                        <i class="fa-solid fa-file"></i> Share Quote
                      </button>
                    </div>
                    <div>
                      <button className="btn btn clr1 mt-2 ms-4">
                        <i class="fa-brands fa-slack"></i> Add Product
                      </button>
                    </div>
                    <div className="mb-2">
                      <button className="btn btn clr1 mt-2 ms-4 me-4">
                        <i class="fa-solid fa-bookmark"></i> Create Invoice
                      </button>
                    </div>
                  </div>
                  <div className="  d-flex ms-5">
                    <div className="">
                      <button className="btn btn-lg btn-light">
                        <i class="fa-solid fa-bell"></i>
                      </button>
                    </div>
                    <div>
                      {" "}
                      <button className="btn btn-lg btn-light ms-2 shadow w-100 ms-4">
                        <i class="fa-solid fa-user"></i>{" "}
                        <span className="text-primary">
                          {" "}
                          Perfect Engineering{" "}
                        </span>{" "}
                        <i class="fa-solid fa-caret-down"></i>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div> */}
          
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
