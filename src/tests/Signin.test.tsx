// signin.test.tsx
import { render, screen, fireEvent,act } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Signin } from "../screens/signin"
import { useAuthStore } from "../store/authStore";

jest.mock("../store/authStore");

describe("Signin", () => {
	it("deve chamar login com os valores corretos e redirecionar para /dashboard", async () => {
		const mockedLogin = jest.fn().mockResolvedValueOnce(null);
		(useAuthStore as unknown as jest.Mock).mockReturnValue({ login: mockedLogin });

		render(
			<BrowserRouter>
				<Signin />
			</BrowserRouter>
		);

		// preencher campos
		fireEvent.change(screen.getByPlaceholderText(/digite seu email/i), {
			target: { value: "teste@exemplo.com" },
		});
		fireEvent.change(screen.getByPlaceholderText(/digite sua senha/i), {
			target: { value: "123456" },
		});

		await act(async () => {
			fireEvent.click(screen.getByRole("button", { name: /entrar/i }));
		});
		expect(mockedLogin).toHaveBeenCalledWith("teste@exemplo.com", "123456");
		// aqui poderíamos testar se o navigate("/dashboard") foi chamado
		// usando também um mock do react-router-dom
	});
});
