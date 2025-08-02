import React from "react";

const Wrapper = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {
  return (
    <div className={`mx-6 relative my-4 md:mx-12 lg:mx-24 ${className}`}>
      {children}
    </div>
  );
};

export default Wrapper;
