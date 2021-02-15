import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  Button,
} from "@material-ui/core";
import useStyles from "../helpers/styles";

import Head from "next/head";
import Link from "next/link";

const Layout = (props) => {
  const classes = useStyles();

  const defaultTitle = "Welcome to my blog! Kim Avillanosa";

  return (
    <div className={classes.root}>
      <Head>
        <title>{props.title === undefined ? defaultTitle : props.title}</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <AppBar>
        <Container>
          <Toolbar>
            <Typography className={classes.fields} variant='h6'>
              Kim Avillanosa
            </Typography>
            <Link href='/' passHref>
              <Button color='inherit'>Home</Button>
            </Link>
            <Link href='/home2' passHref>
              <Button color='inherit'>Home2</Button>
            </Link>
            <Link href='/create-blog' passHref>
              <Button color='inherit'>Create new blog</Button>
            </Link>

            <Link href='/about' passHref>
              <Button color='inherit'>About Me</Button>
            </Link>
          </Toolbar>
        </Container>
      </AppBar>
      <main style={{ marginTop: 80 }}>
        <Container>{props.children}</Container>
      </main>
    </div>
  );
};

export default Layout;
