import Layout from "../src/components/Layout";
import {
  Card,
  CardContent,
  CardHeader,
  Container,
  Typography,
} from "@material-ui/core";

import { useEffect, useState } from "react";
import { WebClient } from "../src/api/webclient";
import useStyles from "../src/helpers/styles";

const ViewBlog = ({
  url: {
    query: { title, body, userId, id },
  },
}) => {
  const classes = useStyles();

  const [comments, setComments] = useState([]);
  const [isLoading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    WebClient.get("/posts/1/comments").then((resp) => {
      setComments(resp.data);
      setLoading(false);
      return Promise.resolve(resp.data);
    });
  }, []);

  return (
    <Layout>
      <Typography variant='h3'>Blog</Typography>
      <Typography variant='h5'>{title}</Typography>
      <Typography variant='subtitle1'>{body}</Typography>
      <Container>
        {isLoading === true ? (
          <div>Loading..</div>
        ) : (
          <Container>
            <Typography variant="h4">Comments</Typography>
            {comments.map((comment) => {
              return (
                <Card className={classes.card}>
                  <CardContent>
                    <Typography color='textSecondary' gutterBottom>
                      {comment.email}
                    </Typography>
                    <Typography variant='h5' component='h2'>
                      {comment.body}
                    </Typography>
                  </CardContent>
                </Card>
              );
            })}
          </Container>
        )}
      </Container>
    </Layout>
  );
};

export default ViewBlog;
