import { Route, Routes, Navigate } from "react-router-dom";
import { ProductData } from './components/data/ProductData';
import { ProductData2 } from './components/data/ProductData2';
import { ProductData3 } from './components/data/ProductData3';
import Main from "./components/Main";
import Signup from "./components/Signup";
import Login from "./components/Login";
import Product from "./components/Product/Product";
import Product2 from "./components/Product/Product2";
import Product3 from "./components/Product/Product3";

function App() {
	const user = localStorage.getItem("token");

	return (
		<Routes>
			{user && <Route path="/" exact element={<Main />} />}
			<Route path="/signup" exact element={<Signup />} />
			<Route path="/main" exact element={<Main />} />
			<Route path="/login" exact element={<Login />} />
			<Route path="/product" exact element={<Product {...ProductData} />} />
			<Route path="/product2" exact element={<Product2 {...ProductData2} />} />
			<Route path="/product3" exact element={<Product3 {...ProductData3} />} />
			<Route path="/" element={<Navigate replace to="/login" />} />
		</Routes>
	);
}

export default App;
