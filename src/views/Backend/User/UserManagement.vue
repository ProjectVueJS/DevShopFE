<script setup>
// import Layout from '@/components/BE/Layout.vue';
</script>
<template>
    <!-- <h2>User Management</h2> -->
    <BreadcrumbVue class="mb-2" :breadcrumb="breadcrumb" />

    <UserFilter @paramFilter="handleParamFilter" />
    <!-- {{ query }} -->
    <DataTableVue class="overflow-auto" :query="query" />

</template>

<script>

import DataTableVue from '@/components/BE/tables/UserTable.vue';
import UserFilter from '@/components/BE/filter/UserFilter.vue';
import BreadcrumbVue from '@/common/Breadcrumb.vue';

export default {
    name: 'UserManagement',
    components: {
        DataTableVue,
        UserFilter,
        BreadcrumbVue
    },
    data() {
        return {
            query: '',
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
    methods: {
        handleParamFilter(param) {
            // console.log(param);
            this.query = param;
        }
    }
}
</script>