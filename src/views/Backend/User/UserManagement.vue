<script setup>
// import Layout from '@/components/BE/Layout.vue';
</script>
<template>
    <!-- <h2>User Management</h2> -->
    <BreadcrumbVue :breadcrumb="breadcrumb"/>

    <UserFilter />
    <DataTableVue :dataTable="data" />

    <!-- <Layout>
        <template #template>
        </template>
</Layout> -->
</template>

<script>

import UserService from '@/service/userService';
import DataTableVue from '@/components/BE/tables/UserTable.vue';
import UserFilter from '@/components/BE/filter/UserFilter.vue';
import BreadcrumbVue from '@/common/Breadcrumb.vue';
BreadcrumbVue
export default {
    name: 'UserManagement',
    components: {
        DataTableVue,
        UserFilter,
        BreadcrumbVue
    },
    data() {
        return {
            data: [],
            breadcrumb: {
                home: {
                    icon: 'pi pi-home',
                    route: '/admin/dashboard'
                },
                items: [
                    { label: 'Administration', icon: 'pi pi-microchip' },
                    { label: 'User Management', route: '#' },
                ]

            }
        }
    },
    created() {
        this.getListUser();
    },
    methods: {
        async getListUser() {
            const response = await UserService.getListUser();
            if (response.status) {
                this.data = response.users
            }
        }
    }
}
</script>