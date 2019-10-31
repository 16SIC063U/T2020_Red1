import React from "react";
import { Container, Row, Col } from "shards-react";

import PageTitle from "../components/common/PageTitle";
import Editor from "../components/add-new-post/Editor";
import SidebarCategories from "../components/add-new-post/SidebarCategories";

const AddNewPost = () => (
  <Container fluid className="main-content-container px-4 pb-4">
    <Row noGutters className="page-header py-4">
      <PageTitle
        sm="4"
        title="Postings"
        subtitle="Add New Research"
        className="text-sm-left"
      />
    </Row>

    <Row>
      <Col lg="7" md="12">
        <Editor />
      </Col>

      <Col lg="5" md="12">
        <SidebarCategories />
      </Col>
    </Row>
  </Container>
);

export default AddNewPost;
