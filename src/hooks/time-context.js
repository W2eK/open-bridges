import { createContext } from 'react';

const TimeContext = createContext(0)
export const TimeProvider = TimeContext.Provider;
export const TimeConsumer = TimeContext.Consumer;
export default TimeContext;