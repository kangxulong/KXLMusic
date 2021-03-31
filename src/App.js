import React, { memo } from "react";
import { Provider } from "react-redux";
import { renderRoutes } from "react-router-config";

import routes from "./router";
import store from "./store";

import { HashRouter } from "react-router-dom";
import AppHeader from "@/components/app-header";
import AppFooter from "@/components/app-footer";
import KXLAppPlayBar from './pages/app-player/app-play-bar'

export default memo(function App() {
	return (
		<Provider store={store}>
			<HashRouter>
				<AppHeader />
        {renderRoutes(routes)}
				<AppFooter />
				<KXLAppPlayBar />
			</HashRouter>
		</Provider>
	);
});
