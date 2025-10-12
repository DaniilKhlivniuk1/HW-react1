import { ButtonLM } from "./Button";

export default function Button({ onClick }) {
  return (
    <div style={{ textAlign: "center" }}>
      <h2 style={{ marginBottom: "10px" }}>Search</h2>
      <ButtonLM type="button" onClick={onClick}>
        Load more
      </ButtonLM>
    </div>
  );
}