import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  ListGroup,
  ListGroupItem,
  Button,
  InputGroup,
  InputGroupAddon,
  FormCheckbox,
  FormInput,
  Row,
  Col
} from "shards-react";

import Sliders from "./../../components/components-overview/Sliders.js";
import SlidersPart from "./../../components/components-overview/SlidersParticipant.js";

const SidebarCategories = ({ title }) => (
  <Card small className="mb-3">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>
    <CardBody className="p-0">
      <ListGroup flush>
        <ListGroupItem className="px-3 pb-2">
          <FormCheckbox className="mb-1" value="uncategorized" defaultChecked>
            Uncategorized
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="clinical" defaultChecked>
            Clinical Research
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="development">
            Market Research
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="more">
            Surveys
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="more">
            Male
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="more">
            Female
          </FormCheckbox>
          <FormCheckbox className="mb-1" value="more">
            21 and Above
          </FormCheckbox>
        </ListGroupItem>

        <ListGroupItem className="d-flex px-3">
          <InputGroup className="ml-auto">
            <FormInput placeholder="New category" />
            <InputGroupAddon type="append">
              <Button theme="white" className="px-2">
                <i className="material-icons">add</i>
              </Button>
            </InputGroupAddon>
          </InputGroup>
        </ListGroupItem>
      </ListGroup>

      <Row>
        <Col lg="12" md="12" sm="12" className="mb-4">
          <Sliders />
        </Col>

        <Col lg="12" md="12" sm="12" className="mb-4">
          <SlidersPart />
        </Col>
      </Row>

      <Row></Row>
    </CardBody>
  </Card>
);

SidebarCategories.propTypes = {
  title: PropTypes.string
};

SidebarCategories.defaultProps = {
  title: "Categories & Requirements"
};

export default SidebarCategories;
