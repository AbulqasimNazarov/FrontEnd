import React from "react";
import { Header } from "./Header/header.js";
import { FirstBlock } from "./FirstBlock/firstBlock.js";
import { SecondBlock } from "./SecondBlock/secondBlock.js";
import { ThirdBlock } from "./ThirdBlock/thirdBlock.jsx";
import { FourthBlock } from "./FourthBlock/fourthBlock.jsx";



export const App = () => {
  return (
    <div>
      <Header />
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
    </div>
    
  )
}

