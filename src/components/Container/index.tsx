import { FC } from "react";

type Props = {
  children: React.ReactNode;
};

export const Container: FC<Props> = ({ children }) => {
  return <div className="max-w-[1920px] mx-auto">{children}</div>;
};
