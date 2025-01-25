import React, { useCallback, useContext, useEffect, useState, useRef } from "react";
import classes from "./dashboard.module.sass";
import { FaUserCog } from "react-icons/fa";
import { FcSearch } from "react-icons/fc";

import NavBar from "../../../shared-components/navbar/nav-bar.component";

import UserContext from "../../../../hook/auth/user.hook";

const DashBoard = () => {
  const { user, setUser } = useContext(UserContext);
  const [data, setData] = useState(null);
  const [filteredData, setFilteredData] = useState(null);
  const [error, setError] = useState(null);

  // New state variables to manage download status
  const [downloadStatus, setDownloadStatus] = useState(null);

  useEffect(() => {
    if (!user?.userid) return;

    const fetchProjects = async () => {
      try {
        const stainaiURL = process.env.REACT_APP_STAINAI_URL;
        const response = await fetch(`${stainaiURL}/user/dashboard?userid=${user?.userid}`, {
          method: 'GET',
          headers: {
            'Content-Type': 'application/json',
          },
        });

        if (!response.ok) {
          throw new Error('Failed to fetch projects');
        }

        const results = await response.json();
        setData(results);
        setFilteredData(results);

      } catch (error) {
        console.error('Error fetching data:', error);
        setError('Failed to load data. Please try again later.');
      }
    };

    fetchProjects();
  }, [user]);

  const filter = useCallback((e) => {
    if (!data) return;

    const filtered = data.filter((row) =>
      Object.values(row).some((value) => typeof value === 'string' && value.toLowerCase().includes(e.target.value.toLowerCase()))
    );

    setFilteredData(filtered);
  }, [user, data]);

  return (
    <>
      <div className={classes.header}>
        <NavBar />
      </div>
      <div className={classes.wrapper}>
        <div className={classes.userSection}>
          <div>
            <FaUserCog size={30} />
          </div>
          <div>Use Name: {user?.firstname} {user?.lastname}</div>
          <div>Email: {user?.email}</div>
        </div>

        {downloadStatus && (
          <div className={classes.downloadStatus}>
            {downloadStatus}
          </div>
        )}

        <div className={classes.searchSection}>
          <FcSearch size={20} />
          <input
            type="text"
            placeholder="Search Keyword"
            onChange={(e) => {
              filter(e);
            }}
          />
        </div>
        <table className={classes.tableInfo}>
          <thead>
            <tr>
              <th>Project</th>
              <th>Status</th>
              <th>Submission Date</th>
              <th>Result</th>
            </tr>
          </thead>
          <tbody>
            {filteredData?.map((row, idx) => (
              <tr key={idx}>
                <td>{row.project}</td>
                <td>{row.status}</td>
                <td>{row.timestamp}</td>
                <td>
                  {row.status === 'done' && (
                    <a onClick={(e) => onDownload(e, row.project)}>Download</a>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashBoard;
