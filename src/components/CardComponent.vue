<template>
  <div class="m-4 sm:mt-12">
    <div class="bg-gray-50 pt-12 pb-16 px-12 shadow-md">
      <div>
        <div ref="hi" class="items-center justify-center">
          <span class="text-green-700 text-2xl sm:text-4xl">#hii</span>
          <span class="float-right text-green-600">- Ishmam Abid</span>
        </div>
        <div
          ref="contentContainer"
          class="text-sm sm:text-base text-justify mt-6"
          :class="showMore ? 'line-clamp-5' : 'line-clamp-none'"
        >
          {{ content }}
        </div>
        <span
          @click="toggleShowMore"
          class="cursor-pointer text-sm text-green-600 sm:text-base"
          :class="showMore ? 'block' : 'hidden'"
          >continue reading</span
        >
        <span
          v-if="showLess"
          @click="toggleShowLess"
          class="cursor-pointer text-sm text-green-600 sm:text-base"
          :class="showLess ? 'block' : 'hidden'"
          >show less</span
        >
        <div
          v-if="showAttachments"
          class="float-right mt-4 text-gray-500 text-sm sm:text-base cursor-pointer hover:text-green-700"
        >
          ({{ attachments }}) attachments
        </div>
      </div>
      <div class="mt-12" v-if="showComments">
        <div class="flex mt-8 sm:mt-12 items-center gap-4 sm:gap-9 mb-4">
          <span class="hidden md:flex text-green-700 text-xl"
            >Leave a Comment:
          </span>
          <textarea
            placeholder="Add your comment"
            type="text"
            rows="1"
            class="text-xs sm:text-base w-full rounded-lg bg-white p-4 border-2 border-green-600 focus:outline-0"
          />
          <span
            class="bg-green-700 w-fit px-2 sm:px-6 py-2 rounded-lg text-xs sm:text-base text-white font-semibold cursor-pointer"
            >add</span
          >
        </div>
        <div
          @click="toggleShowComment"
          class="cursor-pointer hover:text-green-700 text-sm sm:text-base text-gray-500 float-right"
        >
          ({{ commentSize }})
          {{ showCommentData ? "hide comments" : "show comments" }}
        </div>
      </div>
    </div>
    <div class="px-12 lg:pr-12 mt-4 rounded-lg" v-if="showCommentData">
      <div class="text-base text-gray-500 sm:text-xl mb-2">Comments:</div>
      <div>
        <div
          class="border-b-2 p-6 bg-slate-50"
          v-for="(comment, index) in comments"
          :key="index"
        >
          <div class="float-right text-green-600 text-xs">
            @{{ comment.name }}
          </div>
          <div class="text-xs sm:text-sm">
            {{ comment.comment }}
          </div>
          <div class="float-right text-gray-600 text-xs">
            {{ comment.date }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <modal-component/>
</template>

<script>
import ModalComponent from "./ModalComponent.vue";
export default {
  components: { ModalComponent },
  props: ["showAttachments", "showComments"],
  data() {
    return {
      showMore: false,
      showLess: false,
      content:
        "Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed  quia non numquam eius modi tempora incidunt ut labore et dolore magnam  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum  exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex  ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in  ea voluptate velit esse quam nihil molestiae consequatur, vel illum  qui dolorem eum fugiat quo voluptas nulla pariatur? Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed  quia non numquam eius modi tempora incidunt ut labore et dolore magnam  aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum  exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex  ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in  ea voluptate velit esse quam nihil molestiae consequatur, vel illum  qui dolorem eum fugiat quo voluptas nulla pariatur?",
      commentSize: 0,
      attachments: 0,
      showCommentData: false,
      showAttachmentData: false,
      comments: [
        {
          date: "24-02-1999",
          name: "Ishmam",
          comment:
            "facing the same issue brother any solution yet?? acing the same issue brother any solution yet??acing the same issue brother any solution yet??acing the same issue brother any solution yet??acing the same issue brother any solution yet??acing the same issue brother any solution yet??acing the same issue brother any solution yet??acing the same issue brother any solution yet??",
        },
        {
          date: "24-02-1999",
          name: "Ishmam",
          comment: "facing the same issue brother any solution yet??",
        },

        {
          date: "24-02-1999",
          name: "Ishmam",
          comment: "facing the same issue brother any solution yet??",
        },
      ],
    };
  },
  methods: {
    toggleShowComment() {
      this.showCommentData = !this.showCommentData;
    },
    isTextOverflowed(element, lines) {
      if (!element) return false;
      const style = window.getComputedStyle(element);
      const lineHeight = parseFloat(style.lineHeight);
      const maxHeight = lines * lineHeight;
      return element.scrollHeight > maxHeight;
    },
    toggleShowMore() {
      this.showMore = false;
      this.showLess = true;
    },
    toggleShowLess() {
      this.showMore = true;
      this.showLess = false;
    },
    toggleAttachments() {
      this.showAttachmentData = !this.showAttachmentData;
    },
  },
  mounted() {
    this.showMore = this.isTextOverflowed(this.$refs.contentContainer, 5);
  },
};
</script>

<style></style>
