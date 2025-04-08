import React, { JSX, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuthStore } from "../store/authStore";
import axios from "axios";
import { API_BASE_URL } from "../config";
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
import { RadioGroup, RadioGroupItem } from "../components/ui/radio-group";
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

type UserData = {
	nome: string;
	login: string;
	email: string;
	password: string;
	telefone: string;
	status: "ativo" | "inativo";
	perfil: "admin" | "comprador" | "operador";
};

export function Signup(): JSX.Element {
	const navigate = useNavigate();
	const { token, isAuthenticated }: { token: string | null; isAuthenticated: boolean } = useAuthStore();

	const [userData, setUserData] = useState<UserData>({
		nome: "",
		login: "",
		email: "",
		password: "",
		telefone: "",
		status: "ativo",
		perfil: "admin",
	});

	const [error, setError] = useState<string>("");

	const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
		setUserData({ ...userData, [e.target.name]: e.target.value });
	};

	const handleSignup = async (): Promise<void> => {
		try {
			const response = await axios.post(`${API_BASE_URL}/register/`, userData);
			const { token } = response.data;

			localStorage.setItem("token", token);
			useAuthStore.setState({ token, isAuthenticated: true });
			navigate("/dashboard");
		} catch (err) {
			setError("Erro ao registrar usuário. Verifique os dados.");
		}
	};

	return (
		<main className="bg-primary w-full h-screen flex">
			<div className="bg-secondary w-full h-full flex items-center justify-center p-16">
				<Carousel className="w-full max-w-3xl">
					<CarouselContent>
						{[img1, img2, img3].map((img, index) => (
							<CarouselItem key={index}>
								<div className="w-full flex justify-center items-center bg-background rounded p-8">
									<img src={img} alt="Imagem de executivo" className="w-full max-w-lg h-auto object-contain" />
								</div>
							</CarouselItem>
						))}
					</CarouselContent>
					<CarouselPrevious />
					<CarouselNext />
				</Carousel>
			</div>

			<section className="flex items-center justify-center bg-background h-full max-w-3xl w-full p-4">
				<Card className="w-full max-w-md">
					<CardHeader>
						<CardTitle className="text-2xl font-bold tracking-tighter">Crie sua conta</CardTitle>
						{error && <p className="text-red-500">{error}</p>}
						<CardDescription>Preencha os campos abaixo para criar sua conta</CardDescription>
					</CardHeader>
					<CardContent>
						<div>
							<Label htmlFor="nome">Nome</Label>
							<Input
								id="nome"
								name="nome"
								placeholder="Digite seu nome"
								type="text"
								value={userData.nome}
								onChange={handleChange}
							/>
						</div>

						<div>
							<Label htmlFor="login">Login</Label>
							<Input
								id="login"
								name="login"
								placeholder="Digite seu login"
								type="text"
								value={userData.login}
								onChange={handleChange}
							/>
						</div>

						<div className="mt-4">
							<Label htmlFor="password">Senha</Label>
							<Input
								id="password"
								name="password"
								placeholder="Crie uma senha"
								type="password"
								value={userData.password}
								onChange={handleChange}
							/>
						</div>

						<div className="mt-4">
							<Label htmlFor="telefone">Telefone</Label>
							<Input
								id="telefone"
								name="telefone"
								placeholder="Digite um telefone"
								type="tel"
								value={userData.telefone}
								onChange={handleChange}
							/>
						</div>

						<div className="mt-4">
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								name="email"
								placeholder="Digite seu email"
								type="email"
								value={userData.email}
								onChange={handleChange}
							/>
						</div>

						<div className="mt-4">
							<Label className="mb-2 block">Status</Label>
							<RadioGroup
								name="status"
								value={userData.status}
								onValueChange={(value: string) =>
									setUserData({ ...userData, status: value as UserData["status"] })
								}
								className="flex gap-4"
							>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="ativo" id="status-ativo" />
									<Label htmlFor="status-ativo">Ativo</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="inativo" id="status-inativo" />
									<Label htmlFor="status-inativo">Inativo</Label>
								</div>
							</RadioGroup>
						</div>

						<div className="mt-4">
							<Label className="mb-2 block">Perfil</Label>
							<RadioGroup
								name="perfil"
								value={userData.perfil}
								onValueChange={(value: string) =>
									setUserData({ ...userData, perfil: value as UserData["perfil"] })
								}
								className="flex flex-col gap-2"
							>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="admin" id="perfil-admin" />
									<Label htmlFor="perfil-admin">Admin</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="comprador" id="perfil-comprador" />
									<Label htmlFor="perfil-comprador">Comprador</Label>
								</div>
								<div className="flex items-center space-x-2">
									<RadioGroupItem value="operador" id="perfil-operador" />
									<Label htmlFor="perfil-operador">Operador</Label>
								</div>
							</RadioGroup>
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
