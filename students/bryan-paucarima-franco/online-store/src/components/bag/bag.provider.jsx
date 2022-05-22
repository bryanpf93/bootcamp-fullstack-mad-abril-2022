import { useState } from "react";
import { BagContext } from "./bag.context";

function BagProvider({children}) {
    const bagState = useState(() => {
        const stored = localStorage.getItem('bagProducts');
        if (stored) {
            return JSON.parse(stored);
        } else {
            return [];
        }
    })

  return(
      <BagContext.Provider value={bagState}>
          {children}
      </BagContext.Provider>
  )  
}

export default BagProvider;