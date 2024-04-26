import React from 'react'
// import Cons from "../App.css";


const Nav = () => {
  return (
    <div>
        <div class="col-sm-12 col-md-10 col-lg-10 d-flex justify-content-center pt-3  w-100">
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
          </div>
    </div>
  )
}

export default Nav