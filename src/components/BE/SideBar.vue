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
                            <li>
                                <a class="flex items-center px-4 py-2 text-white bg-[#5064aa] rounded-md " href="#">
                                    <i class="pi pi-home "></i>
                                    <span class="mx-4 font-medium lg:text-base md:text-sm">Dashboard</span>
                                </a>
                            </li>

                            <li>
                                <a class="flex items-center px-4 py-2 mt-3 text-white rounded-md hover:bg-[#5064aa]"
                                    href="#">
                                    <i class="pi pi-th-large"></i>
                                    <span class="mx-4 font-medium lg:text-base md:text-sm">Product Management</span>
                                </a>
                            </li>

                            <li>
                                <a class="flex items-center px-4 py-2 mt-3 text-white rounded-md hover:bg-[#5064aa]"
                                    href="#">
                                    <i class="pi pi-list"></i>
                                    <span class="mx-4 font-medium lg:text-base md:text-sm">Category Management</span>
                                </a>
                            </li>

                            <li>
                                <a class="flex items-center px-4 py-2 mt-3 text-white rounded-md hover:bg-[#5064aa]"
                                    href="#">
                                    <i class="pi pi-users"></i>
                                    <span class="mx-4 font-medium lg:text-base md:text-sm">Customer Management</span>
                                </a>
                            </li>

                            <li>
                                <a class="flex items-center px-4 py-2 mt-3 text-white rounded-md hover:bg-[#5064aa]"
                                    href="#">
                                    <i class="pi pi-receipt"></i>
                                    <span class="mx-4 font-medium lg:text-base md:text-sm">Order Management</span>
                                </a>
                            </li>

                            <li>
                                <a class="flex items-center px-4 py-2 mt-3 text-white rounded-md hover:bg-[#5064aa]"
                                    href="#">
                                    <i class="pi pi-cog"></i>
                                    <span class="mx-4 font-medium lg:text-base md:text-sm">Settings</span>
                                </a>
                            </li>
                            <li>
                                <a class="flex justify-between items-center px-4 py-2 mt-3 text-white rounded-md hover:bg-[#5064aa]"
                                    href="#" @click="toggleMenu" parent-toggle-menu="Administration">
                                    <div class="">
                                        <i class="pi pi-cog"></i>
                                        <span class="mx-4 font-medium lg:text-base md:text-sm">Administration</span>
                                    </div>
                                    <i class="pi pi-angle-right"></i>
                                </a>
                            </li>
                            <li child-toggle-menu="Administration" style="display: none;">
                                <ul class="bg-[#5064aa] w-full rounded-md">
                                    <li>
                                        <a class="flex items-center py-2 ps-5 mt-2 text-white hover:rounded-t-md hover:bg-blue-800"
                                            href="#">
                                            <span class="ms-5 font-medium lg:text-base md:text-sm">User
                                                Management</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="flex items-center py-2 ps-5 mt-2 text-white hover:bg-blue-800"
                                            href="#">
                                            <span class="ms-5 font-medium lg:text-base md:text-sm">Collaborators</span>
                                        </a>
                                    </li>
                                    <li>
                                        <a class="flex items-center py-2 ps-5 mt-2 text-white hover:rounded-b-md hover:bg-blue-800"
                                            href="#">
                                            <span class="ms-5 font-medium lg:text-base md:text-sm">Role &
                                                Permission</span>
                                        </a>
                                    </li>
                                </ul>
                            </li>
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
        }
    }
}
</script>
