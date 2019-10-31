/* eslint jsx-a11y/anchor-is-valid: 0 */

import React from "react";
import ReactQuill from "react-quill";
import PropTypes from "prop-types";

import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  Container,
  Form,
  FormInput
} from "shards-react";

import "react-quill/dist/quill.snow.css";
import "../../assets/quill.css";

const Editor = ({ title }) => (
  <Container fluid className="main-content-container px-4">
    <Card small className="mb-3">
      <CardBody>
        <Form className="add-new-post">
          <FormInput size="lg" className="mb-3" placeholder="Research Title" />
          <ReactQuill className="add-new-post__editor mb-1" />
        </Form>
      </CardBody>
    </Card>

    <Card small className="mb-3">
      <CardHeader className="border-bottom">
        <h6 className="m-0">{title}</h6>
      </CardHeader>

      <CardBody className="p-0">
        <ListGroup flush>
          <ListGroupItem className="p-3">
            <span className="d-flex mb-2">
              <i className="material-icons mr-1">calendar_today</i>
              <strong className="mr-1">Schedule:</strong> Now
              <a className="ml-auto" href="#">
                Edit
              </a>
            </span>
            <span className="d-flex">
              <i className="material-icons mr-1">score</i>
              <strong className="mr-1">Readability:</strong>{" "}
              <strong className="text-warning">Ok</strong>
            </span>
          </ListGroupItem>
          <ListGroupItem className="d-flex px-3 border-0">
            <Button outline theme="accent" size="sm">
              <i className="material-icons">save</i> Save Draft
            </Button>
            <Button theme="accent" size="sm" className="ml-auto">
              <i className="material-icons">file_copy</i> Publish
            </Button>
          </ListGroupItem>
        </ListGroup>
      </CardBody>
    </Card>
  </Container>
);

Editor.propTypes = {
  title: PropTypes.string
};

Editor.defaultProps = {
  title: "Actions"
};

export default Editor;
