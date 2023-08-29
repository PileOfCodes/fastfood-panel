<template>
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-4">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
                <table class="min-w-full text-right text-sm font-light">
                <thead class="border-b-2 border-slate-900 font-medium dark:border-neutral-500">
                    <tr>
                        <th scope="col" class="px-6 py-4">شماره سفارش</th>
                        <th scope="col" class="px-6 py-4">وضعیت</th>
                        <th scope="col" class="px-6 py-4"> مبلغ</th>
                        <th scope="col" class="px-6 py-4"> شماره تراکنش</th>
                        <th scope="col" class="px-6 py-4">تاریخ ایجاد </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="trans in props.transactions" :key="trans.id"
                    class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">{{ trans.order_id }}</td>
                        <td class="whitespace-nowrap px-6 py-4">{{ trans.status }}</td>
                        <td class="whitespace-nowrap px-6 py-4">{{ numberFormat(trans.amount) }}</td>
                        <td class="whitespace-nowrap px-6 py-4">{{ trans.trans_id }}</td>
                        <td class="whitespace-nowrap px-6 py-4">{{ trans.created_at }}</td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps(['transactions'])

</script>