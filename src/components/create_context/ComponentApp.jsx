import React, {createContext} from 'react'
import ComponentA from "./ComponentA.jsx";

// eslint-disable-next-line react-refresh/only-export-components
export const Data = createContext();
// eslint-disable-next-line react-refresh/only-export-components
export const Data1 = createContext();

const ComponentApp = () => {
    const name = "Lauren";
    const age = 22;
    return (
        <div>
            <Data.Provider value={name}>
                <Data1.Provider value={age}>
                    <ComponentA/>
                </Data1.Provider>
            </Data.Provider>
        </div>
    )
}
export default ComponentApp
