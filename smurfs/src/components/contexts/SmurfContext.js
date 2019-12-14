// Using context
// 1 - create ContextObject

// 2 - use contextObject provider component to wrap component tree in App component
// 3 - pass in data to share with component tree
// 4 - consume data in child/nested component (may need to refactor to remove props)

import { createContext } from 'react';

export const SmurfContext = createContext();