import { Footer } from "./components/footer";
import { GlobalCSS } from "./styles/global/globalCSS";
import { BrowserRouter } from "react-router-dom";
import { MainRoutes } from "./routes/routes";

export const App = () => {
	return (
		<main>
			<GlobalCSS />
			<BrowserRouter>
				<MainRoutes />
				<Footer />
			</BrowserRouter>
		</main>
	);
};
