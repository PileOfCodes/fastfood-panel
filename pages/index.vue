<template>
    <div>dashboard</div>
    <hr class="my-4">
    <ClientOnly>
        <Chart :data="chartData" />
    </ClientOnly>
</template>

<script setup>
definePageMeta({
    middleware: 'auth'
})

const {data: chartData} = await useFetch("/api/global", {
    query: {url: '/transactions/chart'},
    headers: useRequestHeaders(['cookie'])
})
</script>