"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import image from "./logo.png";
import Image from 'next/image'
import styles from "./styles.module.css";
import Buttons from "@/components/Buttons";


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
            type="text"
            placeholder=""
            name="name"
            className="form-control mb-2"
            value={name}
            onChange={(event) => setName(event.target.value)} />
          <h2>Email</h2>
          <input
            type="email"
            placeholder=""
            name="email"
            className="form-control mb-2"
            value={email}
            onChange={(event) => setEmail(event.target.value)} />
          <h2>Contraseña</h2>
          <input
            type="password"
            placeholder=""
            name="password"
            className="form-control mb-2"
            value={password}
            onChange={(event) => setPassword(event.target.value)} />
          <br />
          <div className={styles.ButtonIniciar}>
            <button
              type="submit"
              className="btn btn-primary text-white"
            >
              INICIAR
            </button>
          </div>
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
