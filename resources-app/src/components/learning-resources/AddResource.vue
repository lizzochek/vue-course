<template>
  <base-dialog v-if="inputInvalid" title="Invalid input" @close="confirmError">
    <template #default>
      <p>Unfortunately, at list one input value is invalid.</p>
    </template>
    <template #actions>
      <base-button @click="confirmError">Okay!</base-button>
    </template>
  </base-dialog>
  <base-card>
    <form @submit.prevent="submitData">
      <div>
        <label for="title">Title</label>
        <input id="title" name="title" type="text" ref="titleInput" />
      </div>
      <div>
        <label for="title">Description</label>
        <textarea id="title" name="title" type="text" ref="descInput" />
      </div>
      <div>
        <label for="link">Link</label>
        <textarea id="link" name="link" type="url" ref="linkInput" />
      </div>
      <div>
        <base-button type="submit">Add resource</base-button>
      </div>
    </form>
  </base-card>
</template>

<script>
import BaseButton from '../UI/BaseButton.vue';
export default {
  components: { BaseButton },
  inject: ['addResource'],
  data() {
    return {
      inputInvalid: false,
    };
  },
  methods: {
    submitData() {
      const enteredTitle = this.$refs.titleInput.value;
      const enteredDesc = this.$refs.descInput.value;
      const enteredUrl = this.$refs.linkInput.value;

      if (
        enteredTitle.trim() === '' ||
        enteredDesc.trim() === '' ||
        enteredUrl.trim() === ''
      ) {
        return (this.inputInvalid = true);
      }
      this.addResource(enteredTitle, enteredDesc, enteredUrl);
    },
    confirmError() {
      this.inputInvalid = false;
    },
  },
};
</script>

<style scoped>
label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  font: inherit;
  padding: 0.15rem;
  border: 1px solid #ccc;
}

input:focus,
textarea:focus {
  outline: none;
  border-color: #3a0061;
  background-color: #f7ebff;
}

.form-control {
  margin: 1rem 0;
}
</style>
