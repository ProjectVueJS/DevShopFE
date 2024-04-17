<script setup>
import SideBar from './SideBar'
import HeaderAdmin from "./Header"
// import Button from "primevue/button"

</script>

<template>
    <div id="admin-layout" class="flex lg:flex-row md:flex-row sm:flex-row flex-col">
        <SideBar />
        <div class="bg-blue-950 w-full">
            <HeaderAdmin />
            <div id="main-content" class="bg-white overflow-hidden overflow-y-auto md:rounded-tl-lg lg:rounded-tl-lg" :style="{height: 'calc(100vh - 56px)'}">

            </div>
        </div>
        <!-- <slot name="template"></slot> -->
    </div>
</template>

<script>

export default {
    name: 'LayoutAdmin'
}
</script>