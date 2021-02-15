import { TextField, Button, Typography } from "@material-ui/core";
import Layout from "../src/components/Layout";

import { useFormik } from "formik";
import createblogvalidation from "../src/helpers/validation/createblogvalidation";
import { WebClient } from "../src/api/webclient";

const CreateBlog = (props) => {
  const formik = useFormik({
    initialValues: {
      subject: null,
      description: null,
    },
    validationSchema: createblogvalidation,
    onSubmit: (values) => {
      WebClient.post(
        "/posts",
        {
          title: "Kim",
          body: "Hello World",
          userId: 666,
        },
        {
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      ).then((resp) => {
        alert("success");
      });
    },
  });

  return (
    <Layout title='Create Blog'>
      <Typography variant='h3'>Create New Blog Post</Typography>
      <form onSubmit={formik.handleSubmit}>
        <TextField
          variant='outlined'
          fullWidth
          id='subject'
          name='subject'
          label='Subject'
          value={formik.values.subject}
          onChange={formik.handleChange}
          error={formik.touched.subject && Boolean(formik.errors.subject)}
          helperText={formik.touched.subject && formik.errors.subject}
        />
        <TextField
          id='description'
          name='description'
          variant='outlined'
          fullWidth
          multiline
          rows={10}
          value={formik.values.description}
          label='Description'
          onChange={formik.handleChange}
          error={
            formik.touched.description && Boolean(formik.errors.description)
          }
          helperText={formik.touched.description && formik.errors.description}
        />

        <Button color='primary' variant='contained' fullWidth type='submit'>
          Submit
        </Button>
      </form>
    </Layout>
  );
};

export default CreateBlog;
