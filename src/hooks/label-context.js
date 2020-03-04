import { createContext } from 'react';

const LabelContext = createContext(0)
export const LabelProvider = LabelContext.Provider;
export const LabelConsumer = LabelContext.Consumer;
export default LabelContext;