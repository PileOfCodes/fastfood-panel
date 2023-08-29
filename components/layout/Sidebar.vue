<template>
    <div class="w-60 h-screen shadow-md bg-white py-1 px-1 ">
        <ul class="relative">
            <li class="relative">
            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <Icon size="19" name="bi:grid" />
                <NuxtLink class="mr-2" :class="{'tw-active': $route.path == '/'}" to="/">داشبورد</NuxtLink>
            </a>
            </li>
            <li class="relative">
            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <Icon size="19" name="bi:people" />
                <NuxtLink class="mr-2" :class="{'tw-active': $route.path.includes('/users')}" to="/users">کاربران</NuxtLink>
            </a>
            </li>
            <li class="relative">
            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <Icon size="19" name="bi:box-seam" />
                <NuxtLink class="mr-2" :class="{'tw-active': $route.path.includes('/products')}" to="/products">محصولات</NuxtLink>
            </a>
            </li>
            <li class="relative">
            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <Icon size="19" name="bi:grid-3x3-gap" />
                <NuxtLink class="mr-2" :class="{'tw-active': $route.path.includes('/categories')}" to="/categories">دسته بندی ها</NuxtLink>
            </a>
            </li>
            <li class="relative">
            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <Icon size="19" name="bi:basket" />
                <NuxtLink class="mr-2" :class="{'tw-active': $route.path.includes('/orders')}" to="/orders"> سفارشات </NuxtLink>
            </a>
            </li>
            <li class="relative">
            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <Icon size="19" name="bi:currency-dollar" />
                <NuxtLink class="mr-2" :class="{'tw-active': $route.path.includes('/transactions')}" to="/transactions"> تراکنش ها </NuxtLink>
            </a>
            </li>
            <li class="relative">
            <a class="flex items-center text-sm py-4 px-6 h-12 overflow-hidden text-gray-700 text-ellipsis whitespace-nowrap rounded hover:text-gray-900 hover:bg-gray-100 transition duration-300 ease-in-out" href="#!" data-mdb-ripple="true" data-mdb-ripple-color="dark">
                <Icon size="19" name="bi:percent" />
                <span>Sidenav link 3</span>
            </a>
            </li>
        </ul>
    </div>
</template>