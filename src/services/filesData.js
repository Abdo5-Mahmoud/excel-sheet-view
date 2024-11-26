import * as XLSX from "xlsx";
import { addWorkBook } from "../features/workbookSlice";
// document.getElementById("upload").addEventListener("change", function (event) {
//   const file = event.target.files[0];
//   if (!file) {
//     alert("يرجى اختيار ملف Excel");
//     return;
//   }

//   // //     // تحويل الورقة إلى JSON
//   // const jsonData = XLSX.utils.sheet_to_json(worksheet, { header: 1 });
//   // console.log(jsonData.join(",").splice(",")); // الباينات اللي جوا الشيت الواحد

//   // //     // عرض البيانات على الصفحة
//   // let output = '<table border="2" bordersize="10px" id="table">';
//   // jsonData.forEach(function (row) {
//   //   output += "<tr>";
//   //   row.forEach(function (cell) {
//   //     output += `<td>${cell}</td>`;
//   //   });
//   //   output += "</tr>";
//   // });
//   // output += "</table>";
//   // document.getElementById("output").innerHTML = output;

//   // /// parts

//   // const dataHeader = jsonData.shift();
//   // const serialHeader = dataHeader.shift();
//   // // console.log(dataHeader);

//   // const myObject = {};
//   // console.log(dataHeader);
//   // jsonData.forEach((row) => {
//   //   dataHeader.map((ele, index) => (myObject[ele] = row[index]));
//   //   console.log(myObject);
//   // });

//   //     jsonData.map((dataRow, indexRow) => {
//   //       const child = document.createElement("div");
//   //       document.getElementById("parts").appendChild(child);
//   //       // console.log(dataRow);

//   //       const serialNumber = dataRow.shift();
//   //       // console.log(serialNumber);
//   //       child.classList.add("box");
//   //       const serialShape = document.createElement("p");
//   //       const barcodeId = `barcode-${serialNumber}`;

//   //       serialShape.innerHTML = `<canvas id="${barcodeId}"></canvas>
//   //   `;

//   //       child.appendChild(serialShape);

//   //       Barcode(document.getElementById(`${barcodeId}`), serialNumber, {
//   //         format: "code128",
//   //         lineColor: "#000000",
//   //         width: 2,
//   //         height: 100,
//   //         displayValue: true,
//   //       });

//   //       /////////////

//   //       //     ///////////Container//////////////////(
//   //       //     const dataContainer = document.createElement("div");
//   //       //     dataContainer.classList.add("container");
//   //       //     child.appendChild(dataContainer);

//   //       //     ///////////Personal and Address Information///////////////////
//   //       //     const personalCont = document.createElement("div");
//   //       //     dataContainer.appendChild(personalCont);
//   //       //     personalCont.classList.add("personalContainer");

//   //       //     //////////Personal info.--------
//   //       //     let personalINF = document.createElement("div");
//   //       //     personalCont.append(personalINF);
//   //       //     personalINF.classList.add("personalINF");

//   //       //     const personalInformation = dataRow.slice(0, 3);
//   //       //     const personalHeader = dataHeader.slice(0, 3);
//   //       //     personalInformation.map((ele, index) => {
//   //       //       personalINF.innerHTML += `<div><p>${personalHeader[index]} </p> <p>${ele}</p><div>`;
//   //       //     });

//   //       //     /////Adress info.-------
//   //       //     let adressINF = document.createElement("div");
//   //       //     adressINF.classList.add("adressINF");
//   //       //     personalCont.append(adressINF);

//   //       //     const adressInformation = dataRow.slice(3, 7);
//   //       //     const adressHeader = dataHeader.slice(3, 7);
//   //       //     // console.log(adressInformation);

//   //       //     adressInformation.map((ele, index) => {
//   //       //       adressINF.innerHTML += `<div><p>${adressHeader[index]} </p> <p>${ele}</p></div>`;
//   //       //     });

//   //       //     //////Goods Notes
//   //       //     const goodsDescription = document.createElement("div");
//   //       //     goodsDescription.classList.add("goodsDescription");
//   //       //     personalCont.appendChild(goodsDescription);

//   //       //     goodsDescription.innerHTML = `<div><p>${dataHeader[7]}</p><p>${dataRow[7]}</p></div>`;

//   //       //     //////Goods INFO
//   //       //     const shipmentInformation = document.createElement("div");
//   //       //     shipmentInformation.classList.add("shipmentInformation", "flex");
//   //       //     dataContainer.appendChild(shipmentInformation);

//   //       //     const shipmentCont = document.createElement("div");
//   //       //     shipmentInformation.appendChild(shipmentCont);

//   //       //     const shipmentDataHeader = dataHeader.slice(8, 12);
//   //       //     const shipmentData = dataRow.slice(8, 12);
//   //       //     // console.log(shipmentData);
//   //       //     for (let i = 0; i < 4; i += 2) {
//   //       //       shipmentCont.innerHTML += `
//   //       //       <div >
//   //       //       <div><p>${shipmentDataHeader[i]}</p><p>${shipmentData[i]}</p></div>
//   //       //       <div><p>${shipmentDataHeader[i + 1]}</p><p>${shipmentData[i]}</p></div>
//   //       //       </div>`;
//   //       //     }

//   //       //     ///////Kind of the Process
//   //       //     const shipmentProcess = document.createElement("div");
//   //       //     shipmentProcess.classList.add("shipmentPrcess");
//   //       //     shipmentProcess.innerHTML = `<p> ${dataHeader[12]}</p><p> ${dataRow[12]}</p>`;
//   //       //     shipmentInformation.appendChild(shipmentProcess);
//   //       //     // let partsOutput = ``;
//   //       //     // dataHeader.map((headercell, index) => {
//   //       //     //   partsOutput += `<td>${headercell}: ${dataRow[index]}</td>`;
//   //       //     // });
//   //       //     // child.innerHTML = partsOutput;
//   //       //     //)
//   //       //   });
//   //       // };

//   //       reader.readAsArrayBuffer(file);
//   //     });
//   //   };
// });

export async function getTheSheets(file, dispatch) {
  let fileName = file.name;
  console.log(file);
  if (file) {
    const reader = new FileReader(file);
    // console.log(reader);

    reader.readAsArrayBuffer(file);
    reader.onload = function () {
      // console.log(reader);

      // console.log(e.target.result); /// this go to the arrayBuffer in the reader

      // console.log(new Uint8Array(e.target.result)); // unitArray the transformation of the  arrayBuffer in the reader

      const data = new Uint8Array(reader.result);
      // console.log(data);
      // console.log(XLSX.read(data, { type: "array" }));

      const { Sheets: sheetsContent, SheetNames: sheetsName } = XLSX.read(
        data,
        { type: "array" },
      );
      // console.log(Sheets, SheetNames);
      console.log({ fileName, content: { sheetsContent, sheetsName } });

      dispatch(
        addWorkBook({ fileName, content: { sheetsContent, sheetsName } }),
      );
    };
  }
}

//  i pass the workbook and the sheet name
// so it will return the content of the sheet for the name that i passed
