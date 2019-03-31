<template></template>
<script>
    import firebase from 'firebase/app';
    import 'firebase/app';
    import 'firebase/auth';
    export default {
        created: function() {
            let router = this.$router;
            firebase.auth().signOut()
                .then(function() {
                    router.go('/login');
                })
                .catch(function(error) {
                    console.log(error)
                });
        }
    }
</script>