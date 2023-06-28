<template>
    <form @submit.prevent="submitForm">
        <div class="buttonBox">
            <input type="text" v-model="cityname" placeholder="（例：sapporo）">
            <button type="submit"><span class="fontawesome-01">SEARCH</span></button>
        </div>
    </form>
</template>

<script setup>
import { ref } from "vue"
const cityname = ref("")
const submitForm = () => {
    emits("submit-form", cityname.value)
}
const emits = defineEmits(["submit-form"])
</script>