import React, { useState, useEffect, useCallback } from "react";
import axios from "axios";
import { AgGridReact } from "ag-grid-react";
import { AllModules } from "@ag-grid-enterprise/all-modules";
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-balham.css";
import GridGlobalStyle from "./styles";
import { colConfig } from "./colConfig";
// import { data } from "./mockData";

const DataTable = () => {
  let [users, setUsers] = useState([]);

  const fetchData = useCallback(() => {
    axios({
      method: "GET",
      url: "https://reqres.in/api/users",
      headers: {
        "content-type": "application/octet-stream",
      },
    })
      .then(({ data }) => {
        setUsers(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  return (
    <div
      className="ag-theme-balham"
      style={{ height: "500px", width: "950px", margin: "200px" }}
    >
      <GridGlobalStyle />
      <AgGridReact
        modules={AllModules}
        paginationPageSize={10}
        pagination={true}
        columnDefs={colConfig}
        rowData={users}
      ></AgGridReact>
    </div>
  );
};

export default DataTable;
