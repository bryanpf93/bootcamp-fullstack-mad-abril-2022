import { useEffect, useState } from "react";
import { CocktelContext } from "./cocktel.context";

export const STORAGE_KEY = 'key-theme'

function CocktelProvider({children}) {
    const [theme, setTheme] = useState(() => localStorage.getItem(STORAGE_KEY));

    useEffect(() => {
      localStorage.setItem(STORAGE_KEY, theme)
    }, [theme])
    

    return(
        <CocktelContext.Provider value={[theme, setTheme]}>
            {children}
        </CocktelContext.Provider>
    )
}

export default CocktelProvider;