import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSheetsContent, getSheetsName } from "../features/workbookSlice";
import { Link, useParams } from "react-router-dom";
import { setActiveSheets } from "../features/sheetsSlice";
const base = `cursor-pointer rounded-md border px-1 shadow transition text-sm md:text-md `;

const ListItem = ({ children, setActiveWorkBook, type, setSheets }) => {
  const styles = {
    workBook: base + `hover:bg-slate-200 hover:text-black text-white px-2 py-1`,

    sheet:
      base +
      `rounded-md bg-gray-50 px-1.5 transition hover:bg-gray-100 hover:shadow-md  `,
  };
  const sheets = useSelector(getSheetsName(children));
  const sheetsContent = useSelector(getSheetsContent(children));
  const dispatch = useDispatch();
  const listItem = useRef();
  const [activeItem] = useState("");
  const { workBook } = useParams();
  function handleClick() {
    if (type == "workBook") {
      setActiveWorkBook(children);
      setSheets(sheets);
    }
    if (type == "sheet") {
      dispatch(setActiveSheets(sheetsContent));
    }

    // about the css classes
    [...document.querySelectorAll(`#${type}`)].map((ele) => {
      if (ele.innerHTML == children) {
        ele.classList.add("active");
        // console.log(children);
      } else {
        ele.classList.remove("active");
      }
    });
  }
  return (
    <Link
      to={`${type == "workBook" ? `${children}` : `/${workBook}/${children}`}`}
      id={`${type}`}
      tabIndex={0}
      ref={listItem}
      onClick={handleClick}
      className={`${styles[type]}${activeItem == children ? "active" : ""}`}
    >
      {children}
    </Link>
  );
};
export default ListItem;
