<template>
  <div>
    <the-header></the-header>
    <button @click="setSelected('active-goals')">Active Goal</button>
    <button @click="setSelected('manage-goals')">Manage Goals</button>
    <!-- <active-goals v-if="selectedComponent === 'active-goals'"></active-goals>
    <manage-goals v-if="selectedComponent === 'manage-goals'"></manage-goals> -->
    <keep-alive>
      <component :is="selectedComponent"></component>
    </keep-alive>
  </div>

  <!-- Reference code 
  <badge-list></badge-list>
  <user-info
  :full-name="activeUser.name"
  :info-text="activeUser.description"
  :role="activeUser.role"
></user-info>
<course-goals>
      <template #default="slotProps">
        <h2>{{ slotProps.item }}</h2>
      </template>
    </course-goals> -->
</template>

<script>
import TheHeader from "./components/TheHeader.vue";
// import BadgeList from "./components/BadgeList.vue";
// import UserInfo from "./components/UserInfo.vue";
// import CourseGoals from "./components/CoarseGoals.vue";
import ActiveGoals from "./components/ActiveGoals.vue";
import ManageGoals from "./components/ManageGoals.vue";

export default {
  components: {
    TheHeader,
    // BadgeList,
    // UserInfo,
    // CourseGoals,
    ActiveGoals,
    ManageGoals,
  },
  data() {
    return {
      selectedComponent: "active-goals",
      activeUser: {
        name: "Liza Dolhova",
        description: "Site owner and admin",
        role: "admin",
      },
    };
  },
  methods: {
    setSelected(cmp) {
      this.selectedComponent = cmp;
    },
  },
};
</script>

<style>
html {
  font-family: sans-serif;
}

body {
  margin: 0;
}
</style>
