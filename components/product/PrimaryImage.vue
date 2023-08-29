<template>
    <div class="flex flex-col">
        <div class="relative" v-if="proImage">
            <Icon @click="removeImage" class="absolute cursor-pointer transition-all duration-200 bg-white border border-red-400" size="42" color="red" name="ci:close-big" />
            <img :src="proImage" width="350" height="220" alt="primary image">
        </div>
        <div v-else>
            <label for="productImage" class="form-label">تصویر اصلی</label>
            <div class="relative">
                <input type="file" @change="showImage" :disabled="loading" class="form-control px-3 py-1.5 text-base 
                font-normal text-gray-700 bg-white bg-clip-padding border 
                border-solid border-gray-300 rounded transition ease-in-out" id="productImage">
                <div v-if="loading" class="tw-loading absolute left-12 ml-3" role="status"></div>
            </div>
        </div>
    </div>
</template>

<script setup>
const props = defineProps({
    primaryImage : {
        type : String,
        default : null
    }
})
const emit = defineEmits(['setPrimaryImage'])
const proImage = ref(props.primaryImage)
const loading = ref(false)
function showImage(el) {
    loading.value = true
    const reader = new FileReader()
    reader.readAsDataURL(el.target.files[0])
    reader.onloadend = () => {
        proImage.value = reader.result.toString()
        loading.value = false
    }

    emit('setPrimaryImage', el.target.files[0])
}

function removeImage() {
    proImage.value = null
    emit('setPrimaryImage', null)
}
</script>