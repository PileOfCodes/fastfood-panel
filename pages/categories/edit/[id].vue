<template>
    <div>
        <span>ویرایش دسته بندی</span>
    </div>
    <hr class="my-4">
    <FormKit type="form" @submit="edit" :incomplete-message="false" :actions="false">
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
                :value="category.name"
                :validation-messages="{required: 'فیلد نام الزامی است'}"
                messages-class="text-red-600 pt-2"
                />
            </div>
            <div class="flex flex-col">
                    <FormKit type="textarea" rows="5" name="description" id="description" label="توضیحات"
                        label-class="form-label" input-class="form-control" messages-class="form-text text-danger"
                        validation="required" :value="category.description" :validation-messages="{ required: 'فیلد توضیحات الزامیست' }" 
                    />
            </div>
        </div>
        <FormKit type="submit" input-class="flex mt-4 items-center btn btn-primary transition duration-150 ease-in-out">
            <div v-if="loading" class="tw-loading ml-3" role="status"></div>
            ویرایش 
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
const route = useRoute()

const {data: category} = await useFetch('/api/global',{
    headers: useRequestHeaders(['cookie']),
    query: {url: `/categories/${route.params.id}`}
})

async function edit(formData) {
    try {
        loading.value = true
        errors.value = []
        await $fetch("/api/global",{
            method: "PUT",
            body: formData,
            query: {url: `/categories/${category.value.id}`}
        })
        toast.success("ویرایش دسته بندی با موفقیت انجام شد")
        return navigateTo('/categories')
    } catch (error) {
        errors.value = Object.values(error.data.data.message).flat()
    }finally{
        loading.value = false
    }
}

</script>