import axios from 'axios';

export function useHandleSubmitFormAjouts(POST_URL) {
    const handleSubmitForm = (formData) => {
        axios.post(POST_URL, formData)
            .then((res) => {
                console.log(res.data);
            })
            .catch(err => console.log(err));
    }
    return handleSubmitForm;
}