<template>
    <div class="flex justify-content-center items-center">
        <!-- <i class="pi pi-bell place-content-center mx-2 text-white cursor-pointer p-2 relative"> 
            <span class="absolute top-0 inline-flex items-center rounded-full bg-red-50 px-2 p-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/10">11</span>
        </i> -->
        <span class="relative text-center h-10 rounded-full w-10 place-content-center mx-2 text-white">
            <i class="pi pi-bell p-2 cursor-pointer" @click="changeStatus">
                <span
                    class="select-none absolute top-0 right-0 inline-flex rounded-full bg-red-50 text-xs font-semibold min-h-5 min-w-5 text-red-700 place-content-center leading-5">
                    69
                </span>
            </i>

            <div id="list-notifice"
                class="bg-white shadow-lg overflow-hidden absolute top-full lg:right-0 md:right-0 sm:right-0 right-[-140px] lg:w-[400px] md:w-80 sm:w-80 w-80 rounded-md h-96"
                :class="{ 'hidden': !status, 'scale-in': scaleIn, 'scale-out': scaleOut }">
                <ul class="list-none p-2 w-full overflow-y-auto scroll-smooth h-[345px] ">
                    <li v-for="(item, index) in data" :key="index"
                        class="flex bg-white p-2 mb-2 rounded-md hover:bg-indigo-200 max-h-24 min-h-2 cursor-pointer ">
                        <div class="flex flex-col max-w-20">
                            <img src="https://demoda.vn/wp-content/uploads/2023/01/hinh-avatar-cute-ca-tinh-cho-nam-726x600.jpg"
                                alt="" class="bg-white rounded-full border border-gray-400 w-16 object-contain h-16">
                            <span class="text-gray-900 font-bold text-base text-center truncate">{{ item.user }}</span>
                        </div>
                        <div class="flex flex-col px-2 w-full max-w-full">
                            <span
                                class="text-gray-900 font-normal text-sm bg-green-200 border border-green-400  block rounded-md text-center">{{
                                    item.action }}</span>
                            <span class="text-gray-900 font-normal text-sm text-start mt-1 h-11 text-wrap block">{{
                                item.content.length > 55 ? item.content.substring(0, 55) + ' ...' : item.content
                                }}</span>
                        </div>
                    </li>
                    <li v-if="data.length == 0" class="text-gray-500 place-content-center h-full">Không có thông báo mới
                    </li>
                </ul>
                <button v-if="data.length > 0"
                    class="hover:bg-indigo-500 hover:text-white text-blue-900 py-2 rounded-b-md w-full">
                    Mark all as read
                </button>
            </div>
        </span>

    </div>
</template>




<script>
// import { ref } from "vue";
// import Listbox from 'primevue/listbox';
// const selectedNoti = ref();
// const notifications = ref();

export default {
    name: 'MenuNotifice',
    data() {
        return {
            status: false,
            scaleIn: false,
            scaleOut: false,
            data: [
                {
                    user: 'Anh Ba',
                    avata: 'https://demoda.vn/wp-content/uploads/2023/01/hinh-avatar-cute-ca-tinh-cho-nam-726x600.jpg',
                    action: 'Đặt hàng',
                    content: 'ODR-0969696',
                    read: true,
                },
                {
                    user: 'Chị Năm',
                    avata: 'https://demoda.vn/wp-content/uploads/2023/01/hinh-anh-avatar-cute-dep-cho-con-gai-600x600.jpg',
                    action: 'Đánh giá',
                    content: 'Hàng như ***',
                    read: true,
                },
            ]
        }
    },
    methods: {
        changeStatus: function () {
            if (this.status) {
                this.scaleOut = true
                this.scaleIn = false
                setTimeout(() => {
                    this.status = false
                }, 500);
            } else {
                this.scaleOut = false
                this.status = true
                this.scaleIn = true
            }
        }
    },
}
</script>


<style scoped>
.scale-in {
    animation: scaleIn 0.5s forwards;
    transform-origin: top right;

}

.scale-out {
    animation: scaleOut 0.5s forwards;
    transform-origin: top right;
}

@media only screen and (max-width: 638px) {
    .scale-in {
        animation: scaleIn 0.5s forwards;
        transform-origin: top;

    }

    .scale-out {
        animation: scaleOut 0.5s forwards;
        transform-origin: top;
    }
}

@keyframes scaleIn {
    from {
        transform: scale(0);
    }

    to {
        transform: scale(1);
    }
}

@keyframes scaleOut {
    from {
        transform: scale(1);
    }

    to {
        transform: scale(0);
    }
}
</style>