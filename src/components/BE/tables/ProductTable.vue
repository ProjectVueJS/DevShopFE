<template>
    <div class="card">
        <LoadingVue v-if="loading" />
        <div id="user-table"
            class="w-full p-2 bg-[#ffffffa8] mb-2 shadow-md border border-gray-100 rounded-md flex flex-col">
            <div class="flex justify-between mb-2">
                <label for="limit" class="sm:text-lg text-sm">
                    {{ text.show }}
                    <select id="limit" v-model="limit" @change="changeLimit"
                        class="sm:text-sm text-xs border px-2 h-8 border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600 text-center">
                        <option value="10">10</option>
                        <option value="20">20</option>
                        <option value="30">30</option>
                        <option value="40">40</option>
                        <option value="50">50</option>
                    </select>
                </label>

                <div class="flex gap-x-2">
                    <router-link :to="{ name: 'admin.user.mng.add' }"
                        class="min-w-24 bg-green-500 hover:bg-green-600 rounded-md text-white sm:text-sm text-xs text-center place-content-center">{{
                            btn.add }}</router-link>
                    <button class="min-w-24 bg-blue-500 hover:bg-blue-600 rounded-md text-white sm:text-sm text-xs">{{
                        btn.actions }}</button>
                </div>
            </div>
            <div class="w-full overflow-auto"
                :style="meta.totalPage && meta.totalPage > 1 ? `height: calc(100vh - 432px);` : `height: calc(100vh - 376px);`">
                <!-- min-w-[] -->
                <table
                    class=" min-w-[1560px] w-full sm:text-sm text-xs text-left rtl:text-right text-gray-500 dark:text-gray-400 border border-gray-100">
                    <thead class="text-blue-700 uppercase bg-blue-200 sm:text-sm text-xs">
                        <tr>
                            <th scope="col" class="w-7 text-center select-none py-2">
                                #
                            </th>
                            <th scope="col" class="px-6 py-3 select-none cursor-pointer text-center"
                                :class="{ 'bg-blue-300': sort.field == 'firstname' }" @click="sortTable('firstname')">
                                {{ text.name }}
                                <i class="pi pi-sort text-sm ms-1" v-if="!sort.field && !sort.value"></i>
                                <i class="pi pi-sort-down-fill text-sm ms-1" v-if="sort.field == 'firstname' && sort.value == 'asc'"></i>
                                <i class="pi pi-sort-up-fill text-sm ms-1" v-if="sort.field == 'firstname' && sort.value == 'desc'"></i>
                            </th>
                            <th scope="col" class="px-6 py-3 select-none cursor-pointer text-center"
                                :class="{ 'bg-blue-300': sort.field == 'username' }" @click="sortTable('username')">
                                {{ text.username }}
                                <i class="pi pi-sort text-sm ms-1" v-if="!sort.field && !sort.value"></i>
                                <i class="pi pi-sort-down-fill text-sm ms-1" v-if="sort.field == 'username' && sort.value == 'asc'"></i>
                                <i class="pi pi-sort-up-fill text-sm ms-1" v-if="sort.field == 'username' && sort.value == 'desc'"></i>
                            </th>
                            <th scope="col" class="px-6 py-3 select-none cursor-pointer text-center"
                                :class="{ 'bg-blue-300': sort.field == 'email' }" @click="sortTable('email')">
                                {{ text.email }}
                                <i class="pi pi-sort text-sm ms-1" v-if="!sort.field && !sort.value"></i>
                                <i class="pi pi-sort-down-fill text-sm ms-1" v-if="sort.field == 'email' && sort.value == 'asc'"></i>
                                <i class="pi pi-sort-up-fill text-sm ms-1" v-if="sort.field == 'email' && sort.value == 'desc'"></i>
                            </th>
                            <th scope="col" class="px-6 py-3 select-none cursor-pointer text-center"
                                :class="{ 'bg-blue-300': sort.field == 'phone' }" @click="sortTable('phone')">
                                {{ text.phone }}
                                <i class="pi pi-sort text-sm ms-1" v-if="!sort.field && !sort.value"></i>
                                <i class="pi pi-sort-down-fill text-sm ms-1" v-if="sort.field == 'phone' && sort.value == 'asc'"></i>
                                <i class="pi pi-sort-up-fill text-sm ms-1" v-if="sort.field == 'phone' && sort.value == 'desc'"></i>
                            </th>
                            <th scope="col" class="px-6 py-3 select-none cursor-pointer text-center"
                                :class="{ 'bg-blue-300': sort.field == 'address' }" @click="sortTable('address')">
                                {{ text.address }}
                                <i class="pi pi-sort text-sm ms-1" v-if="!sort.field && !sort.value"></i>
                                <i class="pi pi-sort-down-fill text-sm ms-1" v-if="sort.field == 'address' && sort.value == 'asc'"></i>
                                <i class="pi pi-sort-up-fill text-sm ms-1" v-if="sort.field == 'address' && sort.value == 'desc'"></i>
                            </th>
                            <th scope="col" class="px-6 py-3 select-none cursor-pointer text-center"
                                :class="{ 'bg-blue-300': sort.field == 'role' }" @click="sortTable('role')">
                                {{ text.role }}
                                <i class="pi pi-sort text-sm ms-1" v-if="!sort.field && !sort.value"></i>
                                <i class="pi pi-sort-down-fill text-sm ms-1" v-if="sort.field == 'role' && sort.value == 'asc'"></i>
                                <i class="pi pi-sort-up-fill text-sm ms-1" v-if="sort.field == 'role' && sort.value == 'desc'"></i>
                            </th>
                            <th scope="col" class="px-6 py-3 select-none cursor-pointer text-center"
                                :class="{ 'bg-blue-300': sort.field == 'status' }" @click="sortTable('status')">
                                {{ text.status }}
                                <i class="pi pi-sort text-sm ms-1" v-if="!sort.field && !sort.value"></i>
                                <i class="pi pi-sort-down-fill text-sm ms-1" v-if="sort.field == 'status' && sort.value == 'asc'"></i>
                                <i class="pi pi-sort-up-fill text-sm ms-1" v-if="sort.field == 'status' && sort.value == 'desc'"></i>
                            </th>
                            <th scope="col" class="px-6 py-3 select-none cursor-pointer text-center"
                                :class="{ 'bg-blue-300': sort.field == 'gender' }" @click="sortTable('gender')">
                                {{ text.gender }}
                                <i class="pi pi-sort text-sm ms-1" v-if="!sort.field && !sort.value"></i>
                                <i class="pi pi-sort-down-fill text-sm ms-1" v-if="sort.field == 'gender' && sort.value == 'asc'"></i>
                                <i class="pi pi-sort-up-fill text-sm ms-1" v-if="sort.field == 'gender' && sort.value == 'desc'"></i>
                            </th>
                        </tr>
                    </thead>

                    <tbody class="">
                        <tr class="bg-white border-b hover:bg-blue-100" v-for="(value, index) in data"
                            :key="`us-tb-${index}`">
                            <th scope="row"
                                class="px-6 py-2 text-center font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                <input type="checkbox" name="" :value="value.id" id="">
                            </th>
                            <td class="px-6 py-2 text-center">
                                {{ value.name }}
                            </td>
                            <td class="px-6 py-2 text-center">
                                {{ value.username }}
                            </td>
                            <td class="px-6 py-2 text-center">
                                {{ value.email }}
                            </td>
                            <td class="px-6 py-2 text-center">
                                {{ value.phone }}
                            </td>
                            <td class="px-6 py-2 text-center">
                                {{ value.address }}
                            </td>
                            <td class="px-6 py-2 text-center">
                                {{ value.role }}
                            </td>
                            <td class="px-6 py-2 text-center">
                                <!-- {{value.status}} -->
                                <img src="@/assets/imgs/icon/inactive.png" v-if="value.status == 0" class="mx-auto"
                                    width="40">
                                <img src="@/assets/imgs/icon/active.png" v-if="value.status == 1" class="mx-auto"
                                    width="40">
                            </td>
                            <td class="px-6 py-2">
                                <!-- {{value.gender}} -->
                                <img src="@/assets/imgs/icon/male.png" v-if="value.gender == 0" class="mx-auto"
                                    width="40">
                                <img src="@/assets/imgs/icon/female.png" v-if="value.gender == 1" class="mx-auto"
                                    width="40">
                            </td>
                        </tr>
                    </tbody>
                </table>
            </div>
            <div id="footer" class="flex-1 sm:text-end text-center p-2 place-content-center sm:flex-row flex-col"
                v-if="meta.totalPage && meta.totalPage > 1">
                <PaginateBar :meta="meta" @setPage="handlePage" />
            </div>
        </div>
    </div>
