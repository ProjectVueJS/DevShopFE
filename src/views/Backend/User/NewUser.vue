<template>
    <BreadcrumbVue class="mb-2" :breadcrumb="breadcrumb" />
    <AlertNotifice v-if="showNotifice" @resetAlertStatus="resetAlertStatus" :typeAlert="typeNotifice"
        :message="messageNotifice" />
    <div class="flex bg-[#ffffffa8] mb-2 p-2 shadow-md border border-gray-100 rounded-md">
        <form @submit.prevent="validateFilter" class="w-full">
            <!-- Apply space between form elements -->
            <div class="w-full justify-start grid lg:grid-cols-6 md:grid-cols-5 sm:grid-cols-4 grid-cols-2 gap-x-4">
                <div class="flex flex-col">
                    <label for="lastname" class="sm:text-sm text-xs font-medium mb-1">{{ text.lastname }}:</label>
                    <input type="text" v-model="user.lastname" id="lastname" placeholder=""
                        class="sm:text-sm text-xs px-2 h-8 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600"
                        :class="{ 'border-red-600': errors.lastname }">
                    <p class="my-1 sm:text-sm text-xs text-red-600" v-if="errors.lastname">{{ errors.lastname }}</p>
                </div>
                <div class="flex flex-col">
                    <label for="middlename" class="sm:text-sm text-xs font-medium mb-1">{{ text.middlename }}:</label>
                    <input type="text" v-model="user.middlename" id="middlename" placeholder=""
                        class="sm:text-sm text-xs px-2 h-8 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600"
                        :class="{ 'border-red-600': errors.middlename }">
                    <p class="my-1 sm:text-sm text-xs text-red-600" v-if="errors.middlename">{{ errors.middlename }}</p>
                </div>
                <div class="flex flex-col">
                    <label for="firstname" class="sm:text-sm text-xs font-medium mb-1">{{ text.firstname }}:</label>
                    <input type="text" v-model="user.firstname" id="firstname" placeholder=""
                        class="sm:text-sm text-xs px-2 h-8 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600"
                        :class="{ 'border-red-600': errors.firstname }">
                    <p class="my-1 sm:text-sm text-xs text-red-600" v-if="errors.firstname">{{ errors.firstname }}</p>
                </div>

                <div class="flex flex-col">
                    <label for="email" class="sm:text-sm text-xs font-medium mb-1">{{ text.email }}:</label>
                    <input type="text" v-model="user.email" id="email"
                        class="sm:text-sm text-xs px-2 h-8 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600"
                        :class="{ 'border-red-600': errors.email }">
                    <p class="my-1 sm:text-sm text-xs text-red-600" v-if="errors.email">{{ errors.email }}</p>
                </div>
                <div class="flex flex-col">
                    <label for="username" class="sm:text-sm text-xs font-medium mb-1">{{ text.username }}:</label>
                    <input type="text" v-model="user.username" id="username"
                        class="sm:text-sm text-xs px-2 h-8 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600"
                        :class="{ 'border-red-600': errors.username }">

                    <p class="my-1 sm:text-sm text-xs text-red-600" v-if="errors.username">{{ errors.username }}</p>
                </div>

                <div class="flex flex-col">
                    <label for="password" class="sm:text-sm text-xs font-medium mb-1">{{ text.password }}:</label>
                    <input type="password" v-model="user.password" id="password"
                        class="sm:text-sm text-xs px-2 h-8 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600"
                        :class="{ 'border-red-600': errors.password }">

                    <p class="my-1 sm:text-sm text-xs text-red-600" v-if="errors.password">{{ errors.password }}</p>
                </div>
                <div class="flex flex-col">
                    <label for="password_confirmation" class="sm:text-sm text-xs font-medium mb-1">{{ text.password_confirmation
                        }}:</label>
                    <input type="password" v-model="user.password_confirmation" id="password_confirmation"
                        class="sm:text-sm text-xs px-2 h-8 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600"
                        :class="{ 'border-red-600': errors.password_confirmation }">

                    <p class="my-1 sm:text-sm text-xs text-red-600" v-if="errors.password_confirmation">{{
                        errors.password_confirmation }}</p>
                </div>

                <div class="flex flex-col">
                    <label for="phone" class="sm:text-sm text-xs font-medium mb-1">{{ text.phone }}:</label>
                    <input type="text" v-model="user.phone" id="phone"
                        class="sm:text-sm text-xs px-2 h-8 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600"
                        :class="{ 'border-red-600': errors.phone }">
                    <p class="my-1 sm:text-sm text-xs text-red-600" v-if="errors.phone">{{ errors.phone }}</p>

                </div>
                <div class="flex flex-col">
                    <label for="address" class="sm:text-sm text-xs font-medium mb-1">{{ text.address }}:</label>
                    <input type="text" v-model="user.address" id="address"
                        class="sm:text-sm text-xs px-2 h-8 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600"
                        :class="{ 'border-red-600': errors.address }">
                    <p class="my-1 sm:text-sm text-xs text-red-600" v-if="errors.address">{{ errors.address }}</p>
                </div>
                <div class="flex flex-col">
                    <label for="role" class="sm:text-sm text-xs font-medium mb-1">{{ text.role }}:</label>
                    <select v-model="user.role" id="role"
                        class="sm:text-sm text-xs border px-2 h-8 border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600"
                        :class="{ 'border-red-600': errors.role }">
                        <option value="">{{ text.setRole }}</option>
                        <option value="admin">Admin</option>
                        <option value="customer">Customer</option>
                    </select>
                    <p class="my-1 sm:text-sm text-xs text-red-600" v-if="errors.role">{{ errors.role }}</p>
                </div>
                <div class="flex flex-col">
                    <label for="gender" class="sm:text-sm text-xs font-medium mb-1">{{ text.gender }}:</label>
                    <select v-model="user.gender" id="gender"
                        class="sm:text-sm text-xs border px-2 h-8 border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600"
                        :class="{ 'border-red-600': errors.gender }">
                        <option value="">{{ genderSelect.label }}</option>
                        <option :value="genderSelect.male.value">{{ genderSelect.male.name }}</option>
                        <option :value="genderSelect.female.value">{{ genderSelect.female.name }}</option>
                    </select>
                    <p class="my-1 sm:text-sm text-xs text-red-600" v-if="errors.gender">{{ errors.gender }}</p>
                </div>
                <div class="flex flex-col">
                    <label for="status" class="sm:text-sm text-xs font-medium mb-1">{{ text.status }}:</label>
                    <select v-model="user.status" id="status"
                        class="sm:text-sm text-xs border px-2 h-8 border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600"
                        :class="{ 'border-red-600': errors.status }">
                        <option value="">{{ statusSelect.label }}</option>
                        <option :value="statusSelect.active.value">{{ statusSelect.active.name }}</option>
                        <option :value="statusSelect.inactive.value">{{ statusSelect.inactive.name }}</option>
                    </select>
                    <p class="my-1 sm:text-sm text-xs text-red-600" v-if="errors.status">{{ errors.status }}</p>
                </div>
            </div>
            <button type="submit"
                class="sm:text-sm text-xs bg-blue-500 text-white px-4 py-1 mt-2 rounded-md hover:bg-blue-600">Create
                User</button>
        </form>
    </div>
