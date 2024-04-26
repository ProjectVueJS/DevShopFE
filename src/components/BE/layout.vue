<template>
    <LoadingVue v-if="loading" />
    <div id="admin-layout" class="flex lg:flex-row md:flex-row sm:flex-row flex-col">
        <SideBar :menu="menu" />
        <div class="bg-blue-950 w-full">
            <HeaderAdmin :menu="menu" />
            <div id="main-content" class="bg-white overflow-hidden overflow-y-auto md:rounded-tl-lg lg:rounded-tl-lg p-2" 
                :style="{height: 'calc(100vh - 56px)'}">
                <router-view />
            </div>
        </div>
    </div>
</template>
<!-- <template>
    <LoadingVue v-if="loading" />
    <div id="admin-layout" class="flex lg:flex-row md:flex-row sm:flex-row flex-col">
        <SideBar :menu="menu" />
        <div class="bg-blue-950 w-full">
            <HeaderAdmin :menu="menu" />
            <div id="main-content" class="bg-white overflow-hidden overflow-y-auto md:rounded-tl-lg lg:rounded-tl-lg" 
                :style="{height: 'calc(100vh - 56px)'}">
                <slot name="template"></slot>
            </div>
        </div>
    </div>
</template> -->

<script>
import ConfigService from '@/service/configService';
import SideBar from './SideBar'
import HeaderAdmin from "./Header"
import { adminSideBar } from '@/utilities/menu';
export default {
    name: 'LayoutAdmin',
    components: {
        SideBar,
        HeaderAdmin
    },
    created() {
        this.fetchMenu()
    },
    data() {
        return {
            menu: [],
            loading: true
        }
    },
    methods: {
        async fetchMenu() {
            const response = await ConfigService.getMenu(this.lang)
            if (response.status) {
                // console.log('api');
                this.menu = response.menu;
                this.loading = false
            } else {
                // console.log('local');
                this.menu = adminSideBar[this.lang]
                this.loading = false
            }
        }
    }
}
</script>