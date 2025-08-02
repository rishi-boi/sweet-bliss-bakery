import React from "react";
import styled from "styled-components";

const Button = ({
  children,
  className,
  setIsOpen,
}: {
  children: React.ReactNode;
  className?: string;
  setIsOpen?: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  return (
    <StyledWrapper>
      <button
        className={className}
        onClick={() => setIsOpen && setIsOpen((prev) => !prev)}
      >
        {children}
      </button>
    </StyledWrapper>
  );
};

const StyledWrapper = styled.div`
  button {
    cursor: pointer;
  }

  button:hover {
    transform: translate(0.05em, -0.05em);
    box-shadow: -0.15em 0.15em #624f3c;
  }

  button:active {
    transform: translate(-0.05em, 0.05em);
    box-shadow: -0.05em 0.05em;
  }
`;

export default Button;
