import supabase from "./supabase";

export async function getCabin() {
  let { data, error } = await supabase.from("cabin").select("*");

  if (error) {
    console.error(error);
    throw new Error("Cabins could not be loaded");
  }

  console.log(data);
  return data;

  
  
}
