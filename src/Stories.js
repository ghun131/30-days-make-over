import React from "react";

const Story = ({ match }) => (
  <div>
    <h3>{match.params.storyId}</h3>
  </div>
);

export default Story;
