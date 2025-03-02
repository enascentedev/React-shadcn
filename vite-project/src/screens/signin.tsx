import React from 'react'
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "../components/ui/card";
import {Label} from "../components/ui/label";
import {Input} from "../components/ui/input";
import {Carousel,CarouselItem,CarouselContent,CarouselPrevious,CarouselNext,} from "../components/ui/carousel";
import { Button } from '../components/ui/button';
import { Separator } from '@radix-ui/react-separator';
import { GitHubLogoIcon } from "@radix-ui/react-icons";
import img1 from "../assets/1.svg";
import img2 from "../assets/2.svg";
import img3 from "../assets/3.svg";



export function Signin() {
	
	return (
		<main className='bg-primary w-full h-screen flex'>
			<div className=' bg-secondary w-full h-full flex items-center justify-center p-16'>
				<Carousel className="w-full max-w-xl">
					<div className='flex aspect-square bg-background rounded'>
						<CarouselContent>
							<CarouselItem>
								<img src={img1} alt='imagem de executivo'/>
							</CarouselItem>
							<CarouselItem>
								<img src={img2} alt='imagem de executivo'/>
							</CarouselItem>
							<CarouselItem>
								<img src={img3} alt='imagem de executivo'/>
							</CarouselItem>
						</CarouselContent>
						<CarouselPrevious/>
						<CarouselNext/>
					</div>
				</Carousel>
			</div>
			<section className='flex items-center justify-center bg-background h-full max-w-3xl w-full p-4'>
				<Card className='w-full max-w-md'>
					<CardHeader>
						<CardTitle className='text-2xl font-bold tracking-tighter'>Entre com sua conta</CardTitle>
						<CardDescription>
							utilize seu email e senha ou Github para entrar
						</CardDescription>
					</CardHeader>
					<CardContent>
						<div>
							<Label htmlFor="email">Email</Label>
							<Input id="email" placeholder="exemplo@email" type="email"/>
						</div>
						<div className='mt-4'>
							<Label htmlFor="password">senha</Label>
							<Input id="password" placeholder="exemplo@sua senha" type="password"/>
						</div>
						<Button className='mt-6 w-full'>Entrar</Button>
						<div className='flex items-center gap-6 mt-4'>
							<Separator/>
							<span className='text-xs text-muted-foreground'>OU</span>
							<Separator/>
						</div>
						<Button variant="outline" className='mt-6 w-full'><GitHubLogoIcon className="mr-2"/> Entrar com o github</Button>
					</CardContent>
					<CardFooter>
						<p className='text-muted-foreground text-center text-sm'>Ao entrar na nossa plataforma você concorda com nossos termos de uso e nossa política de privacidade</p>
					</CardFooter>

				</Card>

			</section>

		</main>
	)
}

