import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import * as Yup from "yup";
import { api } from "../../services/api/api";
import * as S from "./styled";

type LoginUserData = {
	name: string;
	password: string;
};

const loginSchema = Yup.object().shape({
	name: Yup.string()
		.required("Please, insert the user's name.")
		.min(3, "Name must have at least 3 characters"),
	password: Yup.string()
		.required("Please, insert the user's password.")
		.min(6, "Password must have at least 6 characters"),
});

export const LoginScreen = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<LoginUserData>({
		resolver: yupResolver(loginSchema),
	});

	const handleLoginUser: SubmitHandler<LoginUserData> = async (values) => {
		try {
			const response = await api.post("/login", {
				name: values.name,
				password: values.password,
			});

			if (response.data.ok === true) {
				swal("Access granted!", `Welcome, ${response.data.login}`);
			} else {
				console.log(response.data);
			}
		} catch (error: any) {
			function isAxiosError(errorSample: any): errorSample is AxiosError {
				return errorSample.isAxiosError === true;
			}
			if (isAxiosError(error) && error.message === "Network Error") {
				swal("Please, try again.", "The connection could not be established.");
			} else {
				return swal("Please, try again.", "Name or password are incorrect.");
			}
		}
	};

	return (
		<S.Form action='' onSubmit={handleSubmit(handleLoginUser)}>
			<h1>Log in</h1>

			<input
				type='text'
				placeholder='Name...'
				//@ts-ignore
				name='name'
				id='name'
				{...register("name")}
			/>

			{errors.name && <span>{errors.name.message}</span>}

			<input
				type='password'
				placeholder='Password...'
				//@ts-ignore
				name='password'
				id='password'
				{...register("password")}
			/>

			{errors.password && <span>{errors.password.message}</span>}

			<S.FormSubmit type='submit'>Log in</S.FormSubmit>

			<p>
				Aren't you registered yet?
				<br /> <Link to='/register'>Click here</Link>
			</p>
		</S.Form>
	);
};
