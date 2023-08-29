<template>
    <button @click="deleteProduct" class="flex items-center btn btn-primary transition duration-150 ease-in-out">
        <div v-if="loading" class="tw-loading ml-3" role="status"></div>
        حذف
    </button>
</template>

<script setup>
import {useToast} from 'vue-toastification'

const toast = useToast()
const loading = ref(false)
const props = defineProps(['productId'])

async function deleteProduct() {
    try {
        loading.value = true
        await $fetch('/api/global', {
            method: "DELETE",
            Headers: useRequestHeaders(['cookie']),
            query: {url: `/products/${props.productId}`}
        })
        toast.warning("حذف محصول با موفقیت انجام شد")
        return navigateTo('/products')
    } catch (error) {
        
    }finally {
        loading.value = false
    }
}
</script>