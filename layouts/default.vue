<template>
  <div>
    <TransitionRoot as="template" :show="sidebarOpen">
      <Dialog
        as="div"
        class="relative z-40 md:hidden"
        @close="sidebarOpen = false"
      >
        <TransitionChild
          as="template"
          enter="transition-opacity ease-linear duration-300"
          enter-from="opacity-0"
          enter-to="opacity-100"
          leave="transition-opacity ease-linear duration-300"
          leave-from="opacity-100"
          leave-to="opacity-0"
        >
          <div
            class="fixed inset-0 bg-neutral-600 bg-opacity-75 backdrop-blur"
          />
        </TransitionChild>

        <div class="fixed inset-0 z-40 flex">
          <TransitionChild
            as="template"
            enter="transition ease-in-out duration-300 transform"
            enter-from="-translate-x-full"
            enter-to="translate-x-0"
            leave="transition ease-in-out duration-300 transform"
            leave-from="translate-x-0"
            leave-to="-translate-x-full"
          >
            <DialogPanel
              class="relative flex w-full max-w-xs flex-1 flex-col bg-white"
            >
              <TransitionChild
                as="template"
                enter="ease-in-out duration-300"
                enter-from="opacity-0"
                enter-to="opacity-100"
                leave="ease-in-out duration-300"
                leave-from="opacity-100"
                leave-to="opacity-0"
              >
                <div class="absolute top-0 right-0 -mr-12 pt-2">
                  <button
                    type="button"
                    class="ml-1 flex h-10 w-10 items-center justify-center rounded-full focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
                    @click="sidebarOpen = false"
                  >
                    <span class="sr-only">Close sidebar</span>
                    <XIcon class="h-6 w-6 text-white" aria-hidden="true" />
                  </button>
                </div>
              </TransitionChild>

              <div class="h-0 flex-1 overflow-y-auto pt-5 pb-4">
                <nav class="space-y-1 px-2">
                  <NuxtLink
                    v-for="item in navigation"
                    :key="item.name"
                    :to="item.href"
                    :class="[
                      item.current
                        ? 'bg-neutral-100 text-neutral-900'
                        : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900',
                      'group flex items-center rounded-md px-2 py-2 text-base font-medium',
                    ]"
                  >
                    <component
                      :is="item.icon"
                      :class="[
                        item.current
                          ? 'text-neutral-500'
                          : 'text-neutral-400 group-hover:text-neutral-500',
                        'mr-4 h-6 w-6 flex-shrink-0',
                      ]"
                      aria-hidden="true"
                    />
                    {{ item.name }}
                  </NuxtLink>
                </nav>
              </div>

              <div
                v-if="!colorMode.forced"
                class="border-1 flex flex-shrink-0 border-neutral-200 p-4"
              >
                <SwitchGroup>
                  <div class="flex items-center">
                    <Switch
                      :class="
                        darkModeToggled ? 'bg-neutral-900' : 'bg-neutral-400'
                      "
                      class="relative inline-flex h-6 w-11 items-center rounded-full transition duration-200 ease-in-out"
                      :model-value="darkModeToggled"
                      @update:modelValue="onDarkModeToggle"
                    >
                      <span
                        :class="
                          darkModeToggled ? 'translate-x-6' : 'translate-x-1'
                        "
                        class="inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out"
                      />
                    </Switch>
                    <SwitchLabel class="ml-4">Dark Mode</SwitchLabel>
                  </div>
                </SwitchGroup>
              </div>
            </DialogPanel>
          </TransitionChild>

          <div class="w-14 flex-shrink-0" />
        </div>
      </Dialog>
    </TransitionRoot>

    <div class="hidden md:fixed md:inset-y-0 md:flex md:w-64 md:flex-col">
      <div
        class="flex min-h-0 flex-1 flex-col border-r border-neutral-200 bg-white"
      >
        <div class="flex flex-1 flex-col overflow-y-auto pt-5 pb-4">
          <nav class="flex-1 space-y-1 bg-white px-2">
            <a
              v-for="item in navigation"
              :key="item.name"
              :href="item.href"
              :class="[
                item.current
                  ? 'bg-neutral-100 text-neutral-900'
                  : 'text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900',
                'group flex items-center rounded-md px-2 py-2 text-sm font-medium',
              ]"
            >
              <component
                :is="item.icon"
                :class="[
                  item.current
                    ? 'text-neutral-500'
                    : 'text-neutral-400 group-hover:text-neutral-500',
                  'mr-3 h-6 w-6 flex-shrink-0',
                ]"
                aria-hidden="true"
              />
              {{ item.name }}
            </a>
          </nav>
        </div>

        <div
          v-if="!colorMode.forced"
          class="border-1 flex flex-shrink-0 border-neutral-200 p-4"
        >
          <SwitchGroup>
            <div class="flex items-center">
              <Switch
                :class="darkModeToggled ? 'bg-neutral-900' : 'bg-neutral-400'"
                class="relative inline-flex h-6 w-11 items-center rounded-full transition duration-200 ease-in-out"
                :model-value="darkModeToggled"
                @update:modelValue="onDarkModeToggle"
              >
                <span
                  :class="darkModeToggled ? 'translate-x-6' : 'translate-x-1'"
                  class="inline-block h-4 w-4 transform rounded-full bg-white transition duration-200 ease-in-out"
                />
              </Switch>
              <SwitchLabel class="ml-4">Dark Mode</SwitchLabel>
            </div>
          </SwitchGroup>
        </div>
      </div>
    </div>

    <button
      type="button"
      class="fixed top-1 left-1 z-10 inline-flex h-12 w-12 items-center justify-center rounded-md bg-white text-neutral-500 backdrop-blur hover:text-neutral-900 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-neutral-500 md:hidden"
      @click="sidebarOpen = true"
    >
      <span class="sr-only">Open sidebar</span>
      <MenuIcon class="h-6 w-6" aria-hidden="true" />
    </button>

    <main class="flex flex-1 flex-col md:pl-64">
      <slot />
    </main>
  </div>
</template>

<script setup>
import {
  Dialog,
  DialogPanel,
  Switch,
  SwitchLabel,
  SwitchGroup,
  TransitionChild,
  TransitionRoot,
} from "@headlessui/vue";
import {
  InformationCircleIcon,
  MenuIcon,
  BookOpenIcon,
  XIcon,
} from "@heroicons/vue/outline";

const navigation = [
  { name: "About", href: "/", icon: InformationCircleIcon, current: true },
  { name: "Reading", href: "/reading", icon: BookOpenIcon, current: false },
];

const colorMode = useColorMode();
const sidebarOpen = ref(false);

const darkModeToggled = computed(() => colorMode.value === "dark");
const onDarkModeToggle = (value) => {
  colorMode.preference = value ? "dark" : "light";
};
</script>
