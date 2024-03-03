import React, {createContext, useReducer} from 'react';

const initialState = {
  userData: null,
};

export const AppContext = createContext(null);

const reducers = (state, action) => {
  switch (action.type) {
    case 'STORE_USER_DATA':
      return {
        ...state,
        userData: action.payload,
      };
    default:
      return state;
  }
};

const AppContextProvider = ({children}) => {
  const [state, dispatch] = useReducer(reducers, initialState);

  const storeUser = data => {
    dispatch({
      type: 'STORE_USER_DATA',
      payload: data,
    });
  };

  return (
    <AppContext.Provider value={{state, storeUser}}>
      {children}
    </AppContext.Provider>
  );
};

export default AppContextProvider;
