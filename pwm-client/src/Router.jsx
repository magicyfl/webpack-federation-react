import React from 'react';
import { HashRouter, Route, Switch, Redirect } from 'react-router-dom' ;
import { Provider } from 'react-redux';
import Layout from '@/component/Layout';
import Recent from '@/pages/Recent';
import Devices from '@/pages/Devices';
import Valut from '@/pages/Valut';
import store from '@/store';

function NotFound() {
  return (
    <div>404</div>
  );
}

// local 本地使用 remote 远端使用
function HocRouter(type = 'local') {

  const sharedRouter = (
    <Switch>
			<Route path="/recent">
				<Recent />
			</Route>
			<Route path="/devices">
				<Devices />
			</Route>
			<Route path="/valut">
				<Valut />
			</Route>
			<Route path="/">
				<Redirect to="/recent" />
			</Route>
		</Switch>
  );

  return function() {
    return (
      <Provider store={store}>
        <HashRouter>
					{
						type === 'local'
						?
						<Layout>
							{sharedRouter}
						</Layout>
						:
						sharedRouter
					}
        </HashRouter>
      </Provider>
    )
  }
}

export const RemoteRouter = HocRouter('remote');

export const LocalRouter = HocRouter('local')

