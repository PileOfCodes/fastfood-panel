export default defineEventHandler(async (event) => {
    const {public: {apiBase}} = useRuntimeConfig()
    const token = getCookie(event,'token')
    const query = getQuery(event)
    const page = query.hasOwnProperty('page') ? `?page=${query.page}` : '';

    try {
        const data = await $fetch(`${apiBase}${query.url}${page}`,{
            headers: {
                "Accept" : "application/json",
                "authorization" : `Bearer ${token}`
            }
        })
        return data.data
    } catch (error) {
        return error
    }
})