'use client';

import React, { FC } from 'react';
import useForm from '../useForm';
import styles from './styles.module.css'
import image from './logo.png';
import Image from 'next/image'

const LoginPage: React.FC = () => {
    const initialFormState = { name: '', email: '' };
    const [form, handlerChangeForm, handlerResetForm] = useForm(initialFormState);

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
                    <br />
                    <button type="submit" className={styles.ButtonIniciar}>INICIAR</button>
                </form>
            </div>
        </>
    );
}

export default LoginPage;
