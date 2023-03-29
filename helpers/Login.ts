export const IniciarSesion = async (login:any) => {
    try {
        const fetchResponse = await fetch(
            `${URL}/sesiones/iniciar`,
            {
                method: "POST",
                credentials: "include",
                body: new URLSearchParams(login),
            }
        );
        const data = await fetchResponse.json();
        return data;
    } catch (error) {
        return error;
    }
};