</template>

<script setup>
import UserService from '@/service/userService';

import { textLang } from '@/utilities/lang/textLang';
import PaginateBar from '@/common/Paginate.vue';
import { btnLang } from '@/utilities/lang/btnLang';

</script>
<!--  -->
<script>
export default {
    name: 'ProductTable',
    components: {
        PaginateBar
    },
    props: {
        query: {
            type: String,
            default: ''
        }
    },
    data() {
        return {
            loading: true,
            limit: 10,
            page: 1,
            data: [],
            text: textLang[this.lang],
            btn: btnLang[this.lang],
            sort: {
                field: '',
                value: '',
            },
            meta: {},
        }
    },
    // created() {
    //     // console.log(this.query);
    //     this.getListUser(this.query);
    // },
    watch: {
        query: {
            handler(newVal) {
                let sort = '';
                if (this.sort.field) {
                    sort = `sort[${this.sort.field}]=${this.sort.value}`
                }
                // console.log('newVal:--- ' + newVal);
                this.getListUser(newVal, sort, this.page, this.limit);
            },
            immediate: true
        }
    },
    methods: {
        sortTable(column) {
            let sort;
            if (this.sort.field === column) {
                if (this.sort.value == 'asc') {
                    this.sort.value = 'desc'
                } else {
                    this.sort.field = ''
                    this.sort.value = ''
                }
                if (this.sort.field) {
                    sort = `sort[${this.sort.field}]=${this.sort.value}`
                }
                this.getListUser(this.query, sort);
            } else {
                this.sort.field = column;
                this.sort.value = 'asc';
                if (this.sort.field) {
                    sort = `sort[${this.sort.field}]=${this.sort.value}`
                }
                this.getListUser(this.query, sort, this.page, this.limit);
            }
        },
        async getListUser(query, sort = '') {
            // console.table(this.sort);
            this.loading = true;
            const response = await UserService.getListUser(query, sort, this.page, this.limit);
            if (response.status) {
                this.data = response.users
                this.meta = response.meta
                this.loading = false;
            }
        },
        changeLimit() {
            let sort = '';
            if (this.sort.field) {
                sort = `sort[${this.sort.field}]=${this.sort.value}`
            }
            this.page = 1;
            // console.log('newVal:--- ' + newVal);
            this.getListUser(this.query, sort, this.page, this.limit);
        },
        handlePage(page) {
            this.page = page
            let sort = '';
            if (this.sort.field) {
                sort = `sort[${this.sort.field}]=${this.sort.value}`
            }
            // console.log('newVal:--- ' + newVal);
            this.getListUser(this.query, sort, this.page, this.limit);
        },
    }
}
</script>


<style scoped lang="scss">
#user-table {
    height: calc(100vh - 316px);

    div.overflow-auto {
        height: calc(100vh - 432px);

        table>thead {
            position: sticky;
            top: 0;
            z-index: 1;
        }
    }

    /* 
    */
    @media (max-width: 768px) {
        /* Mobile */
        /**
        height: calc(100vh - 40%) !important;
        */


        /**
        div.overflow-auto {
            height: calc(100vh - 488px) !important;
        }
        */
    }
}
</style>