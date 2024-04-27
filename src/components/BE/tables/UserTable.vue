<template>
    <div class="card">
        <div class="w-full p-2 border border-blue-700">
            <DataTable v-if="dataTable" :value="dataTable" dataKey="id" sortMode="multiple" :sortOrder="1"
                tableStyle="min-width: 50rem">
                <Column selectionMode="multiple" headerStyle="width: 3rem"></Column>
                <!-- <Column field="id" header="#" sortable style="width: auto,"></Column> -->

                <Column field="username" header="username" sortable style="width: auto,"></Column>
                <Column field="firstname" header="firstname" sortable style="width: auto,"></Column>
                <Column field="gender" header="gender" sortable style="width: auto,">
                    <template #body="rowData">
                        <span class="">
                            {{ rowData.data.gender === 1 ? 'Nữ' : 'Nam' }}
                        </span>
                    </template>
                </Column>
                <Column field="email" header="email" sortable style="width: auto,"></Column>
                <Column field="phone" header="phone" sortable style="width: auto,"></Column>
                <Column field="address" header="address" sortable style="width: auto,"></Column>
                <Column field="role" header="role" sortable style="width: auto,"></Column>
                <Column field="status" header="status" sortable style="width: auto,">
                    <template #body="rowData">
                        <span
                            :class="{
                                'inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10': rowData.data.status === 0,
                                'inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20': rowData.data.status === 1
                            }">
                            {{ rowData.data.status === 1 ? 'Active' : 'Inactive' }}
                        </span>
                    </template>
                </Column>
            </DataTable>
        </div>
    </div>
</template>

<script setup>
import Column from 'primevue/column';
import DataTable from 'primevue/datatable';
// const formatCurrency = (value) => {
//     return value.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' });
// }
</script>
<script>

export default {
    name: 'DataTable',
    props: {
        dataTable: {
            type: [Array, Object]
        }
    },
}
</script>

<!-- <Column field="name" header="Name" sortable style="width: 20%"></Column>
            <Column field="price" header="Price" :sortable="true">
                <template #body="slotProps">
                    {{ formatCurrency(slotProps.data.price) }}
                </template>
            </Column>
            <Column field="category" header="Category" sortable style="width: 20%"></Column>
            <Column field="quantity" header="Quantity" sortable style="width: 20%"></Column> -->