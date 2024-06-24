<template>
    <div id="close-zone menu" class="fixed top-0 right-0 w-full h-full opacity-0 bg-green-500"
        @click="changeStatusMenuAvata" :class="{ 'hidden': !MenuAvataStatus }">
    </div>


    <div id="header-admin" class="bg-blue-950 w-full flex flex-row px-2">
        <!-- <slot name="sidebarStatusBtn"></slot> -->
        <div class="flex w-full md:justify-end lg:justify-end sm:justify-end justify-between items-center">
            <div class="flex md:full lg:full sm:full flex-1">
                <Button class="sm:hidden lg:hidden md:hidden block text-base" label="" icon="pi pi-bars"
                    @click="visible = true" :aria-controls="visible ? 'sbar' : null" :aria-expanded="visible"
                    :class="$style.sidebarStatusBtn" />
                <!-- Box Language -->
                <LanguageSelect />
            </div>
            <div class="flex">
                <MenuNotifice />
                <div class="text-white flex items-center relative cursor-pointer">
                    <div class="flex items-center" @click="changeStatusMenuAvata">
                        <p class="px-2 sm:text-sm text-xs">
                            Admin
                            <i class="pi pi-angle-down cursor-pointer sm:text-sm text-xs" @click="changeStatus" />

                        </p>
                        <img src="https://cdn.icon-icons.com/icons2/1429/PNG/512/icon-robots-6_98541.png"
                            class="rounded-full w-14 " alt="">
                    </div>
                    <!-- avata/account menu -->
                    <ul class="z-10 absolute top-full right-0 list-none p-2 rounded-md min-w-56 h-auto shadow-md border border-gray-200 bg-white"
                        :class="{ 'hidden': !MenuAvataStatus, 'scale-in': scaleIn, 'scale-out': scaleOut }">
                        <div v-for="(item, index) in DataMenuAvata" :key="`adminMenuAvata_${index}`">
                            <router-link :to="item.linkTo"
                                class="flex bg-white hover:bg-indigo-200 p-2 text-gray-800 cursor-pointer sm:text-sm text-xs"
                                :class="{ 'rounded-t-md': index === 0, 'rounded-b-md': (index + 1) === DataMenuAvata.length }"
                                @click="logout(item.action)">
                                {{ item.name }}
                            </router-link>
                            <span v-if="(index + 1) < DataMenuAvata.length"
                                class="w-full block border-t border-gray-200"></span>
                        </div>
                    </ul>
                </div>
            </div>
        </div>

        <div id="mobile-sidebar">
            <Sidebar class="w-full" id="sbar" v-model:visible="visible" role="region">
                <div class="bg-blue-950 flex flex-col w-full h-full rounded-md pt-2">
                    <div class="h-auto flex flex-col w-full px-2 overflow-y-auto border-r">
                        <div class="logo-admin bg-[#1c1536] rounded-md">
                            <img src="../../assets/imgs/app/dev-logo.png" class="h-14 object-contain mx-auto" alt="">
                        </div>

                        <div class="flex flex-col justify-between mb-8 mt-3">
                            <aside>
                                <ul>
                                    <div v-for="(parentMenu, index) in menu" :key="`parent_${index}`">
                                        <li v-if="parentMenu.child.length === 0">
                                            <router-link :to="parentMenu.linkTo" @click="visible = false"
                                                class="flex items-center px-4 py-2 mt-3 text-white rounded-md hover:bg-[#5064aa]"
                                                href="#">
                                                <i :class="parentMenu.icon"></i>
                                                <span class="mx-4 font-medium lg:text-base md:text-sm">{{
                                                    parentMenu.name }}</span>
                                            </router-link>
                                        </li>

                                        <li v-else>
                                            <a class="flex justify-between items-center px-4 py-2 mt-3 text-white rounded-md hover:bg-[#5064aa]"
                                                href="#" @click="toggleMenu" :parent-toggle-menu="parentMenu.name">
                                                <div class="">
                                                    <i :class="parentMenu.icon"></i>
                                                    <span class="mx-4 font-medium lg:text-base md:text-sm">{{
                                                        parentMenu.name }}</span>
                                                </div>
                                                <i class="pi pi-angle-right"></i>
                                            </a>
                                        </li>

                                        <li :child-toggle-menu="parentMenu.name" class="child-menu"
                                            style="display: none;">
                                            <ul class="bg-[#5064aa] w-full rounded-md">
                                                <li v-for="(childMenu, i) in parentMenu.child" :key="`child_${i}`">
                                                    <router-link :to="childMenu.linkTo" @click="visible = false"
                                                        class="flex items-center py-2 ps-5 mt-2 text-white hover:bg-blue-800"
                                                        href="#"
                                                        :class="{ 'hover:rounded-t-md': i === 0, 'hover:rounded-b-md': (i + 1) === parentMenu.child.length }">
                                                        <span class="ms-5 font-medium lg:text-base md:text-sm">{{
                                                            childMenu.name }}</span>
                                                    </router-link>
                                                </li>
                                            </ul>
                                        </li>
                                    </div>
                                </ul>
                            </aside>
                        </div>
                    </div>
                    <div class="w-full flex justify-center flex-grow shadow shadow-slate-200" @click="visible = false">
                        <span class="block place-self-center text-gray-100 text-sm opacity-25">Click close
                            menu</span>
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
import { adminMenuAvata } from "@/utilities/menu"
import { AppAction } from "@/utilities/app";
import LanguageSelect from "@/common/LanguageSelect.vue";
// import ConfigService from "@/service/configService";
const visible = ref(false);
</script>

<script>
export default {
    name: 'HeaderAdmin',
    components: {
        MenuNotifice,
    },
    props: {
        menu: {
            type: [Array, Object],
            // default: adminSideBar
        }
    },
    created() {
    },
    data() {
        return {
            DataMenuAvata: adminMenuAvata[this.lang],
            MenuAvataStatus: false,
            scaleIn: false,
            scaleOut: false,
        }
    },
    methods: {
        changeStatusMenuAvata() {
            if (this.MenuAvataStatus) {
                this.scaleOut = true
                this.scaleIn = false
                setTimeout(() => {
                    this.MenuAvataStatus = false
                }, 400);
            } else {
                this.scaleOut = false
                this.MenuAvataStatus = true
                this.scaleIn = true
            }
        },

        toggleMenu(event) {
            event.preventDefault();
            var parentToggleMenu = event.currentTarget.getAttribute('parent-toggle-menu');
            var parentIcon = document.querySelectorAll(`[parent-toggle-menu="${parentToggleMenu}"]`);
            var childToggleMenu = document.querySelectorAll(`[child-toggle-menu="${parentToggleMenu}"]`);
            if (childToggleMenu[0].style.display === 'none' || childToggleMenu[1].style.display === 'none') {
                parentIcon[0].lastElementChild.classList.value = 'pi pi-angle-down'
                parentIcon[1].lastElementChild.classList.value = 'pi pi-angle-down'
                childToggleMenu[0].style.display = 'block';
                childToggleMenu[1].style.display = 'block';
            } else {
                parentIcon[0].lastElementChild.classList.value = 'pi pi-angle-right'
                parentIcon[1].lastElementChild.classList.value = 'pi pi-angle-right'
                childToggleMenu[0].style.display = 'none';
                childToggleMenu[1].style.display = 'none';
            }
        },

        logout(action) {
            // console.log('logout:' + action);
            if (action === 'logout') {
                AppAction.logout()
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
    animation: scaleIn 0.4s forwards;
    transform-origin: top right;

}

.scale-out {
    animation: scaleOut 0.4s forwards;
    transform-origin: top right;
}

</style>