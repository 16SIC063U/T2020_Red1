import React from "react";
import { ListGroupItem, Slider } from "shards-react";

const Sliders = () => (
  <ListGroupItem className="px-3">
    <div className="mb-2 pb-1">
      <strong className="text-muted d-block">Financial Allocation</strong>
      <Slider
        theme="success"
        className="my-4"
        connect={[true, false]}
        start={[50]}
        range={{ min: 0, max: 100 }}
        tooltips
      />
    </div>
  </ListGroupItem>
);

export default Sliders;
