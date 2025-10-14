import styled from "styled-components";

const Sec = styled.section`
  background-color: #ffffff;
  border-radius: 14px;
  padding: 25px;
  margin: 20px auto;
  width: 90%;
  max-width: 500px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  transition: transform 0.3s ease;

  &:hover {
    transform: translateY(-2px);
  }
`;

const Title = styled.h2`
  text-align: center;
  font-size: 24px;
  font-weight: 700;
  color: #4745c7ff;
  margin-bottom: 15px;
`;

export const Section = ({ title, children }) => {
  return (
    <Sec>
      <Title>{title}</Title>
      {children}
    </Sec>
  );
};