import UserSlice from "./userSlice.jsx";

const ShowUser = ({ activeSheet }) => {
  let sheetHead = [...activeSheet[0]];
  let sheetBody = [...activeSheet].slice(1);
  console.log(sheetHead);
  console.log(sheetBody);

  return (
    <div className="mt-3 grid w-full grid-cols-2 place-items-center justify-center gap-5 border-t-2 p-3 max-lg:grid-cols-1">
      {sheetBody.map((row, index) => (
        <div
          className="card flex flex-row-reverse border-2 shadow-sm"
          key={`${row}-${index}`}
        >
          <div className="card-col1 p-2">
            <div className="mt-2 flex w-fit items-center justify-end gap-1  p-2">
              <div id="details">
                {[...row.slice(0, 9)].map((ele, index) => {
                  return <UserSlice type='data' key={index}>{ele}</UserSlice>;
                })}
              </div>
              <div id="Deliver ">
                {[...sheetHead.slice(0, 9)].map((ele) => {
                  return <UserSlice type='head' key={index}>{ele}</UserSlice>;
                })}
              </div>
            </div>
          </div>
          <div className="card-col2 p-2">
            <div className="mt-2 flex w-fit items-center justify-end gap-3  p-2">
              <div id="details">
                {[...row.slice(9)].map((ele, index) => {
                  return <UserSlice type='data' key={index}>{ele}</UserSlice>;
                })}
              </div>
              <div id="Deliver ">
                {[...sheetHead.slice(9)].map((ele) => {
                  return <UserSlice type='head' key={index}>{ele}</UserSlice>;
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowUser;
/* <div className="mt-3 grid max-lg:grid-cols-1 place-items-center justify-center w-full grid-cols-2 gap-4 border-t-2 p-3">
      {sheetBody.map((row, index) => ( 
        <div
          className="card flex flex-row-reverse border-2 shadow-sm"
          key={`${row}-${index}`}
        >
          <div className="card-col1 p-2">
            <div className="mt-2 flex w-fit items-center justify-end gap-3 border-2 p-2">
              <div id="details">
                {[...row.slice(0, 9)].map((ele, index) => {
                  return <UserSlice key={index}>{ele}</UserSlice>;
                })}
              </div>
              <div id="Deliver ">
                {[...sheetHead.slice(0, 9)].map((ele) => {
                  return <UserSlice key={index}>{ele}</UserSlice>;
                })}
              </div>
            </div>
          </div>
          <div className="card-col2 p-2">
            <div className="mt-2 flex w-fit items-center justify-end gap-3 border-2 p-2">
              <div id="details">
                {[...row.slice(9)].map((ele, index) => {
                  return <UserSlice key={index}>{ele}</UserSlice>;
                })}
              </div>
              <div id="Deliver ">
                {[...sheetHead.slice(9)].map((ele) => {
                  return <UserSlice key={index}>{ele}</UserSlice>;
                })}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div> */
