const Login = () => {
  return (
    <section className="flex flex-col gap-2">
        <h1>Login</h1>
        <div>
            <label htmlFor="email">
                <input className="border border-black" type="email" name="email" id="email" autoComplete="on" />
            </label>
        </div>

        <div>
            <label htmlFor="password">
                <input className="border border-black" type="password" name="password" id="password" autoComplete="on" />
            </label>
        </div>

        <button className="p-2 border w-fit border-black" type="submit">Submit</button>
    </section>
  )
}

export default Login