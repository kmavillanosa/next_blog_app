import Head from "next/head";
import { useEffect, useState } from "react";
import Layout from "../src/components/Layout";

import { Button } from "@material-ui/core";
import { WebClient } from "../src/api/webclient";
import {
  CellParams,
  DataGrid,
  RowData,
  RowParams,
} from "@material-ui/data-grid";

import Link from "next/link";

const columns = [
  {
    field: "userId",
    headerName: "UserId",
  },
  {
    field: "id",
    headerName: "ID",
  },
  {
    field: "title",
    headerName: "Title",
    width: 300,
  },
  {
    field: "body",
    headerName: "Description",
    width: 500,
  },
  {
    field: "options",
    headerName: "Options",
    width: 500,
    renderCell: (params) => {
      return (
        <Link href={{ pathname: "/view-blog", query: params.row }} passHref>
           <Button target="_blank" component="a" color='secondary'>Read Blog</Button>
        </Link>
      );
    },
  },
];

export default function Home() {
  const [isLoading, setLoading] = useState(true);
  const [rows, setitems] = useState([]);

  useEffect(() => {
    WebClient.get("/posts").then((resp) => {
      setitems(resp.data);
      setLoading(false);
      return Promise.resolve(resp);
    });
  });

  return (
    <Layout>
      <div style={{ height: 450, width: "100%" }}>
        <DataGrid
          loading={isLoading}
          columns={columns}
          rows={rows}
          pageSize={10}
        />
      </div>
    </Layout>
  );
}
