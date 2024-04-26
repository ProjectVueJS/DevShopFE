<template>
    <div class="flex bg-[#ffffffa8] mb-2 p-2 shadow-md border border-gray-100 rounded-md">
        <form @submit.prevent="filterUsers">
            <!-- Apply space between form elements -->
            <div class="w-full flex justify-start gap-4">
                <div class="flex flex-col"> <!-- Apply flex layout to form elements -->
                    <label for="gmail" class="text-sm font-medium mb-1">Gmail:</label>
                    <!-- Apply text size and font weight -->
                    <input type="text" v-model="filterParams.gmail" id="gmail" placeholder="abcd@gmail.com"
                        class="px-2 h-8 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600">
                    <!-- Apply border, border-radius, shadow, and focus styles -->
                </div>
                <div class="flex flex-col">
                    <label for="phone" class="text-sm font-medium mb-1">Phone:</label>
                    <input type="text" v-model="filterParams.phone" id="phone"
                        class="px-2 h-8 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600">
                </div>
                <div class="flex flex-col">
                    <label for="username" class="text-sm font-medium mb-1">Username:</label>
                    <input type="text" v-model="filterParams.username" id="username"
                        class="px-2 h-8 border border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600">
                </div>
                <div class="flex flex-col">
                    <label for="role" class="text-sm font-medium mb-1">Role:</label>
                    <select v-model="filterParams.role" id="role"
                        class="border px-2 h-8 border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600">
                        <option value="">Select role</option>
                        <option value="admin">Admin</option>
                        <option value="user">User</option>
                        <!-- Add more options as needed -->
                    </select>
                </div>
                <div class="flex flex-col">
                    <label for="gender" class="text-sm font-medium mb-1">Gender:</label>
                    <select v-model="filterParams.gender" id="gender"
                        class="border px-2 h-8 border-gray-300 rounded-md shadow-sm focus:outline focus:outline-1 focus:outline-blue-600">
                        <option value="">Select gender</option>
                        <option value="1">Male</option>
                        <option value="2">Female</option>
                        <!-- Add more options as needed -->
                    </select>
                </div>
            </div>
            <button type="submit"
                class="bg-blue-500 text-white px-4 py-1 mt-2 rounded-md hover:bg-blue-600 me-2">Filter</button>
            <button type="button"
                class="border border-blue-500 text-blue-600 px-4 py-1 mt-2 rounded-md hover:bg-blue-500 hover:text-white">Reset</button>
            <!-- Apply button styles -->
        </form>
    </div>
</template>

<script>
export default {
    name: 'UserFilter',
    data() {
        return {
            filterParams: {
                gmail: '',
                phone: '',
                username: '',
                role: '',
                gender: ''
            },
            data: {}
        }
    }
}
</script>