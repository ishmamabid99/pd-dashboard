<template>
  <div>
    <card-component :showAttachments="showAttachments" :showComments="showComments"/>
  </div>
</template>

<script>
import CardComponent from "@/components/CardComponent.vue";
export default {
  components: { CardComponent },
  data() {
    return {
      showComments: true,
      showAttachments: true,
    };
  },
};
</script>

<style>
</style>