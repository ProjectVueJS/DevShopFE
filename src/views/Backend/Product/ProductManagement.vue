<script setup>
// import Layout from '@/components/BE/Layout.vue';
</script>
<template>
    <!-- <h2>User Management</h2> -->
    <BreadcrumbVue class="mb-2" :breadcrumb="breadcrumb" />
    <ProductFilter @paramFilter="handleParamFilter"/>
    <ProductTable :query="query" />


</template>

<script>

import BreadcrumbVue from '@/common/Breadcrumb.vue';
import ProductFilter from '@/components/BE/filter/ProductFilter.vue';
import ProductTable from '@/components/BE/tables/ProductTable.vue';

export default {
    name: 'ProductManagement',
    components: {
        BreadcrumbVue,
        ProductTable,
        ProductFilter
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
                    { label: 'Product Management', icon: 'pi pi-microchip' },
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