import { useParams } from "react-router-dom";

const Page = () => {
  const { workBook } = useParams();

  return (
    <div className="flex h-full items-center">
      Your are Currently in{" "}
      <span className="font-bold capitalize">{workBook}</span>
    </div>
  );
};

export default Page;
