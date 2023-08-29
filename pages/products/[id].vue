<template>
    <div class="flex justify-between">
        <div>
            محصول {{ product.name }}
        </div>
        <ProductDelete  :productId="product.id" />
    </div>
    <hr class="my-4">
    <div>
        <div class="flex items-center justify-center my-8">
            <img src="/images/preloader.png" v-image="product.primary_image" width="350" height="220" alt="primary image">
        </div>
        <div class="flex flex-wrap gap-4">
            <div class="flex flex-col">
                <label class="form-label">نام</label>
                <input type="text" 
                class="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:ring-4 focus:ring-gray-300 focus:outline-none" 
                disabled 
                :placeholder="product.name"
                >
            </div>
            <div class="flex flex-col">
                <label class="form-label">دسته بندی</label>
                <input type="text" 
                class="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:ring-4 focus:ring-gray-300 focus:outline-none" 
                disabled 
                :placeholder="product.category"
                >
            </div>
            <div class="flex flex-col">
                <label class="form-label">وضعیت</label>
                <input type="text" 
                class="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:ring-4 focus:ring-gray-300 focus:outline-none" 
                disabled 
                :placeholder="product.status"
                >
            </div>
            <div class="flex flex-col">
                <label class="form-label">قیمت</label>
                <input type="text" 
                class="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:ring-4 focus:ring-gray-300 focus:outline-none" 
                disabled 
                :placeholder="product.price"
                >
            </div>
            <div class="flex flex-col">
                <label class="form-label">تعداد</label>
                <input type="text" 
                class="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:ring-4 focus:ring-gray-300 focus:outline-none" 
                disabled 
                :placeholder="product.quantity"
                >
            </div>
            <div class="flex flex-col">
                <label class="form-label">قیمت حراجی</label>
                <input type="text" 
                class="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:ring-4 focus:ring-gray-300 focus:outline-none" 
                disabled 
                :placeholder="product.sale_price"
                >
            </div>
            <div class="flex flex-col">
                <label class="form-label">تاریخ شروع حراجی</label>
                <input type="text" 
                class="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:ring-4 focus:ring-gray-300 focus:outline-none" 
                disabled 
                :placeholder="product.date_on_sale_from_jalali"
                >
            </div>
            <div class="flex flex-col">
                <label class="form-label">تاریخ پایان حراجی</label>
                <input type="text" 
                class="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:ring-4 focus:ring-gray-300 focus:outline-none" 
                disabled 
                :placeholder="product.date_on_sale_to_jalali"
                >
            </div>
            <div class="flex flex-col">
                <label class="form-label">توضیحات</label>
                <input type="textarea" 
                rows="5"
                class="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:ring-4 focus:ring-gray-300 focus:outline-none" 
                disabled 
                :value="product.description"
                >
            </div>
            <div class="flex justify-center gap-2">
                <img src="/images/preloader.png" v-for="image in product.images" v-image="image.image" width="350" height="220" :alt="`image ${product.id}`">
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    middleware: 'auth'
})

const route = useRoute()

const {data : product} = await useFetch('/api/global', {
    query: {url: `/products/${route.params.id}`},
    headers: useRequestHeaders(['cookie'])
})

</script>