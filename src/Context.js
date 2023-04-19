import { createContext } from "react";

const Context = createContext({
    selected: {
        current: -1,
        symbols: [],
    },
    setSelected: () => {},
});

export default Context;