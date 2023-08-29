<template>
    <div class="bg-slate-900 w-full py-4 px-12 text-white flex justify-between items-center">
        <div class="text-xl font-bold">
            <span>PileOfCodes</span>
        </div>
        <div class="flex gap-6">
            <span>{{ authUser.name }}</span>
            <button @click="logout">خروج</button>
        </div>
    </div>
</template>

<script setup>
import {useToast} from 'vue-toastification'
const {authUser} = useAuth()
const toast = useToast()
async function logout() {
    const {date} = await useFetch("/api/auth/logout", {
        method: "POST"
    })
    authUser.value = null
    toast.warning("از سیستم خارج شدید")
    return navigateTo("/auth/login")
}
</script>