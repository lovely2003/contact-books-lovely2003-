<template>
  <div>
    <h1>{{ contact.firstName }} {{ contact.lastName }}</h1>
    <p>Email: {{ contact.email }}</p>
    <router-link :to="'/edit/' + contact.id">Edit</router-link>
    <button @click="deleteContact">Delete</button>
    <router-link to="/">Back to Contacts</router-link>
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
    deleteContact() {
      let contacts = JSON.parse(localStorage.getItem('contacts')) || [];
      contacts = contacts.filter(c => c.id !== this.$route.params.id);
      localStorage.setItem('contacts', JSON.stringify(contacts));
      this.$router.push('/');
    },
  },
};
</script>
