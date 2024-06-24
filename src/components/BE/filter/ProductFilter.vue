<template>
    <div class="flex bg-[#ffffffa8] mb-2 p-2 shadow-md border border-gray-100 rounded-md">
        <form @submit.prevent="createParamFilter" class="w-full">
            <!-- Apply space between form elements -->
            <div class="w-full justify-start grid lg:grid-cols-6 sm:grid-cols-4 grid-cols-2 gap-x-4">
                <div class="flex flex-col">
                    <label for="name" class="sm:text-sm text-xs font-medium mb-1">{{ text.name }}:</label>
                    <input type="text" v-model="filterParams.name" id="name" placeholder=""
                        class="sm:text-sm text-xs px-2 h-8 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600">
                </div>

                <div class="flex flex-col">
                    <label for="email" class="sm:text-sm text-xs font-medium mb-1">{{ text.email }}:</label>
                    <input @change="validateFilter" type="text" v-model="filterParams.email" id="email"
                        class="sm:text-sm text-xs px-2 h-8 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600"
                        :class="{ 'border-red-600': errors.email }">
                    <p class="my-1 sm:text-sm text-xs text-red-600" v-if="errors.email">{{ errors.email }}</p>
                </div>
                <div class="flex flex-col">
                    <label for="username" class="sm:text-sm text-xs font-medium mb-1">{{ text.username }}:</label>
                    <input type="text" v-model="filterParams.username" id="username"
                        class="sm:text-sm text-xs px-2 h-8 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600">
                </div>
                <div class="flex flex-col">
                    <label for="phone" class="sm:text-sm text-xs font-medium mb-1">{{ text.phone }}:</label>
                    <input @change="validateFilter" type="text" v-model="filterParams.phone" id="phone"
                        class="sm:text-sm text-xs px-2 h-8 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600"
                        :class="{ 'border-red-600': errors.phone }">
                    <p class="my-1 sm:text-sm text-xs text-red-600" v-if="errors.phone">{{ errors.phone }}</p>

                </div>
                <div class="flex flex-col">
                    <label for="address" class="sm:text-sm text-xs font-medium mb-1">{{ text.address }}:</label>
                    <input type="text" v-model="filterParams.address" id="address"
                        class="sm:text-sm text-xs px-2 h-8 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600">
                </div>
                <div class="flex flex-col">
                    <label for="role" class="sm:text-sm text-xs font-medium mb-1">{{ text.role }}:</label>
                    <select v-model="filterParams.role" id="role"
                        class="sm:text-sm text-xs border px-2 h-8 border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600">
                        <option value="">{{ text.setRole }}</option>
                        <option value="admin">Admin</option>
                        <option value="customer">Customer</option>
                    </select>
                </div>
                <div class="flex flex-col">
                    <label for="gender" class="sm:text-sm text-xs font-medium mb-1">{{ text.gender }}:</label>
                    <select v-model="filterParams.gender" id="gender"
                        class="sm:text-sm text-xs border px-2 h-8 border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600">
                        <option value="">{{ genderSelect.label }}</option>
                        <option :value="genderSelect.male.value">{{ genderSelect.male.name }}</option>
                        <option :value="genderSelect.female.value">{{ genderSelect.female.name }}</option>
                    </select>
                </div>
                <div class="flex flex-col">
                    <label for="status" class="sm:text-sm text-xs font-medium mb-1">{{ text.status }}:</label>
                    <select v-model="filterParams.status" id="status"
                        class="sm:text-sm text-xs border px-2 h-8 border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600">
                        <option value="">{{ statusSelect.label }}</option>
                        <option :value="statusSelect.active.value">{{ statusSelect.active.name }}</option>
                        <option :value="statusSelect.inactive.value">{{ statusSelect.inactive.name }}</option>
                    </select>
                </div>
            </div>
            <button type="submit"
                class="sm:text-sm text-xs bg-blue-500 text-white px-4 py-1 mt-2 rounded-md hover:bg-blue-600 me-2">Filter</button>
            <button type="button" @click="resetFilter"
                class="sm:text-sm text-xs border border-blue-500 text-blue-600 px-4 py-1 mt-2 rounded-md hover:bg-blue-500 hover:text-white">Reset</button>
            <!-- Apply button styles -->
        </form>
    </div>

    <!-- {{ filterParams }} -->
</template>





<!--  -->

<script setup>
import form from '@/utilities/form';
import { textLang, inputGender, inputStatus } from '@/utilities/lang/textLang';
</script>

<!--  -->
<script>

export default {
    name: 'ProductFilter',
    data() {
        return {
            text: textLang[this.lang],
            genderSelect: inputGender[this.lang],
            statusSelect: inputStatus[this.lang],
            filterParams: {
                id: '',
                name: '',
                price: '',
                brand: '',
                category: '',
                created_by: '',
                status: '',
            },
            data: {},
            errors: {
                email: '',
                phone: '',
            },
        }
    },
    created() {
        // console.log(inputGender[this.lang].label);
    },
    methods: {
        validateFilter() {
            this.errors = form.userFilter(this.filterParams, this.lang);
        },
        createParamFilter() {
            if (!this.errors.email && !this.errors.phone) {
                let param = '';
                for (const key in this.filterParams) {
                    if (Object.hasOwnProperty.call(this.filterParams, key)) {
                        // Logging the property name and its value
                        if (this.filterParams[key] !== '') {
                            param += `${key}=${this.filterParams[key]}&`
                        }
                        // console.log(`${key}: ${this.filterParams[key]}`);
                    }
                }
                if (param.endsWith('&')) {
                    param = param.slice(0, -1);
                }
                // console.log(param);

                this.$emit('paramFilter', param)
            }
        },
        resetFilter() {
            this.filterParams = {
                name: '',
                email: '',
                username: '',
                phone: '',
                address: '',
                role: '',
                gender: '',
                status: '',
            };
            this.errors = {
                email: '',
                phone: '',
            },
                this.$emit('paramFilter', '')
        }

    }
}
</script>