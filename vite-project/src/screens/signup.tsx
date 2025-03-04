import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import axios from "axios";
import { Link } from "react-router-dom";
import {
	Card,
	CardContent,
	CardDescription,
	CardFooter,
	CardHeader,
	CardTitle,
} from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import {
	Carousel,
	CarouselItem,
	CarouselContent,
	CarouselPrevious,
	CarouselNext,
} from "../components/ui/carousel";
import { Button } from "../components/ui/button";
import img1 from "../assets/1.svg";
import img2 from "../assets/2.svg";
import img3 from "../assets/3.svg";

export function Signup() {
	const navigate = useNavigate();
	const { token, isAuthenticated } = useAuthStore(); // Pega o estado de autenticação
	const [userData, setUserData] = useState({
		username: "",
		email: "",
		first_name: "",
		password: "",
	});
	const [error, setError] = useState("");

	// Atualiza os valores do formulário
	const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};
	const handleSignup = async () => {
		try {
			const response = await axios.post("http://127.0.0.1:8000/register/", userData);

			// Captura o token retornado pelo backend
			const { token } = response.data;

			// Armazena no localStorage
			localStorage.setItem("token", token);

			// Atualiza o estado do Zustand manualmente
			useAuthStore.setState({ token, isAuthenticated: true });

			// Redireciona para a página protegida
			navigate("/dashboard");
		} catch (err) {
			setError("Erro ao registrar usuário. Verifique os dados.");
		}
	};
	return (
		<main className="bg-primary w-full h-screen flex">
			{/* Carrossel */}
			<div className="bg-secondary w-full h-full flex items-center justify-center p-16">
				<Carousel className="w-full max-w-3xl">
					<CarouselContent>
						<CarouselItem>
							<div className="w-full flex justify-center items-center bg-background rounded p-8">
								<img
									src={img1}
									alt="Imagem de executivo"
									className="w-full max-w-lg h-auto object-contain"
								/>
							</div>
						</CarouselItem>
						<CarouselItem>
							<div className="w-full flex justify-center items-center bg-background rounded p-8">
								<img
									src={img2}
									alt="Imagem de executivo"
									className="w-full max-w-lg h-auto object-contain"
								/>
							</div>
						</CarouselItem>
						<CarouselItem>
							<div className="w-full flex justify-center items-center bg-background rounded p-8">
								<img
									src={img3}
									alt="Imagem de executivo"
									className="w-full max-w-lg h-auto object-contain"
								/>
							</div>
						</CarouselItem>
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>

			{/* Formulário de Cadastro */}
			<section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
				<Card className="w-full max-w-md">
					<CardHeader>
						<CardTitle className="text-2xl font-bold tracking-tighter">Crie sua conta</CardTitle>
						{error && <p className="text-red-500">{error}</p>}
						<CardDescription>Preencha os campos abaixo para criar sua conta</CardDescription>
					</CardHeader>
					<CardContent>
						<div>
							<Label htmlFor="name">Usuário</Label>
							<Input
								id="name"
								placeholder="Digite seu usuário"
								type="text"
								name="username"
								value={userData.username}
								onChange={handleChange}
							/>
						</div>
						<div>
							<Label htmlFor="name">Nome</Label>
							<Input
								id="name"
								placeholder="Digite seu primeiro nome"
								type="text"
								name="first_name"
								value={userData.first_name}
								onChange={handleChange}
							/>
						</div>
						<div className="mt-4">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								placeholder="Digite seu email"
								type="email"
								name="email"
								value={userData.email}
								onChange={handleChange}
							/>
						</div>
						<div className="mt-4">
							<Label htmlFor="password">Senha</Label>
							<Input
								id="password"
								placeholder="Crie uma senha"
								type="password"
								name="password"
								value={userData.password}
								onChange={handleChange}
							/>
						</div>
						<Button className="mt-6 w-full" onClick={handleSignup}>
							Cadastrar
						</Button>
					</CardContent>
					<CardFooter className="flex flex-col items-center gap-2">
						<p className="text-muted-foreground text-center text-sm">
							Já tem uma conta?{" "}
							<Link to="/" className="text-primary font-bold hover:underline">
								Faça login
							</Link>
						</p>
					</CardFooter>
				</Card>
			</section>
		</main>
	);
}
