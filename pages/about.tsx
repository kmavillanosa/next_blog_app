import {
  Container,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TableBody,
  Paper,
} from "@material-ui/core";
import Layout from "../src/components/Layout";

enum link_type {
  Link,
  Email,
}

const links = [
  {
    name: "Github",
    type: link_type.Link,
    link: "https://github.com/",
  },
  {
    name: "Facebook",
    type: link_type.Link,
    link: "https://web.facebook.com/kmavillanosa999",
  },
  {
    name: "Twitter",
    type: link_type.Link,
    link: "https://twitter.com/kmavillanosa",
  },
  {
    name: "Intagram",
    type: link_type.Link,
    link: "https://www.instagram.com/kmavillanosa",
  },
  {
    name: "Gmail",
    type: link_type.Email,
    link: "kmavillanosa@gmail.com",
  },
  {
    name: "Gmail",
    type: link_type.Email,
    link: "avillanosakzxc@gmail.com",
  },
];

const About = (props) => {
  return (
    <Layout title='About Me'>
      <h1>Here are my social sites</h1>

      <Container>
        
        <TableContainer component={Paper}>
          <TableHead>
            <TableRow>
              <TableCell>Social Site</TableCell>
              <TableCell>Link</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {links.map((item) => {
              return (
                <TableRow>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>
                    {item.type == link_type.Link ? (
                      <a target='_blank' href={item.link}>
                        {item.link}
                      </a>
                    ) : (
                      <a  href={`mailto:${item.link}`}>
                        {item.link}
                      </a>
                    )}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </TableContainer>
      </Container>
    </Layout>
  );
};

export default About;
