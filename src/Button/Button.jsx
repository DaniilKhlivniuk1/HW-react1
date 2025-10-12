import { ButtonLM } from "./Button";

export default function Button({ onClick }) {
  return (
    <ButtonLM type="button" onClick={onClick}>
      Search
    </ButtonLM>
  );
}