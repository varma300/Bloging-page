import React, { useContext } from "react";
import { Link } from "react-router-dom";
import Context from "../context/CreateContext";

const Page2 = () => {
  const Data = useContext(Context);
  const { value, setValue } = Data;
  return <div>
  <h3>Blog : </h3>
   {value } <br/>
   <Link to ='/' >Home</Link>
   </div>;

};

export default Page2;
