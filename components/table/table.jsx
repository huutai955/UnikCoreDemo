import React, { useEffect, useState } from "react";
import { Table } from "antd";

export default function TableComponent({ columns, data }) {
  const [columnsTable, setColumnTable] = useState([]);
  const [dataTable, setDataTable] = useState([]);

  useEffect(() => {
    setColumnTable(columns);
    setDataTable(data);
  }, []);
  return (
    <Table
      rowSelection={{
        type: "checkbox",
      }}
      columns={columnsTable}
      dataSource={dataTable}
      scroll={{
        x: 1500,
        y: 400,
      }}
    />
  );
}
