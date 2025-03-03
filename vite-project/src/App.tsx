import React from "react";
import { Routes, Route } from "react-router-dom";
import { Signin } from "./screens/signin";
import { Signup } from "./screens/signup";

export function App() {
	return (
		<Routes>
			<Route path="/" element={<Signin />} />
			<Route path="/signup" element={<Signup />} />
		</Routes>
	);
}
