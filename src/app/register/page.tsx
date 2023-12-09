"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import image from "./logo.png";
import Image from 'next/image'
import styles from "./styles.module.css";
import Buttons from "@/components/Buttons";
import { PasswordField } from "@/components/ButtonPassword/PasswordField";
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
library.add(faEye, faEyeSlash)
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}



const RegisterPage = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

    const res = await fetch(
      `${process.env.NEXT_PUBLIC_BACKEND_URL}/auth/register`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          password,
        }),
      }
    );

    const responseAPI = await res.json();

    if (!res.ok) {
      setErrors(responseAPI.message);
      return;
    }

    const responseNextAuth = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });

    if (responseNextAuth?.error) {
      setErrors(responseNextAuth.error.split(","));
      return;
    }
    router.push("/dashboard");
  };
  
  return (
    <><div className={styles.registerImage}>
      <Image
        src={image}
        width={832}
        height={290}
        alt="Logo" />
    </div>
    <Buttons />
    <div className={styles.Register}>
        <form onSubmit={handleSubmit}>
          <h2>Nombre</h2>
          <input
                value={name}
                type="name"
                className={styles.inputArea}
                onChange={(e) => setName(e.target.value)}
                />
          <h2>Email</h2>
          <input
                  value={email}
                  type="email"
                  className={styles.inputArea}
                  onChange={(e) => setEmail(e.target.value)}
                />
          <h2>Contraseña</h2>
            <PasswordField password={password} setPassword={setPassword} />
          <br />
          <center><div className={styles.ButtonIniciar}>
            <button
              type="submit"
              className="btn btn-primary text-white"
            >
              INICIAR
            </button>
          </div>
          </center>
        </form>

        {errors.length > 0 && (
          <div className="alert alert-danger mt-2">
            <ul className="mb-0">
              {errors.map((error) => (
                <li key={error}>{error}</li>
              ))}
            </ul>
          </div>
        )}
      </div></>
    
  );
};
export default RegisterPage;
