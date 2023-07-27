<template>
  <card-component :show-attachments="false" :show-comments="false"/>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";

CardComponent;
export default {
  components: { CardComponent },
};
</script>

<style></style>
