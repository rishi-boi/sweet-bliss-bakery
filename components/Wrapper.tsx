import React from "react";

const Wrapper = ({ children }: { children: React.ReactNode }) => {
  return <div className="mx-6 relative my-4">{children}</div>;
};

export default Wrapper;
