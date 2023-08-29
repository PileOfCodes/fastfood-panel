<template>
    <div>
        <span>ایجاد کاربر</span>
    </div>
    <hr class="my-4">
    <FormKit type="form" @submit="createDemand" :incomplete-message="false" :actions="false">
        <div v-if="errors.length > 0" class="bg-red-100 text-red-600 p-2 rounded-md mt-4">
            <ul>
                <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
            </ul>
        </div>
        <div class="flex flex-wrap gap-4">
            <div class="flex flex-col">
                <FormKit type="text" name="name" id="name" label=" نام" 
                label-class="form-label inline-block mb-2 text-gray-700"
                input-class="form-control block w-[400px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:ring-4 focus:ring-gray-300 focus:outline-none"
                validation="required"
                :validation-messages="{required: 'فیلد نام الزامی است'}"
                messages-class="text-red-600 pt-2"
                />
            </div>
            <div class="flex flex-col">
                <FormKit type="text" name="email" id="email" label=" ایمیل" 
                label-class="form-label inline-block mb-2 text-gray-700"
                input-class="form-control block w-[400px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:ring-4 focus:ring-gray-300 focus:outline-none"
                validation="required"
                :validation-messages="{required: 'فیلد ایمیل الزامی است'}"
                messages-class="text-red-600 pt-2"
                />
            </div>
            <div class="flex flex-col">
                <FormKit type="text" name="cellphone" id="cellphone" label=" شماره تماس" 
                label-class="form-label inline-block mb-2 text-gray-700"
                input-class="form-control block w-[400px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:ring-4 focus:ring-gray-300 focus:outline-none"
                :validation="[['required'],['matches', /^(\+98|0)?9\d{9}$/]]"
                :validation-messages="{required: 'فیلد شماره تماس الزامی است', matches: 'فیلد شماره تماس معتبر نمی باشد'}"
                messages-class="text-red-600 pt-2"
                />
            </div>
            <div class="flex flex-col">
                <FormKit type="password" name="password" id="password" label=" پسورد" 
                label-class="form-label inline-block mb-2 text-gray-700"
                input-class="form-control block w-[400px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:ring-4 focus:ring-gray-300 focus:outline-none"
                validation="required"
                :validation-messages="{required: 'فیلد پسورد الزامی است'}"
                messages-class="text-red-600 pt-2"
                />
            </div>
        </div>
        <FormKit type="submit" input-class="flex mt-4 items-center btn btn-primary transition duration-150 ease-in-out">
            <div v-if="loading" class="tw-loading ml-3" role="status"></div>
            ایجاد 
        </FormKit>
    </FormKit>
</template>

<script setup>
import {useToast} from "vue-toastification"

definePageMeta({
    middleware: 'auth'
})

const errors = ref([])
const toast = useToast()
const loading = ref(false)

async function createDemand(formData) {
    try {
        loading.value = true
        errors.value = []
        await $fetch("/api/global",{
            method: "POST",
            body: formData,
            query: {url: '/users'}
        })
        toast.success("ایجاد کاربر با موفقیت انجام شد")
        return navigateTo('/users')
    } catch (error) {
        errors.value = Object.values(error.data.data.message).flat()
    }finally{
        loading.value = false
    }
}

</script>