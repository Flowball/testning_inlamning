import { createContext, Dispatch, SetStateAction } from "react";

type ContextType = [string, Dispatch<SetStateAction<string>>];

export const Context = createContext<ContextType>(["", () => {}]);
