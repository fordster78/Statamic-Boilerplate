<template>
    <div class="w-full h-full">
        <transition name="overlay">
            <div class="w-full h-full bg-overlay z-10 fixed top-0 right-0" v-show="show" @click="$emit('close')">
                <transition name="slide">
                    <div class="h-full w-5/6 xs:w-3/4 bg-gray-50 border-t-4 border-blue-700 z-10 fixed top-0 right-0" v-if="show" @click.stop>
                        <div class="p-4 flex justify-between items-center">
                            <h1 class="pb-0 text-lg md:text-xl font-medium text-blue-600">
                                <slot name="header"></slot>
                            </h1>
                            <button type="button" @click="$emit('close')" class="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:text-gray-500 transition duration-150 ease-in-out">
                                <svg class="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
                                </svg>
                            </button>
                        </div>
                        <div>
                            <slot></slot>
                        </div>
                    </div>
                </transition>
            </div>
        </transition>
    </div>
</template>

<script>

export default {

    props: {
        show: {
            type: Boolean,
            default: false
            }
        },
    }

</script>

<style>

.overlay-enter-active, .overlay-leave-active {
    transition: all 0.3s ease-out;
}

.overlay-enter, .overlay-leave-to {
    background-color: rgba(0, 0, 0, 0.5);
}

.slide-enter-active, .slide-leave-active {
    transition: all 0.3s ease-out;
}

.slide-enter, .slide-leave-to {
    transform: translateX(200%);
}
</style>
