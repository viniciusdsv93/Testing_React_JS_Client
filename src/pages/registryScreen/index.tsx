import { yupResolver } from "@hookform/resolvers/yup";
import { AxiosError } from "axios";
import { SubmitHandler, useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import swal from "sweetalert";
import * as Yup from "yup";
import { api } from "../../services/api/api";
import * as S from "./styled";

type RegistryUserData = {
	name: string;
	password: string;
	confirmPassword: string;
};

const registrySchema = Yup.object().shape({
	name: Yup.string()
		.required("Please, insert the user's name.")
		.min(3, "Name must have at least 3 characters"),
	password: Yup.string()
		.required("Please, insert the user's password.")
		.min(6, "Password must have at least 6 characters"),
	confirmPassword: Yup.string().oneOf(
		[Yup.ref("password"), null],
		"Passwords must match"
	),
});

export const RegistryScreen = () => {
	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<RegistryUserData>({
		resolver: yupResolver(registrySchema),
	});

	const handleRegisterUser: SubmitHandler<RegistryUserData> = async (values) => {
		try {
			const response = await api.post("/user/cadaster", {
				name: values.name,
				password: values.password,
			});

			if (response.data.ok === true) {
				swal(
					"Success!",
					`The user ${response.data.user.name} was successfully created.`
				);
			}
		} catch (error: any) {
			function isAxiosError(errorSample: any): errorSample is AxiosError {
				return errorSample.isAxiosError === true;
			}
			if (isAxiosError(error) && error.message === "Network Error") {
				swal("Please, try again.", "The connection could not be established.");
			} else {
				swal(`${error.response.data.why}.`, "Please, choose another name.");
			}
		}
	};

	return (
		<S.RegistryForm action='' onSubmit={handleSubmit(handleRegisterUser)}>
			<h1>Sign up</h1>

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

			<input
				type='password'
				placeholder='Confirm password...'
				//@ts-ignore
				name='confirmPassword'
				id='confirmPassword'
				{...register("confirmPassword")}
			/>

			{errors.confirmPassword && <span>{errors.confirmPassword.message}</span>}

			<S.RegistryFormSubmit type='submit'>Register</S.RegistryFormSubmit>
			<p>
				Already have an account?
				<br /> <Link to='/'>Click here</Link>
			</p>
		</S.RegistryForm>
	);
};
