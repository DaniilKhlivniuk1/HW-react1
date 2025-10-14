import { Sec, Title } from "./Section";

export const Section = ({ title, children }) => {
  return (
    <Sec>
      <Title>{title}</Title>
      {children}
    </Sec>
  );
};