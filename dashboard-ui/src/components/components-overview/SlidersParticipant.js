import React from "react";
import { ListGroupItem, Slider } from "shards-react";

const Sliders = () => (
  <ListGroupItem className="px-3">
    <div className="mb-2 pb-1">
      <strong className="text-muted d-block">No. of Participants</strong>
      <Slider
        theme="primary"
        className="my-4"
        connect={[true, false]}
        start={[150]}
        range={{ min: 0, max: 300 }}
        tooltips
      />
    </div>
  </ListGroupItem>
);

export default Sliders;
