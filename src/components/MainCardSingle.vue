<script setup>
import { faker } from '@faker-js/faker'
const fullname = faker.person.fullName()
</script>

<template>
    {{ fullname }} <br />
</template>