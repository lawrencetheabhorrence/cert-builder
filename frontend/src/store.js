import { writable } from 'svelte/store';

export const data = writable({
  firstname: "John",
  lastname: "Doe",
  course: "Infection Busters"
})
