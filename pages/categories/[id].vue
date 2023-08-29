<template>
    <div class="flex justify-between">
        <div>
            دسته بندی {{ category.name }}
        </div>
        <CategoryDelete  :categoryId="category.id" />
    </div>
    <hr class="my-4">
    <div>
        <div class="flex flex-wrap gap-4">
            <div class="flex flex-col">
                <label class="form-label">نام</label>
                <input type="text" 
                class="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:ring-4 focus:ring-gray-300 focus:outline-none" 
                disabled 
                :placeholder="category.name"
                >
            </div>
            <div class="flex flex-col">
                <label class="form-label">توضیحات</label>
                <input type="textarea" 
                rows="5"
                class="form-control block w-[300px] px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700  focus:bg-white focus:ring-4 focus:ring-gray-300 focus:outline-none" 
                disabled 
                :value="category.description"
                >
            </div>
        </div>
    </div>
</template>

<script setup>

definePageMeta({
    middleware: 'auth'
})

const route = useRoute()

const {data : category} = await useFetch('/api/global', {
    query: {url: `/categories/${route.params.id}`},
    headers: useRequestHeaders(['cookie'])
})
</script>