import { useState } from 'react';
import axios from 'axios';

export function useHandleSubmitFormAjouts(POST_URL) {
    const [status, setStatus] = useState('');
    const clearStatus = () => setStatus('');
    const handleSubmitForm = (formData) => {
        axios.post(POST_URL, formData)
            .then((res) => {
                setStatus('success');
            })
            .catch(err => setStatus('error'));
    }
    return { handleSubmitForm, status, clearStatus };
}