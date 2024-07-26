<template>
  <div>
    <h1>Edit Contact</h1>
    <form @submit.prevent="editContact">
      <div>
        <label for="firstName">First Name:</label>
        <input id="firstName" v-model="contact.firstName" required />
      </div>
      <div>
        <label for="lastName">Last Name:</label>
        <input id="lastName" v-model="contact.lastName" required />
      </div>
      <div>
        <label for="email">Email:</label>
        <input id="email" v-model="contact.email" required />
      </div>
      <button type="submit">Save Changes</button>
    </form>
    <router-link :to="'/contact/' + contact.id">Cancel</router-link>
  </div>
</template>

<script>
export default {
  data() {
    return {
      contact: {},
    };
  },
  created() {
    const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
    this.contact = contacts.find(c => c.id === this.$route.params.id);
  },
  methods: {
    editContact() {
      const contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      const index = contacts.findIndex(c => c.id === this.$route.params.id);
      if (index !== -1) {
        contacts.splice(index, 1, this.contact);
        localStorage.setItem('contacts', JSON.stringify(contacts));
        this.$router.push('/contact/' + this.contact.id);
      }
    },
  },
};
</script>
