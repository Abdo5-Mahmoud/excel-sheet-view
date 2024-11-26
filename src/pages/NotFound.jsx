import LinkButton from "../ui/LinkButton";

function NotFound() {

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <LinkButton to={"-1"}></LinkButton>
    </div>
  );
}

export default NotFound;
