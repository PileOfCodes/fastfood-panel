<template>
    <div>
        <span>ایجاد محصول</span>
    </div>
    <hr class="my-4">
    <ClientOnly fallback="در حال بارگذاری...">
        <FormKit type="form" @submit="create" :incomplete-message="false" :actions="false">
            <div v-if="errors.length > 0" class="bg-red-100 text-red-600 p-2 rounded-md mt-4">
                <ul>
                    <li v-for="(error,index) in errors" :key="index">{{ error }}</li>
                </ul>
            </div>
            <div class="flex items-center justify-center my-8">
                <ProductPrimaryImage @set-primary-image="(image) => primaryImage = image" />
            </div>
            <div class="flex flex-wrap gap-4">
                <div class="flex flex-col">
                    <FormKit type="text" name="name" id="name" label=" نام محصول" 
                    label-class="form-label inline-block mb-2 text-gray-700"
                    input-class="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:ring-4 focus:ring-gray-300 focus:outline-none"
                    validation="required"
                    :validation-messages="{required: 'فیلد نام محصول الزامی است'}"
                    messages-class="text-red-600 pt-2"
                    />
                </div>
                <div class="flex flex-col">
                    <FormKit type="select" name="category_id" id="category_id" label=" دسته بندی" 
                        label-class="form-label inline-block mb-2 text-gray-700"
                        input-class="block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:ring-4 focus:ring-gray-300 focus:outline-none"
                        validation="required" :validation-messages="{required: 'فیلد دسته بندی الزامی است'}"
                        messages-class="text-red-600 pt-2">
                        <option v-for="category in categories.categories" :key="category.id" :value="category.id">{{ category.name }}</option>
                    </FormKit>
                </div>
                <div class="flex flex-col">
                    <FormKit type="select" name="status" id="status" label=" وضعیت" 
                        label-class="form-label inline-block mb-2 text-gray-700"
                        input-class="block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:ring-4 focus:ring-gray-300 focus:outline-none">
                        <option value="1" selected>فعال</option>
                        <option value="0"> غیر فعال</option>
                    </FormKit>
                </div>
                <div class="flex flex-col">
                    <FormKit type="text" name="price" id="price" label=" قیمت" 
                    label-class="form-label inline-block mb-2 text-gray-700"
                    input-class="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:ring-4 focus:ring-gray-300 focus:outline-none"
                    validation="required|number"
                    :validation-messages="{required: 'فیلد قیمت الزامی است', number: 'مقدار قیمت باید عددی باشد'}"
                    messages-class="text-red-600 pt-2"
                    />
                </div>
                <div class="flex flex-col">
                    <FormKit type="text" name="quantity" id="quantity" label=" تعداد" 
                    label-class="form-label inline-block mb-2 text-gray-700"
                    input-class="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:ring-4 focus:ring-gray-300 focus:outline-none"
                    validation="required|number"
                    :validation-messages="{required: 'فیلد تعداد الزامی است', number: 'مقدار تعداد باید عددی باشد'}"
                    messages-class="text-red-600 pt-2"
                    />
                </div>
                <div class="flex flex-col">
                    <FormKit type="text" name="sale_price" id="sale_price" label=" قیمت حراجی" 
                    label-class="form-label inline-block mb-2 text-gray-700"
                    input-class="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:ring-4 focus:ring-gray-300 focus:outline-none"
                    validation="required|number"
                    :validation-messages="{number: 'مقدار قیمت حراجی باید عددی باشد'}"
                    messages-class="text-red-600 pt-2"
                    />
                </div>
                <div class="flex flex-col">
                    <label for="floatingInput" class="form-label inline-block mb-2 text-gray-700">تاریخ شروع حراجی</label>
                    <date-picker v-model="saleDateStart" type="datetime"  format="YYYY-MM-DD HH:mm:ss" display-format="HH:mm jYYYY-jMM-jDD" />
                </div>
                <div class="flex flex-col">
                    <label for="floatingInput" class="form-label inline-block mb-2 text-gray-700">تاریخ پایان حراجی</label>
                    <date-picker v-model="saleDateEnd" type="datetime"  format="YYYY-MM-DD HH:mm:ss" display-format="HH:mm jYYYY-jMM-jDD" />
                </div>
                <div class="flex justify-center">
                    <div class="mb-3 w-96">
                        <label
                        for="formFileMultiple"
                        class="mb-2 inline-block text-neutral-700 dark:text-neutral-200"
                        >تصاویر محصول</label
                        >
                        <input
                        class="relative m-0 block w-full min-w-0 flex-auto cursor-pointer rounded border border-solid border-neutral-300 bg-white bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out file:-mx-3 file:-my-1.5 file:cursor-pointer file:overflow-hidden file:rounded-none file:border-0 file:border-solid file:border-inherit file:bg-neutral-100 file:px-3 file:py-1.5 file:text-neutral-700 file:transition file:duration-150 file:ease-in-out file:[margin-inline-end:0.75rem] file:[border-inline-end-width:1px] hover:file:bg-neutral-200 focus:border-primary focus:bg-white focus:text-neutral-700 focus:shadow-[0_0_0_1px] focus:shadow-primary focus:outline-none dark:bg-transparent dark:text-neutral-200 dark:focus:bg-transparent"
                        type="file"
                        @change="importImages"
                        id="formFileMultiple"
                        multiple />
                    </div>
                </div>
                <div class="flex flex-col">
                    <FormKit type="textarea" rows="5" name="description" id="description" label="توضیحات"
                        label-class="form-label" input-class="form-control" messages-class="form-text text-danger"
                        validation="required" :validation-messages="{ required: 'فیلد توضیحات الزامیست' }" 
                    />
                </div>
            </div>
            <FormKit type="submit" input-class="flex mt-4 items-center btn btn-primary transition duration-150 ease-in-out">
                <div v-if="loading" class="tw-loading ml-3" role="status"></div>
                ایجاد 
            </FormKit>
        </FormKit>
    </ClientOnly>
</template>


<script setup>
import {useToast} from "vue-toastification"

definePageMeta({
    middleware: 'auth'
})

const errors = ref([])
const toast = useToast()
const loading = ref(false)
const primaryImage = ref(null)
const saleDateStart = ref(null)
const saleDateEnd = ref(null)
const images = ref(null)

const {data: categories} = await useFetch('/api/global',{
    headers: useRequestHeaders(['cookie']),
    query: {url: '/categories'}
})

function importImages(el) {
    images.value = el.target.files
}
async function create(data) {
    
    if(!primaryImage.value) {
        toast.error("فیلد تصویر اصلی الزامی است")
        return;
    }
    const formData = new FormData()
    for(let index = 0; index < images.value.length; index++) {
        formData.append('images', images.value[index])
    }
    formData.append('primary_image', primaryImage.value)
    formData.append('name', data.name)
    formData.append('category_id', data.category_id)
    formData.append('description', data.description)
    formData.append('price', data.price)
    formData.append('sale_price', data.sale_price)
    formData.append('status', data.status)
    formData.append('quantity', data.quantity)
    formData.append('date_on_sale_from', saleDateStart.value)
    formData.append('date_on_sale_to', saleDateEnd.value)
    try {
        loading.value = true
        errors.value = []
        await $fetch("/api/products/create",{
            method: "POST",
            body: formData
        })
        toast.success("ایجاد محصول با موفقیت انجام شد")
        return navigateTo('/products')
    } catch (error) {
        console.log(error.data);
        errors.value = Object.values(error.data.data.message).flat()
    }finally{
        loading.value = false
    }
}

</script>