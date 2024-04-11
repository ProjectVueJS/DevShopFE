<script setup>
import SideBar from './SideBar'
import HeaderAdmin from "./Header"
// import Button from "primevue/button"

</script>

<template>
    <div id="admin-layout" class="flex lg:flex-row md:flex-row sm:flex-row flex-col">
        <SideBar />
        <div class="bg-green-600 w-full">
            <HeaderAdmin />
        </div>
        <!-- <slot name="template"></slot> -->
    </div>
</template>

<script>

export default {
    name: 'LayoutAdmin'
}
</script>