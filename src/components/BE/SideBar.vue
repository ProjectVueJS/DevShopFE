<template>
    <div>
        <!-- desktop/laptop -->
        <div id="website-sidebar" class="bg-blue-950">
            <div class="lg:flex md:flex sm::flex hidden flex-col w-80 h-screen p-0 overflow-y-auto">
                <!-- <h2 class="text-3xl font-semibold text-center text-blue-800">Logo</h2> -->
                <div class="logo-admin bg-[#1c1536] rounded-md cursor-pointer h-14 p-1">
                    <img src="../../assets/imgs/app/dev-logo.png" class="h-full object-contain mx-auto" alt="">
                </div>
                <div class="flex flex-col justify-between mt-6 px-2">
                    <aside>
                        <ul>
                            <div class="" v-for="(parentMenu, index) in menu" :key="`parent_${index}`">
                                <li v-if="parentMenu.child.length === 0">
                                    <router-link :to="parentMenu.linkTo" class="flex items-center px-4 py-2 mt-3 text-white rounded-md hover:bg-[#5064aa]"
                                        href="#">
                                        <i :class="parentMenu.icon"></i>
                                        <span class="mx-4 font-medium lg:text-base md:text-sm">{{parentMenu.name}}</span>
                                    </router-link>
                                </li>
                               
                                <li v-else>
                                    <a class="flex justify-between items-center px-4 py-2 mt-3 text-white rounded-md hover:bg-[#5064aa]"
                                        href="#" @click="toggleMenu" :parent-toggle-menu="parentMenu.name">
                                        <div class="">
                                            <i :class="parentMenu.icon"></i>
                                            <span class="mx-4 font-medium lg:text-base md:text-sm">{{ parentMenu.name }}</span>
                                        </div>
                                        <i class="pi pi-angle-right"></i>
                                    </a>
                                </li>
                                
                                <li :child-toggle-menu="parentMenu.name" class="child-menu" style="display: none;">
                                    <ul class="bg-[#5064aa] w-full rounded-md">
                                        <li v-for="(childMenu, i) in parentMenu.child" :key="`child_${i}`">
                                            <router-link :to="childMenu.linkTo" class="flex items-center py-2 ps-5 mt-2 text-white hover:bg-blue-800"
                                                href="#" :class="{'hover:rounded-t-md': i === 0, 'hover:rounded-b-md': (i+1) === parentMenu.child.length }">
                                                <span class="ms-5 font-medium lg:text-base md:text-sm">{{ childMenu.name }}</span>
                                            </router-link>
                                        </li>
                                    </ul>
                                </li>

                            </div>
                        </ul>
                    </aside>
                </div>
            </div>
        </div>


    </div>
</template>
<script>
export default {
    name: 'SideBar',
    props: {
        menu: {
            type: [Array, Object],
            // default: adminSideBar
        }
    },
    created() {
    },
    data() {
        return {
        }
    },
    methods: {
        toggleMenu(event) {
            event.preventDefault();
            var parentToggleMenu = event.currentTarget.getAttribute('parent-toggle-menu');
            var parentIcon = document.querySelector(`[parent-toggle-menu="${parentToggleMenu}"]`).lastElementChild;
            var childToggleMenu = document.querySelector(`[child-toggle-menu="${parentToggleMenu}"]`);
            if (childToggleMenu.style.display === 'none') {
                parentIcon.classList.value = 'pi pi-angle-down'
                childToggleMenu.style.display = 'block';
            } else {
                parentIcon.classList.value = 'pi pi-angle-right'
                childToggleMenu.style.display = 'none';
            }
        },
    }
}
</script>
