<script setup>
import SideBar from './SideBar'
import HeaderAdmin from "./Header"
// import Button from "primevue/button"

</script>

<template>
    <div id="admin-layout" class="flex lg:flex-row md:flex-row sm:flex-row flex-col">
        <SideBar />
        <div class="bg-green-600 w-full">
            <HeaderAdmin>
                <template #sidebarStatusBtn>
                    <!-- <Button class="bg-blue-700 sm:hidden lg:hidden md:hidden block" label="" icon="pi pi-bars"
                        @click="visible = true" :aria-controls="visible ? 'sbar' : null" :aria-expanded="visible"
                        :class="$style.sidebarStatusBtn" /> -->
                        <h2>2</h2>
                </template>
            </HeaderAdmin>
        </div>
        <!-- <slot name="template"></slot> -->
    </div>
</template>

<script>

export default {
    name: 'LayoutAdmin'
}
</script>