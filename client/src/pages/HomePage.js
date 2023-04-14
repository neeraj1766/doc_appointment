import React, { useEffect, useState } from "react";
import axios from "axios";
import Layout from "./../components/Layout";
import { Row } from "antd";
import DoctorList from "../components/DoctorList";
import "../styles/LayoutStyles.css";

// import Navbar from "../components/navbar";
const HomePage = () => {
  const [doctors, setDoctors] = useState([]);
  // login user data
  const getUserData = async () => {
    try {
      const res = await axios.get(
        "/api/v1/admin/getAllDoctors",

        {
          headers: {
            Authorization: "Bearer " + localStorage.getItem("token"),
          },
        }
      );
      if (res.data.success) {
        console.log(res.data.data);
        setDoctors(res.data.data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUserData();
  }, []);
  return (
    <Layout>
      {/* <Navbar className="navbar" /> */}
      <h1 className="text-center mt-5">HOME</h1>
      <h6 style={{ "margin-left": "15px" }}>
        Click on the doctor to book an appointment :
      </h6>
      <Row>
        {doctors &&
          doctors.map((doctor) => (
            <DoctorList className="row-design" doctor={doctor} />
          ))}
      </Row>
      <ul>
        <li>
          <h3 className="about">About:</h3>
        </li>
        <p>
          This is a web application in which doctors and patients can sync
          together and users can book their appointment with the doctor of their
          choice after they check their availability on a chosen date and time.{" "}
        </p>

        <li>
          <h3 className="about">Description:</h3>
        </li>
        <p>
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Impedit
          ratione accusantium minima rerum? Optio, labore reprehenderit.
          Veritatis necessitatibus, optio expedita illum quam cumque debitis
          accusantium possimus unde pariatur veniam laborum animi dolores libero
          alias eaque repudiandae officia repellendus dicta. Nihil nemo, facere
          unde blanditiis perferendis inventore tenetur quia sed eligendi
          facilis quasi magni iusto necessitatibus aut, voluptas, ipsum neque.
          Culpa eaque voluptates voluptatum, corrupti voluptatibus, atque nisi
          facere deserunt ad, alias minima error commodi totam sunt nam iusto!
          Dicta, quisquam quasi! Ea dolores officiis hic, eos quisquam dolorem
          molestiae deserunt ut error, earum aut in esse voluptates
          reprehenderit consequatur dicta.
        </p>

        <li>
          <h3 className="about">Contact:</h3>
        </li>
        <ol>
          <li>
            <ul>
              <li>
                <b>Name: Neeraj Gurbani </b>
              </li>
              <li>
                <b style={{ display: "inline" }}>Email: </b>
                {/* <link style={{ display: "inline" } {href : ""}}>neerajgurbani1766@gmail.com</link> */}
                <a className="email" href="mailto:neerajgurbani1766@gmail.com">
                  neerajgurbani1766@gmail.com
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <b>Name: Shane Ahmad </b>
              </li>
              <li>
                <b style={{ display: "inline" }}>Email: </b>
                {/* <link style={{ display: "inline" } {href : ""}}>neerajgurbani1766@gmail.com</link> */}
                <a className="email" href="mailto:shaneahmad22@gmail.com">
                  shaneahmad22@gmail.com
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <b>Name: Gopal Singh </b>
              </li>
              <li>
                <b style={{ display: "inline" }}>Email: </b>
                {/* <link style={{ display: "inline" } {href : ""}}>neerajgurbani1766@gmail.com</link> */}
                <a className="email" href="mailto:singhgopal9282@gmail.com">
                  singhgopal9282@gmail.com
                </a>
              </li>
            </ul>
          </li>
          <li>
            <ul>
              <li>
                <b>Name: Adya Kumari </b>
              </li>
              <li>
                <b style={{ display: "inline" }}>Email: </b>
                {/* <link style={{ display: "inline" } {href : ""}}>neerajgurbani1766@gmail.com</link> */}
                <a className="email" href="mailto:adyakumari333@gmail.com">
                  adyakumari333@gmail.com
                </a>
              </li>
            </ul>
          </li>
        </ol>
      </ul>
    </Layout>
  );
};

export default HomePage;
