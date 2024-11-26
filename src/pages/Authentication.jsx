import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const Authentication = ({ children }) => {
  const data = useSelector((state) => state.workBook.data);
  console.log(data.length);

  if (!data.length) return <Navigate to={"/"} replace />;

  return children;
};

export default Authentication;
