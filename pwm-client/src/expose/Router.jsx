import React from 'react';
import { Route, Routes } from 'react-router-dom' ;
import { Provider } from 'react-redux';
import RouterConfig from '@/RouterConfig';
import store from '@/store';

function App(props) {
  return (
    <Provider store={store}>
      <Routes>
        {RouterConfig.map((item) => {
          return (
						<Route
							key={item.path}
							path={item.path}
							element={item.element}
						/>
					);
        })}
      </Routes>
    </Provider>
  );
}

export default App
