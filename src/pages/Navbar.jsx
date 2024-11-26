import { useSelector } from "react-redux";
import logo from "../../img/logo.png";
import ListItem from "../ui/ListItem";
import { useState } from "react";
import { Link, Navigate, replace, useNavigate } from "react-router-dom";
const sheets = [
  "sheet 1",
  "sheet 2",
  "sheet 2",
  "sheet 2",
  "sheet 2",
  "sheet 2",
  "sheet 2",
  "sheet 2",
  "sheet 2",
  "sheet 2",
  "sheet 2",
  "sheet 3",
];
const Navbar = () => {
  const [activeWorkBook, setActiveWorkBook] = useState("");
  const [sheets, setSheets] = useState([]);

  const [...workSheets] = useSelector((state) =>
    state.workBook.data?.map((ele) => ele.fileName),
  );
  // console.log(workSheets);

  // const {...S} = useState([]);

  return (
    <div className="relative p">
      <div className="flex items-center justify-between rounded-b-lg bg-opacity-80 bg-slate-700 p-2 shadow-sm">
        <Link to={"/"}>
          <img src={logo} alt="logo img" className="text-white" width={50} />
        </Link>
        <ul className="relative flex max-w-[60%] list-none flex-wrap justify-evenly gap-2 p-2">
          {workSheets.map((ele, index) => (
            <ListItem
              type="workBook"
              key={index}
              setActiveWorkBook={setActiveWorkBook}
              setSheets={setSheets}
            >
              {ele}
            </ListItem>
          ))}
        </ul>
      </div>
      <div
        className={`flex w-0 opacity-0 ${activeWorkBook && "w-full opacity-100"} relative items-center justify-between overflow-hidden rounded-lg bg-slate-200 p-2 shadow-sm duration-700 ease-in-out`}
      >
        <h4 className="bold font-mono capitalize shadow-md">
          {activeWorkBook}
        </h4>
        <ul className="relative flex max-w-[60%] list-none flex-wrap justify-evenly gap-2 p-2">
          {sheets.map((ele, index) => (
            <ListItem type="sheet" key={index}>
              {ele}
            </ListItem>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
