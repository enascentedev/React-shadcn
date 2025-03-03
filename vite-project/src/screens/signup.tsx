import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "../components/ui/card";
import { Label } from "../components/ui/label";
import { Input } from "../components/ui/input";
import { Carousel, CarouselItem, CarouselContent, CarouselPrevious, CarouselNext } from "../components/ui/carousel";
import { Button } from '../components/ui/button';
import { Separator } from '@radix-ui/react-separator';
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import img1 from "../assets/1.svg";
import img2 from "../assets/2.svg";
import img3 from "../assets/3.svg";

export function Signup() {
		return (
				<main className='bg-primary w-full h-screen flex'>
						{/* Carrossel */}
						<div className='bg-secondary w-full h-full flex items-center justify-center p-16'>
								<Carousel className="w-full max-w-3xl">
										<CarouselContent>
												<CarouselItem>
														<div className='w-full flex justify-center items-center bg-background rounded p-8'>
																<img src={img1} alt='Imagem de executivo' className="w-full max-w-lg h-auto object-contain" />
														</div>
												</CarouselItem>
												<CarouselItem>
														<div className='w-full flex justify-center items-center bg-background rounded p-8'>
																<img src={img2} alt='Imagem de executivo' className="w-full max-w-lg h-auto object-contain" />
														</div>
												</CarouselItem>
												<CarouselItem>
														<div className='w-full flex justify-center items-center bg-background rounded p-8'>
																<img src={img3} alt='Imagem de executivo' className="w-full max-w-lg h-auto object-contain" />
														</div>
												</CarouselItem>
										</CarouselContent>
										<CarouselPrevious />
										<CarouselNext />
								</Carousel>
						</div>

						{/* Formulário de Cadastro */}
						<section className='flex items-center justify-center bg-background h-full max-w-3xl w-full p-4'>
								<Card className='w-full max-w-md'>
										<CardHeader>
												<CardTitle className='text-2xl font-bold tracking-tighter'>Crie sua conta</CardTitle>
												<CardDescription>
														Preencha os campos abaixo para criar sua conta
												</CardDescription>
										</CardHeader>
										<CardContent>
												<div>
														<Label htmlFor="name">Nome</Label>
														<Input id="name" placeholder="Digite seu nome completo" type="text" />
												</div>
												<div className='mt-4'>
														<Label htmlFor="email">Email</Label>
														<Input id="email" placeholder="Digite seu email" type="email" />
												</div>
												<div className='mt-4'>
														<Label htmlFor="password">Senha</Label>
														<Input id="password" placeholder="Crie uma senha" type="password" />
												</div>
												<div className='mt-4'>
														<Label htmlFor="confirm-password">Confirme a senha</Label>
														<Input id="confirm-password" placeholder="Repita sua senha" type="password" />
												</div>
												<Button className='mt-6 w-full'>Cadastrar</Button>
												<div className='flex items-center justify-center gap-6 mt-4'>
														<Separator />
														<Separator />
												</div>
												<Button variant="outline" className='mt-6 w-full'>
														<GitHubLogoIcon className="mr-2" /> Cadastrar com o GitHub
												</Button>
										</CardContent>
										<CardFooter>
												<p className='text-muted-foreground text-center text-sm'>
														Ao criar uma conta, você concorda com nossos <a href="#" className='text-primary underline'>termos de uso</a> e nossa <a href="#" className='text-primary underline'>política de privacidade</a>.
												</p>
										</CardFooter>
								</Card>
						</section>
				</main>
		);
}
