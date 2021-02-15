import { useEffect, useState } from "react";
import Layout from "../src/components/Layout";

import { WebClient } from "../src/api/webclient";
import { usePagination } from "@material-ui/lab/Pagination";
import { Pagination, Skeleton } from "@material-ui/lab";
import {
  Card,
  TablePagination,
  Typography,
  CardContent,
  Grid,
} from "@material-ui/core";
import { classnames } from "@material-ui/data-grid";
import useStyles from "../src/helpers/styles";
import HomeCard from "../src/components/homecard";

const paginate = (array, limit, page) => {
  return array.slice((page - 1) * limit, page * limit);
};

export default function Home2() {
  const [isLoading, setLoading] = useState(false);
  const [pagedItems, setPageItems] = useState([]);
  const [items, setItems] = useState([]);

  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(2);

  useEffect(() => {
    setLoading(true);
    WebClient.get("/posts").then((resp) => {
      setItems(resp.data);
      setPageItems(paginate(resp.data, limit, page));
      setLoading(false);

      return Promise.resolve(resp);
    });
  }, []);

  const handleChangePage = (event, newPage) => {
    setLoading(true);

    setTimeout(() => {
      setPage(newPage);
      setPageItems(paginate(items, limit, page));
      setLoading(false);
    }, 100);
  };

  const handleChangeRowsPerPage = (event) => {
    setLoading(true);
    setTimeout(() => {
      setLimit(event.target.value);
      setPageItems(paginate(items, limit, page));
      setLoading(false);
    }, 100);
  };

  return (
    <Layout>
      <div style={{ height: 450, width: "100%" }}>
        <div>
          {isLoading === true ? (
            <>
              <Skeleton variant='rect' animation='wave' height={300} />
            </>
          ) : (
            <Grid alignItems='center' container>
              {pagedItems.map((item) => {
                return <HomeCard {...item} />;
              })}
            </Grid>
          )}
        </div>
        <TablePagination
          defaultValue={1}
          rowsPerPageOptions={[1, 2, 3, 4, 5]}
          component='div'
          count={items.length}
          page={page}
          rowsPerPage={limit}
          onChangePage={handleChangePage}
          onChangeRowsPerPage={handleChangeRowsPerPage}
        />
      </div>
    </Layout>
  );
}
