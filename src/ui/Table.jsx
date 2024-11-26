import { useSelector } from "react-redux";
import ShowUser from "./ShowUser";
const Table = () => {
  const activeSheet = useSelector((state) => state.activeSheet?.data);

  return (
    <div className="flex w-full flex-col justify-center gap-5  text-sm lg:text-lg">
      {activeSheet.length ? (
        <>
          <div className="overflow-x-scroll border-2  p-2 shadow-md">
            <table className="mx-auto my-5 w-[400px] font-sans text-xl leading-normal ">
              {activeSheet.map((row, index) => {
                if (row.length) {
                  if (index == 0) {
                    return (
                      <thead key={`col${[index]}`} className="border">
                        <tr className="bg-[#009879] text-[#ffffff]">
                          {row?.map((ele) => {
                            return (
                              <th
                                className="border px-[15px] py-[12px]"
                                key={ele}
                              >
                                {ele}
                              </th>
                            );
                          })}
                        </tr>
                      </thead>
                    );
                  }
                  return (
                    <tbody key={`row${index}`}>
                      <tr
                        key={`col${[index]}`}
                        className={`border-b border-[#ddddd] ${index % 2 == 0 ? "bg-[ #f3f3f3" : ""}`}
                      >
                        {row?.map((ele) => {
                          if (ele)
                            return (
                              <td className="border p-3 text-center" key={ele}>
                                {ele}
                              </td>
                            );
                        })}
                      </tr>
                    </tbody>
                  );
                }
              })}
            </table>
          </div>

          <ShowUser activeSheet={[...activeSheet]} />
        </>
      ) : (
        <p className="rounded-sm bg-slate-50 p-3 text-3xl capitalize shadow-md">
          There is Nothing in this Sheet
        </p>
      )}
    </div>
  );
};

export default Table;
/*   let output = '<table border="2" bordersize="10px" id="table">';
    jsonData.forEach(function (row) {
      output += "<tr>";
      row.forEach(function (cell) {
        output += `<td>${cell}</td>`;
      });
      output += "</tr>";
    });
    output += "</table>";
    document.getElementById("output").innerHTML = output; */
