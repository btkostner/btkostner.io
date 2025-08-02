<script setup>
const route = useRoute();

navigateTo({
  path: `/reading/${route.params.slug.join("/")}`,
});
</script>
