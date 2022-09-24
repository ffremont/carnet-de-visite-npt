import { createContext } from 'react';

import { memoryStore } from './memoryStore';

const defaultStore = memoryStore();

export const StoreContext = createContext(defaultStore);