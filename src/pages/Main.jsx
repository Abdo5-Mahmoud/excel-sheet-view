import { useRef } from "react";
import { getTheSheets } from "../services/filesData";
import { useDispatch, useSelector } from "react-redux";

const Main = () => {
  // const allData = useSelector((state) => state.workBook);
  const dispatch = useDispatch();
  // console.log(allData);

  const ref = useRef();
  async function handleFile() {
    const file = ref.current.files[0];
    if (!file) {
      alert("يرجى اختيار ملف Excel");
      return;
    }
    await getTheSheets(file, dispatch);
  }

  return (
    <div className="m-auto h-full">
      {" "}
      <div className="my-10 px-4 text-center sm:my-16">
        <h1 className="mb-8 text-center text-xl font-semibold md:text-3xl">
          <span>واستخراج البيانات</span>
          <span lang="english" className="font-mono font-bold">
            {" "}
            Excel
          </span>
          <span lang="arabic"> رفع ملف</span>
        </h1>
        <div className="flex items-center justify-center gap-5">
          <label
            htmlFor="upload"
            className="cursor-pointer rounded bg-blue-500 px-4 py-2 font-bold text-white hover:bg-blue-600"
          >
            {" "}
            Choose File
          </label>
          <input
            ref={ref}
            onChange={() => handleFile()}
            className=""
            hidden
            type="file"
            id="upload"
            accept=".xlsx, .xls"
            placeholder="Plese upload the file"
          />
          <span>File Name</span>
        </div>
        <div className="mx-auto mt-2 w-fit rounded-md bg-gray-200 p-4">
          Please make sure that there is one table in each sheet
        </div>
      </div>
    </div>
  );
};

export default Main;
// document.getElementById("file-upload").addEventListener("change", function () {
//   const fileName = this.files[0] ? this.files[0].name : "No file chosen";
//   document.getElementById("file-name").textContent = fileName;
// });
