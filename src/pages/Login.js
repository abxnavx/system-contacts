import React, { useState } from "react";
import axios from "axios";

function Login() {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleLogin = async (e) => {
        e.preventDefault();

        try {
            const response = await axios.post(
                "https://worksheet-auth.mashupstack.com/login",
                {
                    email: email,
                    password: password
                }
            );

            alert("Successfully Logged In");

            console.log("Token:", response.data.token);

        } catch (error) {
            alert(
                error.response?.data?.message ||
                "Login failed. Please check your credentials."
            );
        }
    };

    return (
        <div className="form-container">
            <h2>Login</h2>

            <form onSubmit={handleLogin}>
                <input
                    type="email"
                    placeholder="Enter Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                />

                <input
                    type="password"
                    placeholder="Enter Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                />

                <button type="submit">Login</button>
            </form>
        </div>
    );
}

export default Login;