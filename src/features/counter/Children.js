import React, { memo } from "react";

function Children() {
  console.log("Children re render");

  return (
    <div>
      <p>Children nih</p>
    </div>
  );
}

export default memo(Children);
