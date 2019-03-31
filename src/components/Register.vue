<template>
  <v-container fluid fill-height class="loginOverlay">
    <v-layout flex align-center justify-center>
      <v-flex xs12 sm4 elevation-6>
        <v-toolbar class="pt-5 pink darken-4">
          <v-toolbar-title class="white--text">
            <h4>Register your Account</h4>
          </v-toolbar-title>
          </v-toolbar-items>
        </v-toolbar>
        <v-card>
          <v-card-text class="pt-4">
            <div>
              <v-form v-model="valid" ref="form">
                <v-text-field label="Enter your e-mail address" v-model="email" :rules="emailRules" required></v-text-field>
                <v-text-field label="Enter your password" v-model="password" min="8" :append-icon="e1 ? 'visibility' : 'visibility_off'" @click:append="() => (e1 = !e1)" :type="e1 ? 'text' : 'password'" :rules="passwordRules" counter required></v-text-field>
                <v-layout justify-space-between>
                  <v-btn @click="register" :class=" { 'blue darken-4 white--text' : valid, disabled: !valid }">Register</v-btn>
                  <a href="#">Forgot Password</a>
                </v-layout>
              </v-form>
            </div>
          </v-card-text>
        </v-card>
      </v-flex>
    </v-layout>
  </v-container>
</template>

<script>

import firebase from 'firebase/app';
import 'firebase/auth';

export default {
  name: 'register',
  data: function() {
    return {
      email: '',
      password: '',
      valid: false,
        e1: false,
        email: '',
        password: '',
        passwordRules: [
          v => !!v || 'Password is required',
          v => v.length <= 10 || 'Password must be less than 10 characters'
        ],
        emailRules: [
          v => !!v || 'E-mail is required',
          v => /.+@.+/.test(v) || 'E-mail must be valid'
        ]
    };
  },
  methods: {
    register: function(e) {
      firebase
        .auth()
        .createUserWithEmailAndPassword(this.email, this.password)
        .then(
          user => {
            // console.log(user);
            alert(`Account Created for ${user.email}`);
            this.$router.go({ path: this.$router.path });
          },
          err => {
            alert(err.message);
          }
        );
      e.preventDefault();
    }
  }
};
</script>