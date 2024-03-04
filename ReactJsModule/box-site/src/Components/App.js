import React from "react";
import { Header } from "./Header/header.jsx";
import { FirstBlock } from "./FirstBlock/firstBlock.jsx";
import { SecondBlock } from "./SecondBlock/secondBlock.jsx";
import { ThirdBlock } from "./ThirdBlock/thirdBlock.jsx";
import { FourthBlock } from "./FourthBlock/fourthBlock.jsx";
import { FifthBlock } from "./FifthBlock/fifthBlock.jsx";
import { SixthBlock } from "./SixthBlock/sixthBlock.jsx";
import { SeventhBlock } from "./SeventhBlock/seventhBlock.jsx";
import { EighthBlock } from "./EighthBlock/eighthBlock.jsx";
import { Footer } from "./Footer/footer.jsx";



export const App = () => {
  return (
    <div>
      <Header />
      <FirstBlock />
      <SecondBlock />
      <ThirdBlock />
      <FourthBlock />
      <FifthBlock />
      <SixthBlock />
      <SeventhBlock />
      <EighthBlock />
      <Footer />
    </div>
    
  )
}

