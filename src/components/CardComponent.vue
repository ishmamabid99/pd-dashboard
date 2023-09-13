<template>
  <div class="m-4 sm:mt-12">
    <div class="bg-gray-50 pt-12 pb-16 px-12 shadow-md">
      <div v-if="editView == true" class="flex flex-row-reverse gap-4 mb-6">
        <div
          v-if="editMode === false"
          class="cursor-pointer shadow-2xl rounded-full border-1 p-2 hover:bg-gray-300 bg-gray-200"
        >
          <img class="h-8 w-8" :src="trashIcon" />
        </div>
        <div
          v-if="editMode === false"
          @click="enableEdit"
          class="cursor-pointer shadow-2xl rounded-full border-1 p-2 hover:bg-gray-300 bg-gray-200"
        >
          <img class="h-6 w-6 m-1" :src="editIcon" />
        </div>
        <div
          v-if="editMode === true"
          @click="enableEdit"
          class="cursor-pointer shadow-2xl rounded-full border-1 p-2 hover:bg-gray-300 bg-gray-200"
        >
          <img class="h-6 w-6 m-1" :src="saveIcon" />
        </div>
      </div>
      <div v-if="editMode == false">
        <div class="items-center justify-center">
          <span class="text-green-700 text-2xl sm:text-4xl">#{{ title }}</span>
          <span class="float-right text-green-600">@{{ author }}</span>
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
        <div class="flex flex-wrap mt-2">
          <span
            class="w-fit h-fit text-white text-base px-2 rounded-2xl m-1 bg-blue-800"
            v-for="item in tagsArray"
            :key="item.id"
          >
            <input
              hidden
              type="checkbox"
              :value="item"
              :id="item.id"
            />
            <label :for="item.id">{{
              item.title
            }}</label>
          </span>
        </div>
        <div
          @click="toggleModalShow"
          v-if="showAttachments"
          class="float-right mt-4 text-gray-500 text-sm sm:text-base cursor-pointer hover:text-green-700"
        >
          ({{ attachments }}) attachments
        </div>
      </div>
      <form v-if="editMode == true" @submit.prevent>
        <label
          for="title"
          class="text-green-700 text-base sm:text-xl font-semibold"
          >Title:</label
        >
        <input
          id="title"
          type="text"
          :value="title"
          class="py-2 mb-10 border-2 border-gray-400 focus:border-green-700 rounded-lg outline-0 px-4 w-full"
          placeholder="#Add a title"
        />
        <label
          for="content"
          class="text-green-700 text-base sm:text-xl font-semibold"
        >
          Description:
        </label>
        <textarea
          id="content"
          :value="content"
          rows="6"
          class="border-2 p-4 w-full mb-10 rounded-lg border-gray-400 focus:border-green-700 outline-0"
          placeholder="#Add a short description"
        />
      </form>
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
    <div class="px-12 lg:pr-12 mt-4 rounded-lg" v-if="showCommentData == true">
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
  <modal-component @close="toggleModalShow" v-if="showModal == true">
    <template v-slot:title>`Modal` </template>
  </modal-component>
</template>

<script>
import ModalComponent from "./ModalComponent.vue";
import editIcon from "../assets/edit-icon.png";
import trashIcon from "../assets/trash-icon.png";
import saveIcon from "../assets/save-icon.png";
import TagsArray from "../../data/data.js";
export default {
  components: { ModalComponent },
  props: ["showAttachments", "showComments", "editView"],
  data() {
    return {
      tagsArray: TagsArray,
      editMode: false,
      editIcon: editIcon,
      trashIcon: trashIcon,
      saveIcon: saveIcon,
      showModal: false,
      showMore: false,
      showLess: false,
      title: "Hi",
      author: "Ishmam abid",
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
    toggleModalShow() {
      this.showModal = !this.showModal;
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
    enableEdit() {
      this.editMode = !this.editMode;
    },
    submitEditData() {
      return true;
    },
  },
  mounted() {
    this.showMore = this.isTextOverflowed(this.$refs.contentContainer, 5);
  },
};
</script>

<style></style>
