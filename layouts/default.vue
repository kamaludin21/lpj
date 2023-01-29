<template>
  <main class="flex h-screen">
    <nav
      :class="
        showSidebar ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      "
      class="fixed h-screen w-3/5 transform border-r-2 bg-gray-100 transition-all md:w-1/3 lg:static lg:w-1/5"
    >
      <div
        class="mb-4 flex flex-col items-center justify-center space-x-0 space-y-2 p-4 lg:flex-row lg:space-x-2 lg:space-y-0 lg:p-6"
      >
        <img
          src="/img/sticky-note.png"
          alt="Flaticon IMG"
          class="h-auto w-12"
        />
        <p
          class="hidden whitespace-nowrap rounded-lg bg-blue-400 px-2 text-xl font-black text-white lg:block"
        >
          MY APP
        </p>
      </div>
      <hr class="my-4 hidden lg:block" />
      <p class="px-6 pb-2 text-sm font-medium text-slate-500">Main Menu</p>
      <ul class="space-y-4">
        <li
          class="active-menu flex w-full cursor-pointer items-center pl-4 pr-2"
        >
          <div
            class="flex w-full space-x-2 rounded-lg bg-blue-500 py-2 px-4 text-white"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 stroke-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M19 8.71l-5.333 -4.148a2.666 2.666 0 0 0 -3.274 0l-5.334 4.148a2.665 2.665 0 0 0 -1.029 2.105v7.2a2 2 0 0 0 2 2h12a2 2 0 0 0 2 -2v-7.2c0 -.823 -.38 -1.6 -1.03 -2.105"
              ></path>
              <path d="M16 15c-2.21 1.333 -5.792 1.333 -8 0"></path>
            </svg>

            <p class="pt-0.5 font-medium">Dashboard</p>
          </div>
        </li>
        <li class="group flex w-full cursor-pointer items-center pl-4 pr-2">
          <div
            class="flex w-full space-x-2 rounded-lg py-2 px-2 text-gray-700 duration-300 hover:bg-blue-200 group-hover:px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 stroke-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <rect x="3" y="7" width="18" height="13" rx="2"></rect>
              <path d="M8 7v-2a2 2 0 0 1 2 -2h4a2 2 0 0 1 2 2v2"></path>
              <line x1="12" y1="12" x2="12" y2="12.01"></line>
              <path d="M3 13a20 20 0 0 0 18 0"></path>
            </svg>

            <p class="pt-0.5 font-medium">My Projects</p>
          </div>
        </li>
        <li class="group flex w-full cursor-pointer items-center pl-4 pr-2">
          <div
            class="flex w-full space-x-2 rounded-lg py-2 px-2 text-gray-700 duration-300 hover:bg-blue-200 group-hover:px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 stroke-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M10.325 4.317c.426 -1.756 2.924 -1.756 3.35 0a1.724 1.724 0 0 0 2.573 1.066c1.543 -.94 3.31 .826 2.37 2.37a1.724 1.724 0 0 0 1.065 2.572c1.756 .426 1.756 2.924 0 3.35a1.724 1.724 0 0 0 -1.066 2.573c.94 1.543 -.826 3.31 -2.37 2.37a1.724 1.724 0 0 0 -2.572 1.065c-.426 1.756 -2.924 1.756 -3.35 0a1.724 1.724 0 0 0 -2.573 -1.066c-1.543 .94 -3.31 -.826 -2.37 -2.37a1.724 1.724 0 0 0 -1.065 -2.572c-1.756 -.426 -1.756 -2.924 0 -3.35a1.724 1.724 0 0 0 1.066 -2.573c-.94 -1.543 .826 -3.31 2.37 -2.37c1 .608 2.296 .07 2.572 -1.065z"
              ></path>
              <circle cx="12" cy="12" r="3"></circle>
            </svg>

            <p class="pt-0.5 font-medium">Setting</p>
          </div>
        </li>
      </ul>
      <hr class="my-4" />
      <p class="px-6 pb-2 text-sm font-medium text-slate-500">Persona</p>
      <ul class="space-y-4">
        <li class="group flex w-full cursor-pointer items-center pl-4 pr-2">
          <div
            class="flex w-full space-x-2 rounded-lg py-2 px-2 text-gray-700 duration-300 hover:bg-blue-200 group-hover:px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 stroke-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path
                d="M10 5a2 2 0 0 1 4 0a7 7 0 0 1 4 6v3a4 4 0 0 0 2 3h-16a4 4 0 0 0 2 -3v-3a7 7 0 0 1 4 -6"
              ></path>
              <path d="M9 17v1a3 3 0 0 0 6 0v-1"></path>
            </svg>

            <p class="pt-0.5 font-medium">Notifikasi</p>
          </div>
        </li>
        <li class="group flex w-full cursor-pointer items-center pl-4 pr-2">
          <div
            class="flex w-full space-x-2 rounded-lg py-2 px-2 text-gray-700 duration-300 hover:bg-blue-200 group-hover:px-4"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6 stroke-2"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
              <path d="M15 10l-4 4l6 6l4 -16l-18 7l4 2l2 6l3 -4"></path>
            </svg>

            <p class="pt-0.5 font-medium">Pesan</p>
          </div>
        </li>
      </ul>
    </nav>
    <nav
      class="z-10 flex w-full items-center justify-between self-start border-b-2 bg-gray-100 p-4"
    >
      <button @click="showSidebar = !showSidebar" class="block lg:hidden">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-8 w-8"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          stroke-width="2"
          stroke="currentColor"
          fill="none"
          stroke-linecap="round"
          stroke-linejoin="round"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none"></path>
          <line x1="4" y1="6" x2="20" y2="6"></line>
          <line x1="4" y1="12" x2="20" y2="12"></line>
          <line x1="4" y1="18" x2="20" y2="18"></line>
        </svg>
      </button>
      <div class="flex items-end space-x-2">
        <p class="text-lg">Hi,</p>
        <p class="text-3xl font-medium">Kamal</p>
      </div>
      <div class="group relative flex cursor-pointer items-center">
        <div
          class="z-10 flex h-10 w-10 rounded-xl bg-white ring-1 ring-gray-300"
        >
          <img
            src="/img/man.jpeg"
            alt="user"
            class="z-0 h-full w-full rounded-xl object-cover"
          />
        </div>

        <div class="absolute right-0 top-0 hidden pt-12 group-hover:block">
          <div
            class="w-fit space-y-2 rounded-lg border-2 bg-white py-2 px-4 shadow-md"
          >
            <div class="">
              <p class="text-sm font-medium text-gray-500">Kamaludin</p>
              <p class="text-xs font-normal text-gray-500">
                kamal.zyel@gmail.com
              </p>
            </div>
            <hr />
            <ul>
              <li class="cursor-pointer hover:underline">Profile</li>
              <li class="cursor-pointer hover:underline">Sign Out</li>
            </ul>
          </div>
        </div>
      </div>
    </nav>

    <!-- <section class="w-full">
      <slot />
    </section> -->
  </main>
</template>

<script setup>
  import { ref } from 'vue'

  let showSidebar = ref(false)
</script>

<style lang="postcss">
  .active-menu {
    @apply after:absolute after:left-0 after:h-10 after:w-2 after:rounded-full after:bg-blue-500 after:lg:h-9;
  }
</style>
