import { Link, useNavigate } from "react-router-dom";
import React, { JSX, useState } from "react";
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

import { useAuthStore } from "../store/authStore";

type AuthActions = {
	login: (email: string, password: string) => Promise<void>;
};

export function Signin(): JSX.Element {
	const { login }: AuthActions = useAuthStore();
	const navigate = useNavigate();

	const [email, setEmail] = useState<string>("");
	const [password, setPassword] = useState<string>("");
	const [error, setError] = useState<string>("");

	const handleLogin = async (): Promise<void> => {
		try {
			await login(email, password);
			navigate("/dashboard");
		} catch (err) {
			setError("Erro ao fazer login. Verifique suas credenciais.");
		}
	};

	return (
		<main className="bg-primary w-full h-screen flex">
			<div className="bg-secondary w-full h-full flex items-center justify-center p-16">
				<Carousel className="w-full max-w-3xl">
					<CarouselContent>
						{[img1, img2, img3].map((img, idx) => (
							<CarouselItem key={idx}>
								<div className="w-full flex justify-center items-center bg-background rounded p-8">
									<img
										src={img}
										alt="Imagem de executivo"
										className="w-full max-w-lg h-auto object-contain"
									/>
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
						<CardTitle className="text-2xl font-bold tracking-tighter">
							Entre com sua conta
						</CardTitle>
						<CardDescription>
							Utilize seu email e senha para entrar
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div>
							<Label htmlFor="email">Email</Label>
							<Input
								id="email"
								placeholder="digite seu email"
								type="email"
								value={email}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setEmail(e.target.value)
								}
							/>
						</div>
						<div className="mt-4">
							<Label htmlFor="password">Senha</Label>
							<Input
								id="password"
								placeholder="digite sua senha"
								type="password"
								value={password}
								onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
									setPassword(e.target.value)
								}
							/>
						</div>
						{error && (
							<p className="text-red-500 text-sm mt-2">{error}</p>
						)}
						<Button onClick={handleLogin} className="mt-6 w-full">
							Entrar
						</Button>
					</CardContent>
					<CardFooter className="flex flex-col items-center gap-2">
						<p className="text-muted-foreground text-center text-sm">
							Ainda não tem uma conta?{" "}
							<Link
								to="/signup"
								className="text-primary font-bold hover:underline"
							>
								Cadastre-se aqui
							</Link>
						</p>
						<p className="text-muted-foreground text-center text-xs">
							Ao entrar na nossa plataforma você concorda com nossos termos de
							uso e nossa política de privacidade.
						</p>
					</CardFooter>
				</Card>
			</section>
		</main>
	);
}
