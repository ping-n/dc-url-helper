import { writable } from "svelte/store";
import { mainUrlData, registrationData, filteredData } from "$lib/data/data";

export let mainUrl = writable(mainUrlData);

export let filteredUrl = writable(filteredData);

export let registrationUrl = writable(registrationData);
