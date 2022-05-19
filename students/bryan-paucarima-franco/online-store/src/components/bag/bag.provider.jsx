import { useState } from "react";
import { BagContext } from "./bag.context";

function BagProvider({children}) {
    const bagState = useState([])
  return(
      <BagContext.Provider value={bagState}>
          {children}
      </BagContext.Provider>
  )  
}

export default BagProvider;