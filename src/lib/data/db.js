import { createClient } from "@supabase/supabase-js";

const {
  VITE_SUPABASE_URL,
  VITE_SUPABASE_ANON_KEY,
  VITE_SUPABASE_MAIN_TABLE,
  VITE_SUPABASE_FILTER_TABLE,
  VITE_SUPABASE_REGISTRATION_TABLE,
} = import.meta.env;

export const supabase = createClient(VITE_SUPABASE_URL, VITE_SUPABASE_ANON_KEY);

// Fetch data from supabase, can add a query method later if needed
export default {
  main: {
    async all() {
      const { data, error } = await supabase
        .from(VITE_SUPABASE_MAIN_TABLE)
        .select("*");
      if (error) throw new Error(error.message);
      return data;
    },
  },
  filter: {
    async all() {
      const { data, error } = await supabase
        .from(VITE_SUPABASE_FILTER_TABLE)
        .select("*");
      if (error) throw new Error(error.message);
      return data;
    },
  },
  registration: {
    async all() {
      const { data, error } = await supabase
        .from(VITE_SUPABASE_REGISTRATION_TABLE)
        .select("*");
      if (error) throw new Error(error.message);
      return data;
    },
  },
};
