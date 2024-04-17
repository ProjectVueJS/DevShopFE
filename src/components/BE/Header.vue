<template>
    <div id="close-zone menu" class="fixed top-0 right-0 w-full h-full opacity-0 bg-green-500"
        @click="changeStatusMenuAvata" :class="{ 'hidden': !MenuAvata }">
    </div>

    <div id="header-admin" class="bg-blue-950 w-full flex flex-row px-2">
        <!-- <slot name="sidebarStatusBtn"></slot> -->
        <div class="flex w-full md:justify-end lg:justify-end sm:justify-end justify-between items-center">
            <Button class="sm:hidden lg:hidden md:hidden block text-base" label="" icon="pi pi-bars"
                @click="visible = true" :aria-controls="visible ? 'sbar' : null" :aria-expanded="visible"
                :class="$style.sidebarStatusBtn" />
            <div class="flex">
                <MenuNotifice />
                <div class="text-white flex items-center relative cursor-pointer">
                    <div class="flex items-center" @click="changeStatusMenuAvata">
                        <p class="px-2">
                            Admin
                            <i class="pi pi-angle-down cursor-pointer" @click="changeStatus" />

                        </p>
                        <img src="https://cdn.icon-icons.com/icons2/1429/PNG/512/icon-robots-6_98541.png"
                            class="rounded-full w-14 " alt="">
                    </div>
                    <!-- logo/account menu -->
                    <ul class="z-10 absolute top-full right-0 list-none p-2 rounded-md min-w-56 h-auto shadow-md border border-gray-200 bg-white"
                        :class="{ 'hidden': !MenuAvata, 'scale-in': scaleIn, 'scale-out': scaleOut }">
                        <li class="flex bg-white hover:bg-indigo-200 p-2 rounded-t-md text-gray-800 cursor-pointer">
                            My Account
                        </li>
                        <span class="w-full block border-t border-gray-200"></span>
                        <li class="flex bg-white hover:bg-indigo-200 p-2 rounded-b-md text-gray-800 cursor-pointer">
                            Logout
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <div id="mobile-sidebar">
            <Sidebar class="w-full" id="sbar" v-model:visible="visible" role="region">
                <div class="bg-blue-950 flex flex-col w-full h-full rounded-md pt-2">
                    <div class="h-full flex flex-col w-full px-2 overflow-y-auto border-r">
                        <div class="logo-admin bg-[#1c1536] rounded-md">
                            <img src="../../assets/imgs/app/dev-logo.png" class="h-14 object-contain mx-auto" alt="">
                        </div>

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
                            <span class="block place-self-center text-gray-100 text-sm opacity-25">Click close
                                menu</span>
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
import MenuNotifice from '@/components/BE/MenuNotifice';
const visible = ref(false);
</script>

<script>
export default {
    name: 'HeaderAdmin',
    components: {
        MenuNotifice,
    },
    data() {
        return {
            MenuAvata: false,
            scaleIn: false,
            scaleOut: false,
        }
    },
    methods: {
        changeStatusMenuAvata: function () {
            console.log('changeStatusMenuAvata');
            if (this.MenuAvata) {
                this.scaleOut = true
                this.scaleIn = false
                setTimeout(() => {
                    this.MenuAvata = false
                }, 500);
            } else {
                this.scaleOut = false
                this.MenuAvata = true
                this.scaleIn = true
            }
        },
    },
}
</script>

<style module>
.sidebarStatusBtn {
    padding: 4px 10px !important;
    text-align: center;
    background: white !important;
    width: 40px;
    height: 30px;
}
</style>
<style scoped>
.scale-in {
    animation: scaleIn 0.5s forwards;
    transform-origin: top right;

}

.scale-out {
    animation: scaleOut 0.5s forwards;
    transform-origin: top right;
}

@media only screen and (max-width: 638px) {
    .scale-in {
        animation: scaleIn 0.5s forwards;
        transform-origin: top;

    }

    .scale-out {
        animation: scaleOut 0.5s forwards;
        transform-origin: top;
    }
}

@keyframes scaleIn {
    from {
        transform: scale(0);
    }

    to {
        transform: scale(1);
    }
}

@keyframes scaleOut {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(0);
    }
}
</style>