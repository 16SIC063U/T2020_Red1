import React from "react";
import { Container, Row, Col, Card, CardHeader, CardBody } from "shards-react";

import PageTitle from "../components/common/PageTitle";

const Tables = () => (
  <Container fluid className="main-content-container px-4">
    {/* Page Header */}
    <Row noGutters className="page-header py-4">
      <PageTitle sm="4" title="Transaction History" className="text-sm-left" />
    </Row>

    {/* Default Light Table */}
    <Row>
      <Col>
        <Card small className="mb-4">
          <CardHeader className="border-bottom">
            <h6 className="m-0">October Transactions</h6>
          </CardHeader>
          <CardBody className="p-0 pb-3">
            <table className="table mb-0">
              <thead className="bg-light">
                <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Date
                  </th>
                  <th scope="col" className="border-0">
                    Type
                  </th>
                  <th scope="col" className="border-0">
                    Reference Number
                  </th>
                  <th scope="col" className="border-0">
                    Tag
                  </th>
                  <th scope="col" className="border-0">
                    Credit/Debit
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>12 Oct 2019</td>
                  <td>DEBIT</td>
                  <td>
                  297899874 BONES
                  </td>
                  <td>F&B</td>
                  <td>
                    <span className="text-danger text-semibold">
                    $16.41
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>11 Oct 2019</td>
                  <td>DEBIT</td>
                  <td>
                  874670509 BANK FAST TRANSFER TO 415967364
                  </td>
                  <td>TRANSFER</td>
                  <td>
                    <span className="text-danger text-semibold">
                    $21.31
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>7 Oct 2019</td>
                  <td>DEBIT</td>
                  <td>
                  410591772 THE VANILLA ORCHARD
                  </td>
                  <td>F&B</td>
                  <td>
                    <span className="text-danger text-semibold">
                    11.34
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>4 Oct 2018</td>
                  <td>CREDIT</td>
                  <td>
                  563214767 BANK FAST TRANSFER FROM 420691347
                  </td>
                  <td>TRANSFER</td>
                  <td>
                    <span className="text-success text-semibold">
                      $15.83
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>

    {/* Default Dark Table */}
    <Row>
      <Col>
        <Card small className="mb-4 overflow-hidden">
          <CardHeader className="bg-dark">
            <h6 className="m-0 text-white">September Transactions</h6>
          </CardHeader>
          <CardBody className="bg-dark p-0 pb-3">
            <table className="table table-dark mb-0">
              <thead className="thead-dark">
              <tr>
                  <th scope="col" className="border-0">
                    #
                  </th>
                  <th scope="col" className="border-0">
                    Date
                  </th>
                  <th scope="col" className="border-0">
                    Type
                  </th>
                  <th scope="col" className="border-0">
                    Reference Number
                  </th>
                  <th scope="col" className="border-0">
                    Tag
                  </th>
                  <th scope="col" className="border-0">
                    Credit/Debit
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1</td>
                  <td>28 Sept 2019</td>
                  <td>DEBIT</td>
                  <td>
                  126874203 FAST-TREK TRANSPORT
                  </td>
                  <td>F&B</td>
                  <td>
                    <span className="text-danger text-semibold">
                    $16.41
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>2</td>
                  <td>28 Sept 2019</td>
                  <td>DEBIT</td>
                  <td>
                  684471721 THE OLIVE AFTER DARK
                  </td>
                  <td>F&B</td>
                  <td>
                    <span className="text-danger text-semibold">
                    $21.31
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>3</td>
                  <td>15 Sept 2019</td>
                  <td>CREDIT</td>
                  <td>
                  756382781 BANK FAST TRANSFER FROM 791102030
                  </td>
                  <td>TRANSFER</td>
                  <td>
                    <span className="text-success text-semibold">
                    9.34
                    </span>
                  </td>
                </tr>
                <tr>
                  <td>4</td>
                  <td>4 Sept 2018</td>
                  <td>CREDIT</td>
                  <td>
                  85890033 BANK FAST TRANSFER FROM 409310906
                  </td>
                  <td>TRANSFER</td>
                  <td>
                    <span className="text-success text-semibold">
                      $15.83
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </CardBody>
        </Card>
      </Col>
    </Row>
  </Container>
);

export default Tables;
