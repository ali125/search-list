import classNames from "classnames";
import React, { PropsWithChildren } from "react";

type Props = PropsWithChildren & {
  className?: string;
};

const Section: React.FC<Props> = ({ children, className }) => {
  return (
    <section
      className={classNames(
        "flex flex-col gap-4 bg-white shadow-md rounded-md p-4",
        className
      )}
    >
      {children}
    </section>
  );
};

export default Section;
