"use client"
import { useState } from "react"

export default function SignIn() {
    const [token, setToken] = useState<string>()
    const [email, setEmail] = useState<string>("")
    const [password, setPassword] = useState<string>("")

    const onSubmit = async () => {
        const url = "http://localhost:8080/login";
        const options = {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ 
                email: email,
                password: password
            })
        };
        try {
            const response = await fetch(url, options);
            const jsondata = await response.json();
            console.log(jsondata)
            setToken(jsondata["token"]);
        } catch (e) {
            return e;
        }
    }

    return (
      <div>
        <form onSubmit={onSubmit}>
            <label>e-mail:
                <input 
                    value={email}
                    onChange={e => setEmail(e.target.value)}>
                </input>
            </label>
            <label>password:
                <input 
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    type="password">
                </input>
            </label>
            
        </form>
        <button onClick={onSubmit}>Submit</button>
        {token}
      </div>
    );
  }