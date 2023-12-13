'use client';

import { FC, useState } from 'react';
import image from './logo.png';
import Image from 'next/image'
import styles from './styles.module.css';
import useForm from '../useForm';
import Buttons from '@/components/Buttons';
import { PasswordField } from '@/components/ButtonPassword/PasswordField';
import { library } from '@fortawesome/fontawesome-svg-core'
import { faEye, faEyeSlash } from '@fortawesome/free-solid-svg-icons'
library.add(faEye, faEyeSlash)
import type { AppProps } from 'next/app'

function MyApp({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}

  const RegisterPage: FC = () => {
  const initialFormState = { name: '', email: '' };
  const [form, handlerChangeForm, handlerResetForm] = useForm(initialFormState);
  const [password, setPassword] = useState<string>("");

  const handleSubmit = (event: React.FormEvent) => {
      event.preventDefault();
      console.log('Form Submitted:', form);
      handlerResetForm();
  }

  return (    
      <>
          <div className={styles.loginImage}>
              <Image
                  src={image}
                  width={832}
                  height={290}
                  alt="Logo" 
              />
          </div>
          <Buttons />
          <div className={styles.form}>
              <form onSubmit={handleSubmit}>
                  <div>
                      <label htmlFor="name" className={styles.label}>Name</label>
                      <br />
                      <input
                          type="text"
                          id="name"
                          name="name"
                          value={form.name}
                          onChange={handlerChangeForm}
                          className={styles.inputArea} />
                  </div>
                  <div>
                      <label htmlFor="email" className={styles.label}>Email</label>
                      <br />
                      <input
                          type="email"
                          id="email"
                          name="email"
                          value={form.email}
                          onChange={handlerChangeForm}
                          className={styles.inputArea} />
                  </div>
                  <label htmlFor="password" className={styles.label}>Password</label>
                  <br />
                  <PasswordField password={password} setPassword={setPassword} />
                  <br />
                  <button type="submit" className={styles.ButtonIniciar}>INICIAR</button>
              </form>
          </div>
      </>
  );
}

export default RegisterPage;
