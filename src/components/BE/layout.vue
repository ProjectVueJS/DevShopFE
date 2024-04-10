<script setup>
import SideBar from './SideBar'
</script>

<template>
    <div id="admin-layout ">
        <SideBar />
        <slot name="template"></slot>
    </div>
</template>

<script>

export default {
    name: 'LayoutAdmin'
}
</script>