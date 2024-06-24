<template>
    <Breadcrumb :home="breadcrumb.home" :model="breadcrumb.items" class="sm:text-sm text-xs">
        <template #item="{ item, props }">
            <router-link v-if="item.route" v-slot="{ href, navigate }" :to="item.route" custom>
                <a :href="href" v-bind="props.action" @click="navigate">
                    <span :class="[item.icon, 'text-color']" class="sm:text-sm text-xs"/>
                    <span class="text-primary font-semibold sm:text-sm text-xs">{{ item.label }}</span>
                </a>
            </router-link>
            <a v-else :href="item.url" :target="item.target" v-bind="props.action">
                <span class="text-color sm:text-sm text-xs">{{ item.label }}</span>
            </a>
        </template>
    </Breadcrumb>
</template>

<script>
import Breadcrumb from 'primevue/breadcrumb';

export default {
    name: 'BreadcrumbVue',
    props: {
        breadcrumb: {
            type: Object
        }
    },
    components: {
        Breadcrumb
    }
}
</script>