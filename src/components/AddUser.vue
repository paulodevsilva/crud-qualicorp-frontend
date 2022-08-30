<template>
  <div class="submit-form">
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          required
          v-model="user.name"
          name="name"
        />
      </div>

      <div class="form-group">
        <label for="name">Email</label>
        <input
          type="text"
          class="form-control"
          id="email"
          required
          v-model="user.email"
          name="email"
        />
      </div>
      <div class="form-group">
        <label for="cpf">CPF</label>
        <input
          type="text"
          class="form-control"
          id="cpf"
          required
          v-model="user.cpf"
          name="cpf"
        />
      </div>

      <div class="form-group">
        <label for="phone">Phone</label>
        <input
          type="text"
          class="form-control"
          id="phone"
          required
          v-model="user.phone"
          name="phone"
        />
      </div>
      <div class="form-group">
        <label for="age">Age</label>
        <input
          type="number"
          class="form-control"
          id="age"
          required
          v-model="user.age"
          name="age"
        />
      </div>

      <button @click="saveUser" class="btn btn-success">Submit</button>
    </div>

    <div v-else>
      <h4>You submitted successfully!</h4>
      <button class="btn btn-success" @click="newUser">Add</button>
    </div>
  </div>
</template>

<script>
import UserDataService from './services/UserDataService';

export default {
  name: 'add-user',
  data() {
    return {
      user: {
        name: '',
        email: '',
        cpf: '',
        phone: '',
        age: 0,
      },
      submitted: false,
    };
  },
  methods: {
    saveUser() {
      let data = {
        name: this.user.name,
        email: this.user.email,
        cpf: this.user.cpf,
        phone: this.user.phone,
        age: this.user.age,
      };

      UserDataService.create(data)
        .then((response) => {
          console.log(response.data);
          this.submitted = true;
        })
        .catch((e) => {
          console.log(e);
        });
    },

    newUser() {
      this.submitted = false;
      this.user = {};
    },
  },
};
</script>

<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>
