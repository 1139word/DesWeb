<template>
  <nav class="flex justify-center gap-6 py-4 border-b border-gray-200">
    <router-link to="/" class="font-semibold hover:text-blue-600" exact-active-class="text-blue-600">Beranda</router-link>
    <router-link to="/fitur" class="font-semibold hover:text-blue-600" exact-active-class="text-blue-600">Fitur</router-link>
    <router-link to="/demo" class="font-semibold hover:text-blue-600" exact-active-class="text-blue-600">Demo</router-link>
    <router-link to="/kontak" class="font-semibold hover:text-blue-600" exact-active-class="text-blue-600">Kontak</router-link>
  </nav>

  <router-view />
</template>