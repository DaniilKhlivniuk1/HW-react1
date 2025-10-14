import styled from "styled-components";

const Text = styled.p`
  text-align: center;
  font-size: 20px;
  font-weight: 500;
  color: #555;
  background-color: #f8f9fa;
  border: 1px solid #ddd;
  border-radius: 12px;
  padding: 15px 25px;
  margin: 20px auto;
  width: fit-content;
  box-shadow: 0 4px 10px rgba(218, 15, 15, 0.1);
  animation: fadeIn 0.3s ease-in-out;

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translateY(-5px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
`;

export const Notification = ({ message }) => {
  return <Text>{message}</Text>;
};