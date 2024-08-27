import("./views/public/styles/main.scss")
import { handleSubmit } from "./views/js/handleSubmit"


export { handleSubmit }
document.addEventListener('DOMContentLoaded', function () {
    const errorElement = document.getElementById('error');

    if (errorElement && errorElement.innerText !== '') {
        errorElement.classList.remove('hidden');
        setTimeout(() => {
            errorElement.classList.add('hidden');
        }, 3500);
    }
});
