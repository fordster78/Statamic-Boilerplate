<template>
    <button :href="href" @click.prevent="scroll">
        <slot></slot>
    </button>
</template>

<script>
    export default {
        props: ['href'],
        methods: {
            scroll() {
                // For older browsers, consider pulling in a polyfill.
                // https://www.npmjs.com/package/smoothscroll-polyfill
                document.querySelector(this.href)
                        .scrollIntoView({ behavior: 'smooth' });
            }
        }
    }
</script>
