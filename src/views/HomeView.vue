<template>
  <main>
    <div class="flex flex-col justify-center items-center">

      <!-- DIRECTIVE TASK -->

      <div class="my-12">
        <h1 class="text-3xl">Focused input:</h1>
      </div>

      <div>
        <input type="text" class="border rounded p-2">
      </div>

      <div class="mt-6">
        <CustomInput />
      </div>

      <div class="mt-12">
        <CustomNotInput v-autofocus />
      </div>

      <div class="mt-12">
        <UiButton variant="accept" @click="showModal = true">Click me!</UiButton>
      </div>

      <!-- MODAL TASK -->

      <div class="mt-12">
        <GlobalModal :show="showModal" @close="showModal = false" :hideOnBackdropClick=true :closeButton="true">
          <template #header>
            <h4>Hi! This is our test modal!</h4>
          </template>

          <template #default>
            <h4>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sed, nemo at, reiciendis, deserunt inventore
              facilis repellat fugit vitae consequatur ipsa illum asperiores? Aspernatur quibusdam exercitationem beatae
              esse natus omnis nam.</h4>
          </template>

          <template #footer>
            <div class="flex justify-end items-center gap-2">
              <div>
                <UiButton variant="accept" @click="showModal = false">Accept!</UiButton>
              </div>
              <div>
                <UiButton variant="cancel" @click="showModal = false">Cancel</UiButton>
              </div>
            </div>
          </template>

        </GlobalModal>
      </div>
    </div>
  </main>
</template>

<script setup>
import { ref } from 'vue'
import CustomInput from '../components/CustomInput.vue'
import CustomNotInput from '../components/CustomNotInput.vue'
import UiButton from '../components/UiButton.vue'
import GlobalModal from '../components/GlobalModal.vue'

const showModal = ref(false);

</script>