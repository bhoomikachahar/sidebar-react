import React, { useState } from "react";
// import '../App.css'
import Sidebar from "./Sidebar";
import Nav from "../Nav";
import "./All.css";
import { CiUser } from "react-icons/ci";
import { TbApps } from "react-icons/tb";
import { ImTree } from "react-icons/im";
import { CiCalendar } from "react-icons/ci";
import { FaArrowRight } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";

const Dash = () => {
  const [set, useset] = useState(1);
  const data = [
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "information",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "information",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "information",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "information",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "information",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "information",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "information",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "information",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "information",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "information",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "information",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "information",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "information",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "information",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "information",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "information",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023", F
      Arrow: <FaArrowRight className="text-primary" />,
    },
  ];

  const str = [
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "Message",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "Message",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "Message",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "Message",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "Message",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "Message",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "Message",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "Message",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "Message",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "Message",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "Message",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "Message",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "Message",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "Message",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "Message",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
    {
      usericon: <CiUser className="text-primary fs-4" />,
      username: "Bhumika",
      electronicicon: <TbApps className="text-primary fs-4" />,
      Electronitittle: "Message",
      IotIcon: <ImTree className="text-primary fs-4" />,
      IOtTittle: "IOT Sensor",
      dateicon: <CiCalendar className="text-primary fs-4" />,
      date: "17/11/2023",
      Arrow: <FaArrowRight className="text-primary" />,
    },
  ];
  return (
    <div>
      <div className="container-fluid ">
        <div className="row ">
          <div className="col-lg-2 col-sm-12">
            <Sidebar />
          </div>
          <div className="col-lg-10 col-sm-12">
            <Nav />
            {/* <div className="d-flex p-5">
              <div><h1>aaa</h1></div>
              <div><h1>aaa</h1></div>
            </div> */}
            <div className="d-flex gap-5 ">
              <div className="col-sm-12 col-lg-5 mt-5">
                <div className="card bg-light">
                  <div className="card-body">
                    <h6 className="text-secondary">WELCOME BACK</h6>

                    <h2 className="font1 text-primary">Perfect Engineering</h2>
                    <div class="input-group mb-3">
                      <input
                        type="text"
                        class="form-control"
                        placeholder="https://example.com/users"
                        aria-label="Recipient's username"
                        aria-describedby="button-addon2"
                      />
                      <button
                        class="btn btn-outline-secondary"
                        type="button"
                        id="button-addon2"
                      >
                        copy
                      </button>
                    </div>
                  </div>
                </div>

                <div className="card bg-light mt-5 ">
                  <div className="card-body">
                    <div className="d-flex gap-2   align-items-center">
                      <p className="mt-4 ">
                        <p className="fs-4">Order</p>
                      </p>
                      <i class="fa-solid fa-calendar-days  fs-3"></i>17/11/2023
                      <i class="fa-solid fa-calendar-days me-2 ms-2 fs-3"></i>
                      17/11/2023
                      <i class="fa-solid fa-rotate-right me-2  fs-3"></i>
                      <button className="btn clr2 btn-lg w-25 ">+Create</button>
                    </div>
                    <div className="d-flex p-5">
                      <div className="border w-50 me-4">
                        <i class="fa-solid fa-virus fs-3 mt-2 ms-2 me-2"></i>
                        3456
                        <p className="ms-5">Total Orders</p>
                      </div>

                      <div className="border w-50 ">
                        <i class="fa-solid fa-square-check fs-3 me-3 ms-2 mt-2"></i>
                        3000<p className="ms-5">Confirmed</p>
                      </div>
                    </div>
                    <div className="d-flex p-5">
                      <div className="border w-50 me-4">
                        <i class="fa-solid fa-virus fs-3 mt-2 ms-2 me-2"></i>45
                        <p className="ms-5">Total Orders</p>
                      </div>

                      <div className="border w-50 ">
                        <i class="fa-solid fa-square-check fs-3 me-3 ms-2 mt-2"></i>
                        3456<p className="ms-5">Confirmed</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div
                className="col-sm-12 col-lg-5 mt-5 w-50 h"
                style={{ display: set == 1 ? "block" : "none" }}
              >
                <div
                  className=""
                  style={{
                    border: "2px solid #dadada",
                    height: "75vh",
                    overflow: "auto",
                    backgroundColor: "white",
                  }}
                >
                  <span className="ms-5 me-3 fs-5 mt-5">
                    {" "}
                    <FaRegMessage />
                    inbox
                  </span>
                  <span> Leads</span>
                  <button
                    className="me-5"
                    style={{
                      borderRadius: "40%",
                      color: "white",
                      backgroundColor: "red",
                      border: "none",
                    }}
                  >
                    10+
                  </button>
                  <span
                    className="ms-5"
                    onClick={() => {
                      useset(2);
                    }}
                  >
                    Chats
                  </span>

                  <button
                    style={{
                      borderRadius: "60%",
                      color: "white",
                      backgroundColor: "red",
                      border: "none",
                    }}
                  >
                    10+
                  </button>
                  <hr />

                  {data.map((i) => {
                    return (
                      <div>
                        <div
                          className="d-flex mt-2 justify-content-between px-3 py-2 align-items-center "
                          style={{ border: "2px solid #dadada" }}
                        >
                          <div className="d-flex align-items-center gap-2">
                            <span>{i.usericon}</span>
                            <span>{i.username}</span>
                          </div>
                          <div>
                            <div className="d-flex align-items-center gap-2">
                              <span>{i.electronicicon}</span>
                              <span>{i.Electronitittle}</span>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                              <span>{i.IotIcon}</span>
                              <span>{i.IOtTittle}</span>
                            </div>
                          </div>
                          <div className="d-flex align-items-center gap-2">
                            <span>{i.dateicon}</span>
                            <span>{i.date}</span>
                          </div>
                          <div>
                            <span>{i.Arrow}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>

              {/* tab second one */}

              <div
                className="col-sm-12 col-lg-5 mt-5 w-50 h"
                style={{ display: set == 2 ? "block" : "none" }}
              >
                <div
                  className=""
                  style={{
                    border: "2px solid #dadada",
                    height: "75vh",
                    overflow: "auto",
                    backgroundColor: "white",
                  }}
                >
                  <span className="ms-5 me-3 fs-5 mt-5">
                    {" "}
                    <FaRegMessage />
                    inbox
                  </span>
                  <span
                    onClick={() => {
                      useset(1);
                    }}
                  >
                    {" "}
                    Leads
                  </span>
                  <button
                    className="me-5"
                    style={{
                      borderRadius: "40%",
                      color: "white",
                      backgroundColor: "red",
                      border: "none",
                    }}
                  >
                    10+
                  </button>
                  <span className="ms-5">Chats</span>

                  <button
                    style={{
                      borderRadius: "60%",
                      color: "white",
                      backgroundColor: "red",
                      border: "none",
                    }}
                  >
                    10+
                  </button>
                  <hr />

                  {str.map((i) => {
                    return (
                      <div>
                        <div
                          className="d-flex mt-2 justify-content-between px-3 py-2 align-items-center "
                          style={{ border: "2px solid #dadada" }}
                        >
                          <div className="d-flex align-items-center gap-2">
                            <span>{i.usericon}</span>
                            <span>{i.username}</span>
                          </div>
                          <div>
                            <div className="d-flex align-items-center gap-2">
                              <span>{i.electronicicon}</span>
                              <span>{i.Electronitittle}</span>
                            </div>
                            <div className="d-flex align-items-center gap-2">
                              <span>{i.IotIcon}</span>
                              <span>{i.IOtTittle}</span>
                            </div>
                          </div>
                          <div className="d-flex align-items-center gap-2">
                            <span>{i.dateicon}</span>
                            <span>{i.date}</span>
                          </div>
                          <div>
                            <span>{i.Arrow}</span>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dash;
