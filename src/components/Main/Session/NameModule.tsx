type Props = {
  module: string;
};

export const NameModule = ({ module }: Props) => {
  return <div className="font-manropeMedium font-medium text-[15px] text-[#2f3144]">{module}</div>;
};
