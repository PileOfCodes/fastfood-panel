<template>
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-4">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
                <table class="min-w-full text-right text-sm font-light">
                <thead class="border-b-2 border-slate-900 font-medium dark:border-neutral-500">
                    <tr>
                        <th scope="col" class="px-6 py-4">تصویر</th>
                        <th scope="col" class="px-6 py-4">نام</th>
                        <th scope="col" class="px-6 py-4">دسته بندی</th>
                        <th scope="col" class="px-6 py-4"> قیمت</th>
                        <th scope="col" class="px-6 py-4"> تعداد</th>
                        <th scope="col" class="px-6 py-4"> وضعیت</th>
                        <th scope="col" class="px-6 py-4">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="product in props.products" :key="product.id"
                    class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">
                            <img src="/images/preloader.png" width="80" height="53" v-image="product.primary_image" alt="">
                        </td>
                        <td class="whitespace-nowrap px-6 py-4 font-medium">{{ product.name }}</td>
                        <td class="whitespace-nowrap px-6 py-4">{{ product.category }}</td>
                        <td class="whitespace-nowrap px-6 py-4">{{ numberFormat(product.price) }}</td>
                        <td class="whitespace-nowrap px-6 py-4">{{ product.quantity }}</td>
                        <td class="whitespace-nowrap px-6 py-4">{{ product.status }}</td>
                        <td class="whitespace-nowrap px-6 py-4">
                            <NuxtLink :to="`/products/${product.id}`"
                            class="border-2 ml-2 py-1 px-2 border-slate-800 rounded-md hover:bg-slate-800 hover:text-white transition-all duration-200">نمایش</NuxtLink> 
                            <NuxtLink :to="`/products/edit/${product.id}`" class="border-2 py-1 px-2 border-slate-800 rounded-md bg-slate-800 text-white">ویرایش</NuxtLink>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['products'])

</script>