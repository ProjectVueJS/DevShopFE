<template>
    <LoadingVue v-if="loading" />
    <div id="admin-layout" class="flex lg:flex-row md:flex-row sm:flex-row flex-col">
        <SideBar class="flex-none" :menu="menu" />
        <div id="right-layout" class="bg-blue-950">
            <HeaderAdmin :menu="menu" />


            <!-- overflow-auto  -->
            <div id="main-content" class="md:rounded-tl-lg lg:rounded-tl-lg p-2 bg-white w-full overflow-auto"
                :style="{ minHeight: 'calc(100vh - 56px)' }">
                <router-view />
            </div>
        </div>
    </div>
</template>



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
            const response = await ConfigService.getMenu()
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

<style lang="scss" scoped>
// @media (max-width: 768px) {}

#admin-layout {
    #right-layout {
        width: calc(100% - 320px);
    }

    /* 
    */
    @media (max-width: 768px) {
        overflow: auto;
        #right-layout {
        width: 100%;
    }
    }
}
</style>