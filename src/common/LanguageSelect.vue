<template>
    <div id="close-zone menu" class="fixed top-0 right-0 w-full h-full opacity-0 bg-green-500"
        @click="changeStatusMenuLanguage" :class="{ 'hidden': !MenuLanguageStatus }">
    </div>
    <div class="relative">
        <div name="lang" value="vi"
            class="h-[30px] ms-2 lg:ms-4 md:ms-4 sm:ms-0 w-32 max-w-auto cursor-pointer bg-white rounded-md select-none text-center border border-gray-500"
            @click="changeStatusMenuLanguage">
            <span class="">{{ language }}</span>
        </div>
        <ul class="z-10 absolute top-full right-0 list-none p-2 rounded-md w-32 max-w-auto h-auto shadow-md border border-gray-200 bg-white"
            :class="{ 'hidden': !MenuLanguageStatus, 'scale-in-t': scaleIn, 'scale-out-t': scaleOut }">
            <!-- <li class="rounded-t-md flex bg-white hover:bg-indigo-200 p-2 text-gray-800 cursor-pointer" value="vi" @click="changeLanguage('vi')">Tiếng Việt</li>
                       <span class="w-full block border-t border-gray-200"></span>
                       <li class="rounded-b-md flex bg-white hover:bg-indigo-200 p-2 text-gray-800 cursor-pointer" value="en" @click="changeLanguage('en')">Tiếng Anh</li> -->
            <div v-for="(item, index) in menuLang" :key="`lang_${index}`">
                <li class="flex bg-white hover:bg-indigo-200 p-2 text-gray-800 cursor-pointer"
                    :class="{ 'bg-indigo-200': item.active, 'rounded-t-md': index === 0, 'rounded-b-md': (index + 1) === menuLang.length }"
                    @click="changeLanguage(item.code)">
                    {{ item.name }}
                </li>
                <span v-if="(index + 1) < menuLang.length" class="w-full block border-t border-gray-200"></span>
            </div>
        </ul>
    </div>
</template>

<script>
import { AppAction } from "@/utilities/app";
import { MenuLanguage } from "@/utilities/menu"

export default {
    name: 'LanguageSelect',
    data() {
        return {
            menuLang: MenuLanguage[this.lang],
            MenuLanguageStatus: false,
            language: MenuLanguage[this.lang][0].name,
            scaleIn: false,
            scaleOut: false,
        }
    },
    methods: {
        changeStatusMenuLanguage() {
            console.log('changeStatusMenuLanguage');
            if (this.MenuLanguageStatus) {
                this.scaleOut = true;
                this.scaleIn = false;
                setTimeout(() => {
                    this.MenuLanguageStatus = false;
                }, 500);
            } else {
                this.scaleOut = false;
                this.MenuLanguageStatus = true;
                this.scaleIn = true;
            }
        },
        changeLanguage(lang) {
            AppAction.setLanguage(lang);
            this.changeStatusMenuLanguage = false;
            // this.changeStatusMenuLanguage()
        },
    },
}
</script>

<style scoped>
.scale-in-t {
    animation: scaleIn 0.4s forwards;
    transform-origin: top;

}

.scale-out-t {
    animation: scaleOut 0.4s forwards;
    transform-origin: top;
}

/* @keyframes scaleIn {
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
} */
</style>