</template>

<script>
import BreadcrumbVue from '@/common/Breadcrumb.vue';
import { textLang, inputGender, inputStatus } from '@/utilities/lang/textLang';
import form from '@/utilities/form';
import UserService from '@/service/userService';
import { valiErrorLang } from '@/utilities/lang/validateLang';
import { userLang } from '@/utilities/lang/userLang';
import router from '@/router';

export default {
    name: 'NewUser',
    components: {
        BreadcrumbVue
    },
    data() {
        return {
            breadcrumb: {
                home: {
                    icon: 'pi pi-home',
                    route: '/admin/dashboard'
                },
                items: [
                    { label: 'Administration', icon: 'pi pi-microchip' },
                    { label: 'User Management', route: '/admin/user-management' },
                    { label: 'Create User' },
                ]

            },
            text: textLang[this.lang],
            genderSelect: inputGender[this.lang],
            statusSelect: inputStatus[this.lang],
            user: {
                firstname: 'Duy',
                lastname: 'Nguyen',
                middlename: '',
                email: 'nkduydhtv@gmail.com',
                username: 'iloveht',
                password: 'hehehe',
                password_confirmation: 'hehehe',
                phone: '0943082871',
                address: 'q12, hcm',
                role: 'admin',
                gender: 'male',
                status: 'active',
            },
            data: {},
            errors: {},
            showNotifice: false,
            typeNotifice: 'success',
            messageNotifice: 'success',
        }
    },
    methods: {
        validateFilter() {
            this.errors = form.createUser(this.user, this.lang);
            if (
                !this.errors.firstname &&
                !this.errors.lastname &&
                !this.errors.middlename &&
                !this.errors.email &&
                !this.errors.username &&
                !this.errors.phone &&
                !this.errors.address &&
                !this.errors.role &&
                !this.errors.gender &&
                !this.errors.password &&
                !this.errors.confirmPassword &&
                !this.errors.status
            ) {
                this.createUser()
            }
        },
        async createUser() {
            try {
                const response = await UserService.createUser(this.user);
                if (response.status) {
                    this.alert(true, 'success', userLang[this.lang][response.message])
                    setTimeout(() => {
                        router.push('/admin/user-management')
                    }, 1500)
                } else {
                    this.alert(true, 'false', userLang[this.lang][response.message])
                }
            } catch (errors) {
                let data = errors.data
                // console.log(data);
                // this.alert()
                for (const key in data) {
                    if (Object.hasOwnProperty.call(data, key)) {
                        const error = data[key];
                        if (typeof (error) == 'object') {
                            // 
                            for (const key in error) {
                                if (Object.hasOwnProperty.call(error, key)) {
                                    const element = error[key];
                                    // console.log(element[0]);
                                    let message = element[0]
                                    this.alert(true, 'error', valiErrorLang[this.lang][message])
                                    if (message == 'UsernameDuplicate') {
                                        this.errors.username = valiErrorLang[this.lang][message]
                                    }
                                    if (message == 'EmailDuplicate') {
                                        this.errors.email = valiErrorLang[this.lang][message]
                                    }
                                    break;
                                }
                            }
                            // 
                        }
                    }
                }
            }
        },
        // alert
        alert(status = true, type = 'success', message = 'Alert Message') {
            this.showNotifice = status;
            this.typeNotifice = type;
            this.messageNotifice = message;
        },
        resetAlertStatus() {
            this.showNotifice = false
        }
    }
}
</script>