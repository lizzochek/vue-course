<template>
  <section>
    <base-card>
      <h2>Register as a coach now</h2>
      <coach-form></coach-form>
    </base-card>
  </section>
</template>

<script>
import BaseCard from '../../base/BaseCard.vue';
import CoachForm from './CoachForm.vue';

export default {
  components: { CoachForm, BaseCard },
};
</script>
