<template>
    <div v-show="isVisible" @mouseover="cancelHide" @mouseleave="hideAlert" id="notifice"
        class="border rounded-md px-2 py-3 font-medium w-auto min-w-72 fixed right-2 top-2"
        :class="styleAlert">
        <i :class="iconAlert"></i>
        {{ message }}
    </div>
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
            styleAlert: 'bg-green-100 text-green-500 border-green-500',
            iconAlert: 'pi pi-check'
        }
    },
    methods: {
        cancelHide() {
            console.log('cancelHide');
            clearTimeout(this.countDown);
            this.hover = true;
        },
        hideAlert() {
            console.log('hideAlert');
            this.hover = false;
            this.$emit('resetAlertStatus'); //call method on parent component
        }
    },
    created() {
        console.log('created ' + this.typeAlert);
        if (this.typeAlert === 'error') {
            this.styleAlert = 'bg-red-100 text-red-500 border-red-500';
            this.iconAlert = 'pi pi-times-circle';
            // console.log(this.styleAlert);
        } else if(this.typeAlert === 'warn') {
            this.styleAlert = 'bg-yellow-100 text-yellow-500 border-yellow-500';
            this.iconAlert = 'pi pi-exclamation-triangle';
            // console.log(this.styleAlert);
        }
        this.countDown = setInterval(() => {
            if (!this.hover) {
                this.isVisible = false;
                this.$emit('resetAlertStatus'); //call method on parent component
                clearInterval(this.timer); // Stop the timer after hiding the notification
            }
        }, this.timer)
    }
}
</script>