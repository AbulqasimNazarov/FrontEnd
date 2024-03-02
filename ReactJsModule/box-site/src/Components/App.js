import React from "react";
import { Header } from "./Header/header.js";
import { FirstBlock } from "./FirstBlock/firstBlock.js";
import { SecondBlock } from "./SecondBlock/secondBlock.js";
import { ThirdBlock } from "./ThirdBlock/thirdBlock.jsx";
import "./style.scss"

export const App = () => {
  return (
    <div>
      <Header />
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
    </div>
    
  )
}

