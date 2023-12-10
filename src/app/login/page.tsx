'use client';

import React, { FC } from 'react';
import useForm from './useForm'; // Asume que useForm está en el mismo directorio
import styles from './styles.module.css'

const UserForm: FC = () => {
    const initialFormState = { name: '', email: '' };
    const [form, handlerChangeForm, handlerResetForm] = useForm(initialFormState);

    const handleSubmit = (event: React.FormEvent) => {
        event.preventDefault();
        console.log('Form Submitted:', form);
        handlerResetForm();
    }

    return (
        <form onSubmit={handleSubmit} className={styles.Form}>
            <div className={styles.Login}>
                <label htmlFor="name">Name:</label>
                <input 
                    type="text" 
                    id="name" 
                    name="name" 
                    value={form.name} 
                    onChange={handlerChangeForm} 
                />
            </div>
            <br />
            <div className={styles.Login}>
                <label htmlFor="email">Email:</label>
                <input 
                    type="email" 
                    id="email" 
                    name="email" 
                    value={form.email} 
                    onChange={handlerChangeForm} 
                />
            </div>
            <button type="iniciar" className={styles.ButtonIniciar}>INICIAR</button>
        </form>
    );
}

export default UserForm;
