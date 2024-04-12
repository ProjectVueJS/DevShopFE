<!-- 
<template>
    <div class="card flex justify-content-center">
        <Button type="button" label="Toggle" @click="toggle" aria-haspopup="true" aria-controls="overlay_tmenu"></Button>
        <TieredMenu ref="menu" id="overlay_tmenu" :model="items" popup />
    </div>
</template>

<script setup>
import Button from "primevue/button";
import TieredMenu from "primevue/tieredmenu";
import { ref } from "vue";
const menu = ref();
const items = ref([
    {
        label: 'File',
        icon: 'pi pi-file',
        // items: [
        //     {
        //         label: 'New',
        //         icon: 'pi pi-plus',
        //         items: [
        //             {
        //                 label: 'Document',
        //                 icon: 'pi pi-file'
        //             },
        //             {
        //                 label: 'Image',
        //                 icon: 'pi pi-image'
        //             },
        //             {
        //                 label: 'Video',
        //                 icon: 'pi pi-video'
        //             }
        //         ]
        //     },
        //     {
        //         label: 'Open',
        //         icon: 'pi pi-folder-open'
        //     },
        //     {
        //         label: 'Print',
        //         icon: 'pi pi-print'
        //     }
        // ]
    },
    {
        label: 'Edit',
        icon: 'pi pi-file-edit',
      
    },
    {
        label: 'Search',
        icon: 'pi pi-search'
    },
    {
        separator: true
    },
    {
        label: 'Share',
        icon: 'pi pi-share-alt',
    }
]);

const toggle = (event) => {
    menu.value.toggle(event);

    // console.log(menu.value.toggle(event));
    // console.log(event);
};
</script> -->
