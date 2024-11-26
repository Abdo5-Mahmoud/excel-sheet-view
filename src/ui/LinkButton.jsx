import { useNavigate } from "react-router-dom";

function LinkButton() {
  const navigate = useNavigate();
  return (
    <button
      className="text-sm text-blue-500 hover:text-blue-600 hover:underline"
      onClick={() => navigate(-1)}
    >
      &larr; Go back
    </button>
  );
}

export default LinkButton;
