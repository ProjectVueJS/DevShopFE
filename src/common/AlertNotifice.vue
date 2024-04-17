<template>
    <span id="notifice" class="border rounded-md px-2 py-3 font-medium w-72 max-w-full fixed right-5 top-5" 
        :class="{ 'bg-green-100 text-green-500 border-green-500': typeAlert === 'success' }">
        <i class="pi pi-check"></i>
        message
    </span>
</template>

<script>
export default {
    name: 'AlertNotifice',
    props: {
        typeAlert: {
            type: String,
            default: 'success'
        },
        message: {
            type: String,
            default: '11'
        }
    },
    created() {
        console.log(this.typeAlert);
        console.log(this.message);
    },
    // mounted() {
    //     console.log(this.typeAlert);
    //     console.log(this.message);
    // },
    data() {
        return {

        }
    },
}
</script>