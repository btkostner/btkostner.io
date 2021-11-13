<template>
  <header class="flex-none px-6 hover-target transition motion-reduce:transition-none">
    <ul class="flex flex-row justify-end items-center space-x-6 container mx-auto">
      <layout-header-link exact to="/">
        About
      </layout-header-link>

      <layout-header-link to="/blog">
        Blog
      </layout-header-link>

      <layout-header-link to="/til">
        TIL
      </layout-header-link>
    </ul>
  </header>
</template>
