import React from "react";

const Socialicons = (prop) => {
  const { Icon } = prop;
  const { text } = prop;

  return (
    <div className="flex items-center gap-x-1 text-sm">
      {Icon}
      <p>{text}</p>
    </div>
  );
};

export default Socialicons;
