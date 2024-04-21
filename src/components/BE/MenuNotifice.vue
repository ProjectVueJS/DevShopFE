<template>
    <div id="close-zone menu" class="fixed top-0 right-0 w-full h-full opacity-0 bg-green-500" @click="changeStatus"
        :class="{ 'hidden': !status }">
    </div>
    <div class="flex justify-content-center items-center">
        <span class="relative text-center h-10 rounded-full mb-3 w-10 place-content-center md:mx-4 lg:mx-4 mx-2 text-white">
            <i class="pi pi-bell px-2 pt-4 cursor-pointer" @click="changeStatus">
                <span
                    class="select-none absolute top-1 right-0 inline-flex rounded-full bg-red-50 text-xs font-semibold min-h-5 min-w-5 text-red-700 place-content-center leading-5">
                    69
                </span>
            </i>
            <div id="list-notifice"
                class="z-10 shadow-md border border-gray-200 overflow-hidden absolute top-[145%] bg-white lg:right-0 md:right-0 sm:right-0 right-[-140px] lg:w-[400px] md:w-80 sm:w-80 w-80 rounded-md h-96"
                :class="{ 'hidden': !status, 'scale-in': scaleIn, 'scale-out': scaleOut }">
                <ul class="list-none p-2 w-full overflow-y-auto h-[345px]">
                    <li v-for="(item, index) in data" :key="index"
                        class="flex p-2 mb-2 rounded-md hover:bg-indigo-200 max-h-28 min-h-2 cursor-pointer"
                        :class="{'bg-indigo-200': item.read, 'bg-white': !item.read}">
                        <div class="flex flex-col max-w-20">
                            <img :src="item.avata" alt=""
                                class="rounded-full border border-gray-400 min-w-16 max-w-16 object-cover min-h-16 max-h-16 ">
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
                <span class="w-full block border-t border-gray-200"></span>
                <button v-if="data.length > 0"
                    class="hover:bg-indigo-500 hover:text-white text-blue-900 py-2 rounded-b-md w-full">
                    Mark all as read
                </button>
            </div>
        </span>

    </div>
</template>


<script>
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
                {
                    user: 'Anh Bảy',
                    avata: 'https://demoda.vn/wp-content/uploads/2022/01/anh-avatar-hai-meo-cuoi-mim-481x600.jpg',
                    action: 'Đặt câu hỏi',
                    content: 'Cái ly này có đựng được nước không',
                    read: false,
                },
            ]
        }
    },
    methods: {
        changeStatus: function () {
            // console.log('changeStatus');
            if (this.status) {
                this.scaleOut = true
                this.scaleIn = false
                setTimeout(() => {
                    this.status = false
                }, 400);
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
    animation: scaleIn 0.4s forwards;
    transform-origin: top right;

}

.scale-out {
    animation: scaleOut 0.4s forwards;
    transform-origin: top right;
}

</style>