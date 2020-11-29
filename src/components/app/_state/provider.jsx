import { AppReducer } from './reducer';
import { AppInitialState } from './initial-state';
import { AppContext } from './context';
import { useReducer, useMemo } from 'react';

function AppProvider(props) {
  const [state, dispatch] = useReducer(AppReducer, AppInitialState(props));

  const value = useMemo(() => [state, dispatch], [state]);

  return <AppContext.Provider value={value} {...props} />;
}

export { AppProvider };
