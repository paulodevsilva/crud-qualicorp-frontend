// eslint-disable-next-line no-loss-of-precision
<template>
  <div v-if="currentUser" class="edit-form">
    <h4>User</h4>
    <form>
      <div class="form-group">
        <label for="name">Name</label>
        <input
          type="text"
          class="form-control"
          id="name"
          v-model="currentUser.name"
        />
      </div>
      <div class="form-group">
        <label for="email">Email</label>
        <input
          type="text"
          class="form-control"
          id="email"
          v-model="currentUser.email"
        />
      </div>
      <div class="form-group">
        <label for="cpf">CPF</label>
        <input
          type="text"
          class="form-control"
          id="cpf"
          v-model="currentUser.cpf"
        />
      </div>
      <div class="form-group">
        <label for="phone">Phone</label>
        <input
          type="text"
          class="form-control"
          id="phone"
          v-model="currentUser.phone"
        />
      </div>
      <div class="form-group">
        <label for="age">Age</label>
        <input
          type="number"
          class="form-control"
          id="age"
          v-model="currentUser.age"
        />
      </div>
    </form>
    <button class="" @click="deleteUser">Delete</button>

    <button type="submit" class="" @click="updateUser">Update</button>
    <p>{{ message }}</p>
  </div>

  <div v-else>
    <br />
    <p>Please click on a User...</p>
  </div>
</template>

<script>
import UserDataService from './services/UserDataService';

export default {
  // eslint-disable-next-line vue/multi-word-component-names
  name: 'user',
  data() {
    return {
      currentUser: null,
      message: '',
    };
  },
  methods: {
    getUser(id) {
      UserDataService.get(id)
        .then((response) => {
          this.currentUser = response.data;
          console.log(response.data);
        })
        .catch((e) => {
          console.log(e);
        });
    },
    updateUser() {
      UserDataService.update(this.currentUser._id, this.currentUser)
        .then((response) => {
          console.log(response.data);
          this.message = 'The user was updated successfully!';
        })
        .catch((e) => {
          console.log(e);
        });
    },

    deleteUser() {
      UserDataService.delete(this.currentUser._id)
        .then((response) => {
          console.log(response.data);
          this.$router.push({ name: 'users' });
        })
        .catch((e) => {
          console.log(e);
        });
    },
  },
  mounted() {
    this.message = '';
    this.getUser(this.$route.params.id);
  },
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>
