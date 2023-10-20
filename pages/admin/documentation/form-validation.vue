<script setup lang="ts">
import { object, string, type InferType } from 'yup'
import type { FormSubmitEvent } from '#ui/types'

definePageMeta({
  layout: 'dashboard'
})

const schema = object({
  email: string().email('Invalid email').required('Field is required'),
  password: string()
    .min(8, 'Must be at least 8 characters')
    .required('Field is required')
})

type Schema = InferType<typeof schema>

const forms = ref()
const state = ref<{ name: string | undefined, email: string | undefined, password: string | undefined }>({
  name: undefined,
  email: undefined,
  password: undefined
})

function onResetForm() {
  forms.value.clear()

  state.value = {
    name: undefined,
    email: undefined,
    password: undefined
  }
}

async function onSubmit(event: FormSubmitEvent<Schema>) {
  // Do something with event.data
  alert(JSON.stringify(event.data, null, 2))

  onResetForm()
}
</script>

<template>
  <h1 class="text-xl font-semibold">Form Validation</h1>

  <div class="grid grid-cols-12 gap-5 my-5">
    <div class="col-span-12">
      <UForm ref="forms" :schema="schema" :state="state" @submit="onSubmit">
        <formgroup label="Name" name="name" custom-class="mb-3">
          <UInput v-model="state.name" />
        </formgroup>

        <formgroup label="Email" name="email" required custom-class="mb-3">
          <UInput v-model="state.email" />
        </formgroup>

        <formgroup label="Password" name="password" required custom-class="mb-3">
          <UInput v-model="state.password" type="password" />
        </formgroup>

        <UButton color="gray" @click="onResetForm" class="me-3">
          Reset
        </UButton>

        <UButton type="submit">
          Submit
        </UButton>
      </UForm>
    </div>
  </div>
</template>

