<template>
    <div v-if="errors.length > 0" class="bg-red-100 text-red-600 p-2 rounded-md my-2">
        <ul>
            <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
        </ul>
    </div>
    <div class="flex justify-center items-center mt-12">
        <form @submit.prevent="login" class="flex flex-col border border-gray-300 p-5 rounded-md">
            <p class="text-center font-bold text-2xl p-6">ورود به پنل ادمین</p>
            <div class="flex flex-col py-2">
                <label for="email">ایمیل</label>
                <input type="text" v-model="formData.email" class="border border-gray-300 rounded-sm mt-2 p-1 w-[300px]" id="email">
            </div>
            <div class="flex flex-col py-4">
                <label for="password">گذر واژه</label>
                <input type="password" v-model="formData.password" class="border border-gray-300 rounded-sm mt-2 p-1 w-[300px]" id="password">
            </div>
            <div>
                <button type="submit" class="px-4 py-2 rounded-md hover:bg-slate-700 transition-all duration-150 bg-slate-900 text-white ">
                    <div v-if="loading" class="tw-loading ml-3" role="status"></div>
                    ورود
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import {useToast} from 'vue-toastification'
definePageMeta({
    layout: false,
    middleware: 'guest'
})
const toast = useToast()
const errors = ref([])
const {authUser} = useAuth()
const loading = ref(false)
const formData = reactive({
    email: '',
    password: ''
})

async function login() {
    if(formData.email === '' || formData.password === '') {
        toast.error("تمام موارد فرم ورود الزامی است")
        return
    }
    try {
        loading.value = true
        errors.value = []
        const user = await $fetch("/api/auth/login", {
            method: "POST",
            body: formData
        })
        authUser.value = user
        toast.success("وارد سیستم شدید")
        return navigateTo('/')
    } catch (error) {
        errors.value = Object.values(error.data.data.message).flat()
    }finally{
        loading.value = false
    }
}
</script>