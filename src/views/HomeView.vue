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
        <UiButton variant="accept" @click="onShowModal">Click me!</UiButton>
      </div>

      <!-- MODAL TASK -->

      <div class="mt-12">
        <GlobalModal :show="showModal" @close="onHide" :hideOnBackdropClick=true :closeButton="true">
          <template #header>
            <h4>WARNING!</h4>
          </template>

          <template #default>

            <p class="text-2xl text-center">Your keyboard will explode in <span class="text-5xl font-bold mx-5"> {{
              seconds
                }}
              </span> seconds! </p>

            <Transition name="fade">
              <div v-show="showNoWay" class="mt-6">
                <p v-if="seconds > 0"></p>
                <p class="text-2xl text-center">
                  Life is never that easy!
                </p>
              </div>
            </Transition>

            <Transition name="fade">
              <div v-show="seconds === 0" class="w-full py-12 mt-6 bg-[url('/public/pngegg.png')] bg-cover bg-center">
                <p class="text-7xl text-center">
                  Boom!
                </p>
              </div>
            </Transition>
          </template>

          <template #footer>
            <div class="flex justify-end items-center gap-2">
              <div>
                <UiButton variant="accept" @click="showNoWay = true">Don't explode</UiButton>
              </div>
              <div>
                <UiButton variant="cancel" @click="onHide">Cancel</UiButton>
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

const seconds = ref(9);
const isRunning = ref(false);

const startTimer = () => {
  if (isRunning.value) return;

  seconds.value = 9;
  isRunning.value = true;
  let timerInterval = setInterval(() => {
    if (seconds.value > 0) {
      seconds.value -= 1;
    } else {
      clearInterval(timerInterval);
      isRunning.value = false;
    }
  }, 1000);
};

const onShowModal = () => {
  showModal.value = true
  startTimer()
}

const showNoWay = ref(false);

const onHide = () => {
  showNoWay.value = false;
  showModal.value = false;
}

</script>

<style scoped>
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3s cubic-bezier(0.5, 0, 0.5, 1);
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>