import { createContext } from 'react';

const ModeContext = createContext(0)
export const ModeProvider = ModeContext.Provider;
export const ModeConsumer = ModeContext.Consumer;
export default ModeContext;