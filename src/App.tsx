import { useForm, SubmitHandler } from "react-hook-form";

interface IFormInput {
	email: String;
	password: String;
}
function App() {
	const {
		register,
		formState: { errors },
		handleSubmit,
	} = useForm<IFormInput>();
	const onSubmit: SubmitHandler<IFormInput> = data => {
		alert(JSON.stringify(data, null, 2));
	};

	return (
		<>
			<section className="hero is-info is-fullheight">
				<div className="hero-body">
					<div className="container">
						<div className="columns is-centered  is-primary">
							<div className="column is-6">
								<form
									className="box"
									onSubmit={handleSubmit(onSubmit)}
								>
									<div className="field">
										<label className="label">Email</label>
										<input
											className={`input ${
												errors.email
													? "is-danger"
													: "is-success"
											}`}
											type="email"
											placeholder="Email"
											{...register("email", {
												required: "requerido",
												pattern: {
													value:
														/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g,
													message: "Correo no valido",
												},
											})}
										/>
									</div>
									<p className="help is-danger">
										{errors.email &&
											(errors.email as any).message}
									</p>
									<div className="field">
										<label className="label">
											Password
										</label>
										<input
											className={`input ${
												errors.password
													? "is-danger"
													: "is-success"
											}`}
											type="password"
											placeholder="Password"
											{...register("password", {
												required: "Requerido",
												minLength: {
													value: 6,
													message:
														"La contraseña debe tener al menos 6 caracteres",
												},
											})}
										/>
									</div>
									<p className="help is-danger">
										{errors.password &&
											(errors.password as any).message}
									</p>
									<div className="field">
										<p className="control">
											<button className="button is-success">
												Login
											</button>
										</p>
									</div>
								</form>
							</div>
						</div>
					</div>
				</div>
			</section>
		</>
	);
}

export default App;
