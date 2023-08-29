<template>
    <div class="overflow-x-auto sm:-mx-6 lg:-mx-4">
        <div class="inline-block min-w-full py-2 sm:px-6 lg:px-8">
            <div class="overflow-hidden">
                <table class="min-w-full text-right text-sm font-light">
                <thead class="border-b-2 border-slate-900 font-medium dark:border-neutral-500">
                    <tr>
                        <th scope="col" class="px-6 py-4">شماره سفارش</th>
                        <th scope="col" class="px-6 py-4">وضعیت</th>
                        <th scope="col" class="px-6 py-4">وضعیت پرداخت</th>
                        <th scope="col" class="px-6 py-4">مبلغ پرداختی</th>
                        <th scope="col" class="px-6 py-4">تاریخ ایجاد </th>
                        <th scope="col" class="px-6 py-4"> محصولات </th>
                    </tr>
                </thead>
                <tbody>
                    <tr v-for="order in props.orders" :key="order.id"
                    class="border-b transition duration-300 ease-in-out hover:bg-neutral-100 dark:border-neutral-500 dark:hover:bg-neutral-600">
                        <td class="whitespace-nowrap px-6 py-4 font-medium">{{ order.id }}</td>
                        <td class="whitespace-nowrap px-6 py-4">{{ order.status }}</td>
                        <td class="whitespace-nowrap px-6 py-4">{{ order.payment_status }}</td>
                        <td class="whitespace-nowrap px-6 py-4">{{ order.paying_amount }}</td>
                        <td class="whitespace-nowrap px-6 py-4">{{ order.created_at }}</td>
                        <td class="whitespace-nowrap px-6 py-4">
                            <button
                            type="button"
                            @click="openModal(order.id)"
                            class="border-2 ml-2 py-1 px-2 border-slate-800 rounded-md hover:bg-slate-800 hover:text-white transition-all duration-"
                            >
                            نمایش
                            </button>
                            <TransitionRoot appear :show="isOpen" as="template" v-if="index == order.id">
                                <Dialog as="div" @close="closeModal" class="relative z-10">
                                <TransitionChild
                                    as="template"
                                    enter="duration-300 ease-out"
                                    enter-from="opacity-0"
                                    enter-to="opacity-100"
                                    leave="duration-200 ease-in"
                                    leave-from="opacity-100"
                                    leave-to="opacity-0"
                                >
                                <div class="fixed inset-0 bg-black bg-opacity-25" />
                                </TransitionChild>

                                <div class="fixed inset-0 overflow-y-auto">
                                    <div class="flex min-h-full items-center justify-center p-4 text-center">
                                    <TransitionChild
                                        as="template"
                                        enter="duration-300 ease-out"
                                        enter-from="opacity-0 scale-95"
                                        enter-to="opacity-100 scale-100"
                                        leave="duration-200 ease-in"
                                        leave-from="opacity-100 scale-100"
                                        leave-to="opacity-0 scale-95"
                                    >
                                        <DialogPanel
                                        class="w-[800px] transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all float-right"
                                        >
                                            <DialogTitle
                                                as="h3"
                                                class="text-lg font-medium leading-6 text-gray-900 "
                                            >
                                                محصولات سفارش شماره {{ order.id }}
                                            </DialogTitle>
                                                <hr class="mt-4" />
                                                <div class="mt-2">
                                                    <table class="min-w-full">
                                                        <thead class="border-b-2 border-black">
                                                            <tr>
                                                                <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">
                                                                    محصول 
                                                                </th>
                                                                <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">
                                                                    نام
                                                                </th>
                                                                <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">
                                                                    قیمت
                                                                </th>
                                                                <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">
                                                                    تعداد 
                                                                </th>
                                                                <th scope="col" class="text-sm font-bold text-gray-900 px-6 py-4 text-left">
                                                                    قیمت کل
                                                                </th>
                                                            </tr>
                                                        </thead>
                                                        <tbody>
                                                            <tr class="border-b" v-for="product in order.order_items" :key="product.id">
                                                                <th class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                    <img src="/images/preloader.png" v-image="product.product_primary_image" width="80" height="80" />
                                                                </th>
                                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                    {{ product.product_name }}
                                                                </td>
                                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                    {{ numberFormat(product.price) }} تومان
                                                                </td>
                                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                    {{ product.quantity }}
                                                                </td>
                                                                <td class="text-sm text-gray-900 font-light px-6 py-4 whitespace-nowrap">
                                                                    {{ numberFormat(product.subtotal) }} تومان
                                                                </td>
                                                            </tr>
                                                        </tbody>
                                                    </table>
                                                </div>
                                                <div class="mt-4">
                                                    <button
                                                    type="button"
                                                    class="btn btn-primary"
                                                    @click="closeModal"
                                                    >
                                                    بستن
                                                    </button>
                                                </div>
                                            </DialogPanel>
                                    </TransitionChild>
                                    </div>
                                </div>
                                </Dialog>
                            </TransitionRoot>
                        </td>
                    </tr>
                </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import {
  TransitionRoot,
  TransitionChild,
  Dialog,
  DialogPanel,
  DialogTitle,
} from '@headlessui/vue'
const index = ref(null)
const isOpen = ref(false)
function openModal(id) {
    index.value = id
    isOpen.value = true
}
function closeModal() {
  isOpen.value = false
}
const props = defineProps(['orders'])

</script>