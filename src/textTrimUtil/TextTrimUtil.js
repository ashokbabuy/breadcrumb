import React from "react";

const TextTrimUtil = props => {
  return props.items ? (
    <div
      style={{
        overflow: "hidden",
        whiteSpace: "nowrap"
      }}
    >
      <span
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          width: "70%",
          display: "inline-block"
        }}
      >
        {props.items.join(",")}
      </span>
      <span
        style={{
          overflow: "hidden",
          whiteSpace: "nowrap",
          textOverflow: "ellipsis",
          //width: "100px",
          display: "inline-block"
        }}
      >
        {`  (${props.items.length} Items)`}
      </span>
    </div>
  ) : null;
};

export default TextTrimUtil;
