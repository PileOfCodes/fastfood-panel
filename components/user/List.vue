<template>
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-4">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
                <table class="min-w-full text-right text-sm font-light">
                <thead class="border-b-2 border-slate-900 font-medium dark:border-neutral-500">
                    <tr>
                        <th scope="col" class="px-6 py-4">نام</th>
                        <th scope="col" class="px-6 py-4">ایمیل</th>
                        <th scope="col" class="px-6 py-4">شماره تلفن</th>
                        <th scope="col" class="px-6 py-4">تاریخ عضویت</th>
                        <th scope="col" class="px-6 py-4">عملیات</th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="user in props.users" :key="user.id"
                    class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">{{ user.name }}</td>
                        <td class="whitespace-nowrap px-6 py-4">{{ user.email }}</td>
                        <td class="whitespace-nowrap px-6 py-4">{{ user.cellphone }}</td>
                        <td class="whitespace-nowrap px-6 py-4">{{ user.created_at }}</td>
                        <td class="whitespace-nowrap px-6 py-4">
                            <NuxtLink :to="`/users/${user.id}`"
                            class="border-2 ml-2 py-1 px-2 border-slate-800 rounded-md hover:bg-slate-800 hover:text-white transition-all duration-200">نمایش</NuxtLink>
                            <NuxtLink :to="`/users/edit/${user.id}`" class="border-2 py-1 px-2 border-slate-800 rounded-md bg-slate-800 text-white">ویرایش</NuxtLink>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>

const props = defineProps(['users'])

</script>