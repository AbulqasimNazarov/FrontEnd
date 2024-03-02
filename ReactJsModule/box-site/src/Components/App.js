import React from "react";
import { Header } from "./Header/header.jsx";
import { FirstBlock } from "./FirstBlock/firstBlock.jsx";
import { SecondBlock } from "./SecondBlock/secondBlock.jsx";
import { ThirdBlock } from "./ThirdBlock/thirdBlock.jsx";
import { FourthBlock } from "./FourthBlock/fourthBlock.jsx";
import { FifthBlock } from "./FifthBlock/fifthBlock.jsx";



export const App = () => {
  return (
    <div>
      <Header />
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
      <FifthBlock />
    </div>
    
  )
}

