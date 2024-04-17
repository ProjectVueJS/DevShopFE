<template>
    <span v-show="isVisible" @mouseover="cancelHide" @mouseleave="restartTimer" id="notifice"
        class="border rounded-md px-2 py-3 font-medium w-72 max-w-full fixed right-5 top-5"
        :class="styleAlert">
        <i class="pi pi-check"></i>
        {{ message }}
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
    data() {
        return {
            isVisible: true,
            hover: false,
            countDown: null,
            timer: 2000,
            styleAlert: 'bg-green-100 text-green-500 border-green-500'
        }
    },
    methods: {
        cancelHide() {
            console.log('cancelHide');
            clearTimeout(this.countDown);
            console.log(clearTimeout(this.countDown));
            this.hover = true;
        },
        restartTimer() {
            console.log('restartTimer');
            this.hover = false;
        }
    },
    created() {
        console.log('created ' + this.typeAlert);
        if (this.typeAlert === 'error') {
            this.styleAlert = 'bg-red-100 text-red-500 border-red-500';
            console.log(this.styleAlert);
        } else if(this.typeAlert === 'warn') {
            this.styleAlert = 'bg-yellow-100 text-yellow-500 border-yellow-500';
            console.log(this.styleAlert);
        }
        console.log(this.timer = setInterval(() => {
            if (!this.hover) {
                this.isVisible = false;
                clearInterval(this.timer); // Stop the timer after hiding the notification
            }
        }, this.timer));
    }
}
</script>