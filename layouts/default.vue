<template>
    <LayoutHeader  />
    <div class="flex">
        <LayoutSidebar  />
        <main class="flex flex-col p-6">
            <div class="w-[1100px]">
                <slot />
            </div>
        </main> 
    </div>
</template>