<template>
    <div
        class="bg-notfound w-screen h-screen flex justify-center items-center flex-col"
    >
    <!-- :to="{ name: 'Home' }" -->
        <router-link
            to="/dashboard"
            class="button bg-blue-500 text-white border-blue-500 px-8 py-4 font-bold text-2xl rounded"
            >Go to Homepage</router-link
        >
    </div>
</template>

<script>
export default {}
</script>
<style lang="scss" scoped>
.bg-notfound {
    background-image: url('../assets/imgs/app/404.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
}
</style>