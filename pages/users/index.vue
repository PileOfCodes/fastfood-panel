<template>
    <div class="flex justify-between items-center ">
        <span>کاربران</span>
        <div>
            <NuxtLink to="/users/create"
            class="border-2 py-1 px-4 border-slate-800 rounded-md hover:bg-slate-800 hover:text-white transition-all duration-200"> ایجاد کاربر</NuxtLink>
        </div>
    </div>
    <hr class="my-4">
    <UserList :users="data.users" />
    <div class="flex justify-center mt-2">
        <nav aria-label="Page navigation example">
            <ul class="flex list-style-none">
                <li class="page-item" :class="{active : link.active}" v-for="link in data.meta.links.slice(1,-1)" :key="link.label">
                    <button @click="paginate(link.label)" class="page-link relative block py-1.5 px-3 rounded outline-0 border-0 bg-transparent outline-none transition-all duration-300 mx-1 text-slate-800 shadow-lg">
                        {{ link.label }}
                    </button>
                </li>
            </ul>
        </nav>
    </div>

</template>

<script setup>

definePageMeta({
    middleware: 'auth'
})

const page = ref(0)
const {data, refresh} = await useFetch('/api/global', {
    headers: useRequestHeaders(['cookie']),
    query: {url: "/users", page: page}
})

function paginate(number)
{
    page.value = number
    refresh()
}

</script>