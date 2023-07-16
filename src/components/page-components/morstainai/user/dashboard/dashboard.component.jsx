import React, { useEffect, useState, useRef } from "react";
import classes from "./dashboard.module.sass";

import UseUserContext from "../../../../../hook/auth/user.hook";
import NavBar from "./navbar/nav-bar.component";
import NoAccess from "../no-access/no-access.component";

import { FaUserCog } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";
import { FaDownload } from "react-icons/fa";
import { ImDownload } from "react-icons/im";
import { FaCloudUploadAlt } from "react-icons/fa";

import axios from "axios";

const DashBoard = () => {
  const user = UseUserContext();

  const [role, setRole] = useState(user?.info?.role);
  const [keyword, setKeyword] = useState();

  if (!user.info) return <NoAccess />;

  const [projects, setProjects] = useState([]);
  const [filterprojects, setFilterprojects] = useState([]);

  useEffect(() => {
    const morstainURL = process.env.REACT_APP_MORSTAIN_URL;

    const qery =
      role === "admin"
        ? `${morstainURL}/uploadInfo/`
        : `${morstainURL}/uploadInfo/${user.info.userid}`;

    axios.get(`${qery}`).then((res) => {
      setProjects([...res.data]);
      setFilterprojects([...res.data]);
    });
  }, [setProjects]);


  const filterProject = (e) => {
    const filterVal = e.target.value;
    setFilterprojects(
      projects.filter(
        (project) =>
          project.project.includes(filterVal) ||
          project.firstname.includes(filterVal) ||
          project.lastname.includes(filterVal) ||
          project.status.includes(filterVal)
      )
    );
    // setKeyword(e.target.value)
  };


  return (
    <>
      <NavBar />
      <div className={classes.wrapper}>
        <div className={classes.nav}>
          {role === "admin" && (
            <>
              <a href="/morstainai/user/dashboard"> PRPJECT </a>
              {` | `}
              <a href="/morstainai/user/dashboard/users"> USER </a>
            </>
          )}
        </div>

        <div className={classes.project}>
          <div className={classes.userInfo}>
            <FaUserCog size={25} />
            <p>
              UserName: {user.info.firstname} {user.info.lastname}
            </p>
            <p>Email: {user.info.email}</p>
          </div>
          <h2>Microglial Image </h2>
          <div className={classes.inputgroup}>
            <FcSearch size={20} />
            <div>Search: </div>

            <input
              type="text"
              placeholder="Search Here ..."
              // value={keyword}
              onChange={(e) => {
                filterProject(e);
              }}
              // onClick={() => filterProject()}
            />
          </div>

          <table>
            <tbody>
              <tr>
                {role === "admin" && <th>UserName</th>}
                <th>Project</th>
                {/* <th>Thickness</th>
                <th>Pixel</th>
                <th>Images</th> */}
                <th>Status</th>
                <th>Result</th>
              </tr>
              {filterprojects.map((project, idx) => (
                <tr key={`project_${idx}`}>
                  {role === "admin" && (
                    <td>
                      {project.firstname} {project.lastname}
                    </td>
                  )}
                  <td style={{ display: "flex" }}>
                    {role === "admin" && <ImDownload size={14} />}
                    <p style={{ marginLeft: "5px", cursor: "pointer" }}>
                      {project.project}
                    </p>
                  </td>
                  {/* <td>{project.thickness}</td>
                  <td>{project.pixel}</td>
                  <td>{project.images}</td> */}
                  <td>{project.status}</td>
                  <td>
                    {role === "admin" ? (
                      <a href="/morstainai/user/dashboard">
                        <FaCloudUploadAlt size={25} />
                      </a>
                    ) : (
                      <a href="/morstainai/user/dashboard">View</a>
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default DashBoard;
