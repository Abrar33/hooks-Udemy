import { useState, useEffect } from "react";

import Card from "./Card";
import useCustom from "./Hooks/context";

const BackwardCounter = () => {
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setCounter((prevCounter) => prevCounter - 1);
  //   }, 1000);

  //   return () => clearInterval(interval);
  // }, []);
  const counter = useCustom(false);
  return <Card>{counter}</Card>;
};

export default BackwardCounter;
