<template>
    <nav class="navbar is-info" role="navigation" aria-label="main navigation">
        <div class="container is-max-desktop">
            <div class="navbar-brand">
                <div class="navbar-item is-size-4 is-family-arial">NoteBalls</div>

                <a role="button" :class="{ 'is-active': showMobileNav }" class="navbar-burger " aria-label="menu"
                    aria-expanded="false" data-target="navbarBasicExample" @click.prevent="showMobileNav = !showMobileNav">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div id="navbarBasicExample" class="navbar-menu" :class="{ 'is-active': showMobileNav }">
                <div class="navbar-start">
                    <button class="button is-small is-light mt-3 ml-3">
                        Log out
                    </button>
                </div>
                <div class="navbar-end">

                    <RouterLink
                      @click="showMobileNav = false"
                      class="navbar-item"
                      active-class="is-active"
                      to="/"
                    >Notes
                    </RouterLink>

                   <RouterLink
                      @click="showMobileNav = false"
                      class="navbar-item"
                      active-class="is-active"
                      to="/stats"
                    >
                        Stats
                    </RouterLink>

                </div>
            </div>
        </div>
    </nav>
</template>

<script setup>
import { ref } from 'vue';

const showMobileNav = ref(false);

</script>


<style>
@media (max-width: 1023px) {
    .navbar-menu {
        position: absolute;
        left: 0;
        width: 100%;
    }
}
</style>