import React from "react";
import PropTypes from "prop-types";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  ButtonGroup,
  Button,
  Row,
  Col
} from "shards-react";

const Discussions = ({ title, discussions }) => (
  <Card small className="blog-comments">
    <CardHeader className="border-bottom">
      <h6 className="m-0">{title}</h6>
    </CardHeader>

    <CardBody className="p-0">
      {discussions.map((discussion, idx) => (
        <div key={idx} className="blog-comments__item d-flex p-3">
          {/* Avatar */}
          <div className="blog-comments__avatar mr-3">
            <img src={discussion.author.image} alt={discussion.author.name} />
          </div>

          {/* Content */}
          <div className="blog-comments__content">
            {/* Content :: Title */}
            <div className="blog-comments__meta text-mutes">
              <a className="text-secondary" href={discussion.author.url}>
                {discussion.author.name}
              </a>{" "}
              on{" "}
              <a className="text-secondary" href={discussion.post.url}>
                {discussion.post.title}
              </a>
              <span className="text-mutes">- {discussion.date}</span>
            </div>

            {/* Content :: Body */}
            <p className="m-0 my-1 mb-2 text-muted">{discussion.body}</p>

            {/* Content :: Actions */}
            <div className="blog-comments__actions">
              <ButtonGroup size="sm">
                <Button theme="white">
                  <span className="text-success">
                    <i className="material-icons">check</i>
                  </span>{" "}
                  Approve
                </Button>
                <Button theme="white">
                  <span className="text-danger">
                    <i className="material-icons">clear</i>
                  </span>{" "}
                  Reject
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      ))}
    </CardBody>

    <CardFooter className="border-top">
      <Row>
        <Col className="text-center view-report">
          <Button theme="white" type="submit">
            View All Comments
          </Button>
        </Col>
      </Row>
    </CardFooter>
  </Card>
);

Discussions.propTypes = {
  /**
   * The component's title.
   */
  title: PropTypes.string,
  /**
   * The discussions dataset.
   */
  discussions: PropTypes.array
};

Discussions.defaultProps = {
  title: "Messages from DBS",
  discussions: [
    {
      id: 1,
      date: "3 days ago",
      author: {
        image: "data:image/png;base64,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",
        name: "DBS",
        url: "#"
      },
      post: {
        title: "Discounts and Offers from DBS",
        url: "#"
      },
      body: // add body from api call 
        "Grab discount with PayLah!"
    },
    {
      id: 2,
      date: "4 days ago",
      author: {
        image: "data:image/png;base64,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",
        name: "DBS",
        url: "#"
      },
      post: {
        title: "Discounts and Offers from DBS",
        url: "#"
      },
      body:
        "GoJek voucher with DBS card!"
    },
    // {
    //   id: 3,
    //   date: "5 days ago",
    //   author: {
    //     image: "data:image/png;base64,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",
    //     name: "",
    //     url: "#"
    //   },
    //   post: {
    //     title: "",
    //     url: "#"
    //   },
    //   body:
    //     "Can I check on the referral program? If I refer my friends how much will I get? I will refer my.."
    // }
  ]
};

export default Discussions;
