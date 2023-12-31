import { useState, ChangeEvent } from 'react';

type FormState = { [key: string]: any };

const useForm = (initForm: FormState) => {
    const [form, setForm] = useState<FormState>(initForm);

    const handlerChangeForm = ({ target }: ChangeEvent<HTMLInputElement>) => {
        setForm({...form, [target.name]: target.value});
    }

    const handlerResetForm = () => {
        setForm(initForm);
    }

    return [form, handlerChangeForm, handlerResetForm];
}
export default useForm;