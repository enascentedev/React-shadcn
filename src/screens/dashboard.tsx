import React, { JSX } from "react";
import { useAuthStore } from "../store/authStore";
import { useNavigate } from "react-router-dom";
import { Button } from "../components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "../components/ui/card";

type AuthActions = {
	logout: () => void;
};

export function Dashboard(): JSX.Element {
	const { logout }: AuthActions = useAuthStore();
	const navigate = useNavigate();

	const handleLogout = (): void => {
		logout();
		navigate("/");
	};

	return (
		<div className="min-h-screen flex flex-col bg-gray-100">
			<nav className="bg-white shadow p-4 flex justify-between items-center">
				<h1 className="text-xl font-semibold text-gray-800">Dashboard</h1>
				<Button variant="destructive" onClick={handleLogout}>
					Sair
				</Button>
			</nav>
			<main className="flex flex-col items-center justify-center flex-grow p-6">
				<Card className="w-full max-w-3xl">
					<CardHeader>
						<CardTitle>Bem-vindo ao Dashboard 🎉</CardTitle>
					</CardHeader>
					<CardContent>
						<p className="text-gray-600">
							Aqui você pode acessar os recursos internos da plataforma.
						</p>
					</CardContent>
				</Card>
			</main>
		</div>
	);
}
