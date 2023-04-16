import React, { useContext } from "react";
import Context from "../context/CreateContext";

const Page2 = () => {
  const Data = useContext(Context);
  const {   } = Data;
  return <div>Page2 {value} </div>;
};

export default Page2;
