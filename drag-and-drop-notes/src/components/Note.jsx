/* eslint-disable react/display-name */
import { forwardRef } from "react";

/* eslint-disable react/prop-types */
const Note = forwardRef(({ content, initialPos, ...props }, ref) => {
  return (
    <div
      ref={ref}
      style={{
        position: "absolute",
        left: `${initialPos?.x}px`,
        top: `${initialPos?.y}px`,
        border: "1px solid black",
        userSelect: "none",
        padding: "10px",
        width: "200px",
        cursor: "move",
        backgroundColor: "lightyellow",
      }}
      {...props}
    >
      📌 {content}
    </div>
  );
});

export default Note;
