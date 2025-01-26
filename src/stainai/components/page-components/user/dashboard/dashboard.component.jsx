import React, { useCallback, useContext, useEffect, useState } from "react";
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

  const [downloadStatus, setDownloadStatus] = useState(null);

  const [selectedProject, setSelectedProject] = useState(null);

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

        const parseResults = results.reduce((acc, item) => {
          const { project, status, timestamp, ...detail } = item;
          const existingProject = acc.find(p => p.project === project);

          if (existingProject) {
            existingProject.details.push(detail);
          } else {
            acc.push({
              project,
              status,
              timestamp,
              details: [detail],
            });
          }

          return acc;
        }, []);

        setData(parseResults);
        setFilteredData(parseResults);

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
  }, [data]);

  const onDownload = useCallback(async (e, project) => {
    setDownloadStatus('Downloading...');

    try {
      const stainaiURL = process.env.REACT_APP_STAINAI_URL;
      const response = await fetch(`${stainaiURL}/download-results?username=${user?.firstname} ${user?.lastname}&project=${project}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
        },
      });

      if (!response.ok) {
        throw new Error('Failed to download file');
      }

      const blob = await response.blob();
      const link = document.createElement('a');
      link.href = URL.createObjectURL(blob);
      link.download = 'results.zip';
      link.click();
      link.remove();

      setDownloadStatus(`Project "${project}" has been successfully downloaded!`);

      setTimeout(() => {
        setDownloadStatus(null);
      }, 3000);  
    } catch (error) {
      console.error('Download failed:', error);
      setDownloadStatus('Failed to download the file. Please try again.');
    }
  });

  // Handle row click to toggle project details visibility
  const handleRowClick = (project) => {
    // Toggle the details display by checking if this project is already selected
    if (selectedProject?.project === project.project) {
      setSelectedProject(null); // Deselect if it's already selected
    } else {
      setSelectedProject(project); // Select the clicked project
    }
  };

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
              <>
                <tr key={idx}>
                  <td
                    onClick={() => handleRowClick(row)} // Click to show details
                    className={classes.projectName}
                  >
                    {row.project}
                  </td>
                  <td>{row.status}</td>
                  <td>{new Date(row.timestamp).toLocaleDateString()}</td>
                  <td>
                    {row.status === 'done' && (
                      <a onClick={(e) => onDownload(e, row.project)}>Download</a>
                    )}
                  </td>
                </tr>

                {/* Render details row if the project is selected */}
                {selectedProject?.project === row.project && (
                  <tr>
                    <td colSpan="4" className={classes.projectDetailsRow}>
                      {
                        row.details?.map((detail, idx) => (
                          <div key={idx}>
                            <p><strong>Species:</strong> {detail.species}</p>
                            <p><strong>Strain:</strong> {detail.strain}</p>
                            <p><strong>Treatment:</strong> {detail.treatment}</p>
                            <p><strong>Organ:</strong> {detail.organ}</p>
                            <p><strong>Slice:</strong> {detail.slice}</p>
                            <p><strong>Region:</strong> {detail.region}</p>
                            <p><strong>Structure:</strong> {detail.structure}</p>
                            <p><strong>Images:</strong> {detail.images}</p>
                          </div>
                        ))
                      }
                    </td>
                  </tr>
                )}
              </>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default DashBoard;