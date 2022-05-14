<template>
  <form @submit.prevent="submitForm">
    <div class="form-control" :class="{ invalid: !firstName.isValid }">
      <label for="firstname">Firstname</label>
      <input
        type="text"
        id="firstname"
        v-model.trim="firstName.val"
        @blur="clearValidity('firstName')"
      />
      <p v-if="!firstName.isValid">Firstname must not be empty</p>
    </div>
    <div class="form-control" :class="{ invalid: !lastName.isValid }">
      <label for="lastname">Lastname</label>
      <input
        type="text"
        id="lastname"
        v-model.trim="lastName.val"
        @blur="clearValidity('lastName')"
      />
    </div>
    <p v-if="!lastName.isValid">Lastname must not be empty</p>
    <div class="form-control" :class="{ invalid: !description.isValid }">
      <label for="description">Description</label>
      <textarea
        id="description"
        rows="5"
        v-model.trim="description.val"
        @blur="clearValidity('description')"
      />
    </div>
    <p v-if="!description.isValid">Description must not be empty</p>
    <div class="form-control" :class="{ invalid: !rate.isValid }">
      <label for="rate">Hourly rate</label>
      <input
        type="number"
        id="rate"
        v-model.number="rate.val"
        @blur="clearValidity('rate')"
      />
    </div>
    <p v-if="!rate.isValid">Price enter a valid price</p>
    <div class="form-control" :class="{ invalid: !areas.isValid }">
      <h3>Areas of expertise</h3>
      <div>
        <input
          type="checkbox"
          id="frontend"
          value="frontend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="frontend">Frontend Development</label>
      </div>

      <div>
        <input
          type="checkbox"
          id="backend"
          value="backend"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="backend">Backend Development</label>
      </div>
      <div>
        <input
          type="checkbox"
          id="career"
          value="career"
          v-model="areas.val"
          @blur="clearValidity('areas')"
        />
        <label for="career">Career advisory</label>
      </div>
      <p v-if="!areas.isValid">Please select at least one area</p>
    </div>
    <p v-if="!formValid">Please fix the above errors and submit again</p>
    <base-button>Register</base-button>
  </form>
</template>

<script>
export default {
  emits: ['save-data'],
  data() {
    return {
      firstName: {
        val: '',
        isValid: true,
      },
      lastName: {
        val: '',
        isValid: true,
      },
      description: {
        val: '',
        isValid: true,
      },
      rate: {
        val: null,
        isValid: true,
      },
      areas: {
        val: [],
        isValid: true,
      },
      formValid: true,
    };
  },
  methods: {
    clearValidity(input) {
      this[input].isValid = true;
    },

    validateForm() {
      this.formValid = true;
      for (let object of Object.values(this.$data)) {
        if (typeof object !== 'object') continue;
        if (Array.isArray(object.val) && object.val.length === 0) {
          object.isValid = false;
          this.formValid = false;
        }
        if (!object.val || object.val < 0) {
          object.isValid = false;
          this.formValid = false;
        }
      }
    },
    submitForm() {
      this.validateForm();
      if (!this.formValid) return;

      const formData = {
        firstName: this.firstName.val,
        lastName: this.lastName.val,
        description: this.description.val,
        hourlyRate: this.rate.val,
        areas: this.areas.val,
      };
      this.$emit('save-data', formData);
    },
  },
};
</script>

<style scoped>
.form-control {
  margin: 0.5rem 0;
}

label {
  font-weight: bold;
  display: block;
  margin-bottom: 0.5rem;
}

input[type='checkbox'] + label {
  font-weight: normal;
  display: inline;
  margin: 0 0 0 0.5rem;
}

input,
textarea {
  display: block;
  width: 100%;
  border: 1px solid #ccc;
  font: inherit;
}

input:focus,
textarea:focus {
  background-color: #f0e6fd;
  outline: none;
  border-color: #3d008d;
}

input[type='checkbox'] {
  display: inline;
  width: auto;
  border: none;
}

input[type='checkbox']:focus {
  outline: #3d008d solid 1px;
}

h3 {
  margin: 0.5rem 0;
  font-size: 1rem;
}

.invalid label {
  color: red;
}

.invalid input,
.invalid textarea {
  border: 1px solid red;
}
</style>
