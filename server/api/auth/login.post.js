export default defineEventHandler(async (event) => {
    const body = await readBody(event)
    const {public: {apiBase}} = useRuntimeConfig()

    try {
        const data = await $fetch(`${apiBase}/auth/login`,{
            method: "POST",
            body,
            headers: {
                "Accept": "application/json"
            }
        })

        setCookie(event, 'token', data.data.token, {
            httpOnly: true,
            secure: true,
            maxAge: 30 * 24 * 60 * 60,
            path: '/'
        })
        return "login success"
    } catch (error) {
        return error
    }
})