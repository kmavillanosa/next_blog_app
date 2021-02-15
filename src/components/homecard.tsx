import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  Grid,
  Typography,
} from "@material-ui/core";
import { Skeleton } from "@material-ui/lab";
import { useEffect, useState } from "react";
import useStyles from "../helpers/styles";
import Link from 'next/link';


const HomeCard = (item) => {
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, Math.floor(Math.random() * 1000));
  }, []);

  const classes = useStyles();
  return isLoading === true ? (
    <Skeleton variant='rect' animation='wave' />
  ) : (
    <Grid item>
      <Card className={classes.card}>
        <CardHeader title={item.title} />
        <CardContent>
          <Typography variant='subtitle1'>{item.body}</Typography>
        </CardContent>
        <CardActions>
          <Link href={{ pathname: "/view-blog", query: item }} passHref>
            <Button target='_blank' component='a' color='secondary'>
              Read Blog
            </Button>
          </Link>
        </CardActions>
      </Card>
    </Grid>
  );
};

export default HomeCard;
