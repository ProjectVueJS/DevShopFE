<template>
    <div id="header-admin" class="bg-blue-950 w-full flex flex-row py-2">
        <!-- <slot name="sidebarStatusBtn"></slot> -->
        <Button class="bg-blue-700 sm:hidden lg:hidden md:hidden block" label="" icon="pi pi-bars"
            @click="visible = true" :aria-controls="visible ? 'sbar' : null" :aria-expanded="visible"
            :class="$style.sidebarStatusBtn" />
        <div class="flex">
            <MenuDropdown />
            <!-- avata -->
        </div>

        <div id="mobile-sidebar">
            <Sidebar class="w-full" id="sbar" v-model:visible="visible" role="region">
                <div class="bg-blue-950 flex flex-col w-full h-full">
                    <div class="h-full flex flex-col w-full px-2 overflow-y-auto border-r">
                        <h2 class="text-3xl font-semibold text-center text-blue-800">Logo</h2>

                        <div class="flex flex-col justify-between mb-8 mt-3">
                            <aside>
                                <ul>
                                    <li>
                                        <a class="flex items-center px-4 py-2 text-white bg-[#5064aa] rounded-md "
                                            href="#">
                                            <i class="pi pi-home "></i>
                                            <span class="mx-4 font-medium lg:text-base md:text-sm">Dashboard</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a class="flex items-center px-4 py-2 mt-3 text-white rounded-md hover:bg-[#5064aa]"
                                            href="#">
                                            <i class="pi pi-th-large"></i>
                                            <span class="mx-4 font-medium lg:text-base md:text-sm">Product
                                                Management</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a class="flex items-center px-4 py-2 mt-3 text-white rounded-md hover:bg-[#5064aa]"
                                            href="#">
                                            <i class="pi pi-list"></i>
                                            <span class="mx-4 font-medium lg:text-base md:text-sm">Category
                                                Management</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a class="flex items-center px-4 py-2 mt-3 text-white rounded-md hover:bg-[#5064aa]"
                                            href="#">
                                            <i class="pi pi-users"></i>
                                            <span class="mx-4 font-medium lg:text-base md:text-sm">Customer
                                                Management</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a class="flex items-center px-4 py-2 mt-3 text-white rounded-md hover:bg-[#5064aa]"
                                            href="#">
                                            <i class="pi pi-receipt"></i>
                                            <span class="mx-4 font-medium lg:text-base md:text-sm">Order
                                                Management</span>
                                        </a>
                                    </li>

                                    <li>
                                        <a class="flex items-center px-4 py-2 mt-3 text-white rounded-md hover:bg-[#5064aa]"
                                            href="#">
                                            <i class="pi pi-cog"></i>
                                            <span class="mx-4 font-medium lg:text-base md:text-sm">Settings</span>
                                        </a>
                                    </li>
                                </ul>

                            </aside>
                        </div>
                        <div class="w-full flex justify-center flex-grow shadow shadow-slate-200 "
                            @click="visible = false">
                            <span class="block place-self-center text-gray-300 text-sm">Hiden Menu</span>
                        </div>

                    </div>
                </div>
            </Sidebar>
        </div>
    </div>
</template>

<script setup>
import { ref } from "vue";
import Sidebar from 'primevue/sidebar';
import Button from "primevue/button"
import MenuDropdown from '@/common/MenuDropdown';
const visible = ref(false);
</script>


<script>
export default {
    name: 'HeaderAdmin',
    components: {
        MenuDropdown,
    }
}
</script>

<style module lang="scss">
.sidebarStatusBtn {
    padding: 5px !important;
    background: red !important;
}
</style>