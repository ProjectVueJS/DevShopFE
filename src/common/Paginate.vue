<template>
    <div id="paginate-bar w-full" v-if="meta">
        <ul class="inline-flex">
            <li v-if="meta.current_page !== 1"
                class="sm:text-sm text-xs px-3 py-1 mx-1 cursor-pointer rounded-lg hover:bg-blue-800 hover:text-white font-medium"
                @click="setPage(1)">
                <div class="flex">
                    <span class="place-content-center pi pi-angle-double-left" :title="text.first"></span>
                    <span class="hidden sm:block">{{ text.first }}</span>
                </div>
            </li>
            <li v-if="meta.current_page !== 1"
                class="sm:text-sm text-xs px-3 py-1 mx-1 cursor-pointer rounded-lg hover:bg-blue-800 hover:text-white font-medium"
                @click="setPage(meta.current_page - 1 ? meta.current_page - 1 : 1)">
                <div class="flex">
                    <span class="place-content-center pi pi-angle-left" :title="text.prev"></span>
                    <span class="hidden sm:block">{{ text.prev }}</span>
                </div>
            </li>
            <!--  -->
            <li class="sm:text-sm text-xs px-3 py-1 mx-1 cursor-pointer rounded-lg hover:bg-blue-800 hover:text-white font-medium"
                :class="{ 'bg-blue-800 text-white': meta.current_page == startPaginate + index }"
                @click="setPage(startPaginate + index)" v-for="(page, index) in endPaginate"
                :key="`pagi_item_${page + index}`">
                {{ startPaginate + index }}
            </li>
            <!--  -->
            <li v-if="meta.totalPage !== meta.current_page"
                class="sm:text-sm text-xs px-3 py-1 mx-1 cursor-pointer rounded-lg hover:bg-blue-800 hover:text-white font-medium"
                @click="setPage(meta.current_page + 1)">
                <div class="flex">
                    <span class="hidden sm:block">{{ text.next }}</span>
                    <span class="place-content-center pi pi-angle-right" :title="text.next"></span>
                </div>
            </li>
            <li v-if="meta.totalPage !== meta.current_page"
                class="sm:text-sm text-xs px-3 py-1 mx-1 cursor-pointer rounded-lg hover:bg-blue-800 hover:text-white font-medium"
                @click="setPage(meta.totalPage)">
                <div class="flex">
                    <span class="hidden sm:block">{{ text.last }}</span>
                    <span class="place-content-center pi pi-angle-double-right" :title="text.last"></span>
                </div>
            </li>
        </ul>
    </div>
</template>


<script setup>
import { textLang } from '@/utilities/lang/textLang';

</script>

<script>
export default {
    name: 'PaginateBar',
    props: {
        meta: {
            type: Object,
            default: () => { return null }
        }
    },
    data() {
        return {
            text: textLang[this.lang],
            startPaginate: 1,
            endPaginate: 3,
        }
    },
    created() {
        // console.log(this.meta);
    },
    watch: {
        meta: {
            handler(newVal) {
                if (newVal) {
                    if (this.meta.totalPage <= this.endPaginate) {
                        this.endPaginate = this.meta.totalPage
                    } else {
                        this.endPaginate = 3
                    }
                }
            },
            immediate: true
        }
    },
    methods: {
        setPage(page) {
            if (this.meta.totalPage <= this.endPaginate) {
                this.endPaginate = this.meta.totalPage
            } else {
                this.endPaginate = 3
            }

            if (this.meta.totalPage >= 3) {
                if (page == this.startPaginate + 2) {
                    this.startPaginate += 1;
                }
                if (page < this.startPaginate + 2) {
                    this.startPaginate = 1;
                }
                if (page >= this.startPaginate + 2) {
                    if ((this.startPaginate + 2) < this.meta.totalPage) {
                        this.startPaginate += 1
                    }
                }
            }


            this.$emit('setPage', page);
        },
    }
}
</script>