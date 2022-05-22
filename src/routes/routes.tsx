import { Routes, Route } from "react-router-dom";
import { LoginScreen } from "../pages/loginScreen";
import { RegistryScreen } from "../pages/registryScreen";

export const MainRoutes = () => {
	return (
		<Routes>
			<Route path='/' element={<LoginScreen />} />
			<Route path='/register' element={<RegistryScreen />} />
		</Routes>
	);
};
