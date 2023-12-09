"use client";

import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useState } from "react";
import image from "./logo.png";
import Image from 'next/image'
import styles from "./styles.module.css";
import { PasswordField } from "@/components/ButtonPassword/PasswordField";

const LoginPage = () => {
  const [errors, setErrors] = useState<string[]>([]);
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const router = useRouter();

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setErrors([]);

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
    <>
      <div className={styles.loginImage}>
        <Image
          src={image}
          width={832}
          height={290}
          alt="Logo" />
      </div>
      <div className={styles.Login}>
        <form onSubmit={handleSubmit}>
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
          <center>
          <div className={styles.ButtonIniciar}>
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
      </div>
    </>
  );
};
export default LoginPage;
