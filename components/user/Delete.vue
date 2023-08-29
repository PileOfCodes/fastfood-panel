<template>
    <button @click="deleteUser" class="flex items-center btn btn-primary transition duration-150 ease-in-out">
        <div v-if="loading" class="tw-loading ml-3" role="status"></div>
        حذف
    </button>
</template>

<script setup>
import {useToast} from 'vue-toastification'

const toast = useToast()
const loading = ref(false)
const props = defineProps(['userId'])

async function deleteUser() {
    try {
        loading.value = true
        await $fetch('/api/global', {
            method: "DELETE",
            Headers: useRequestHeaders(['cookie']),
            query: {url: `/users/${props.userId}`}
        })
        toast.warning("حذف کاربر با موفقیت انجام شد")
        return navigateTo('/users')
    } catch (error) {
        
    }finally {
        loading.value = false
    }
}
</script>