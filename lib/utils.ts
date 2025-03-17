import { clsx, type ClassValue } from "clsx"
import { twMerge } from "tailwind-merge"
import { supabase } from "./supabse";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export const uploadImage = async (file: File) => {
  const fileExt = file.name.split(".").pop();
  const fileName = `${Date.now()}.${fileExt}`;
  const filePath = `images/${fileName}`;

  const { data, error } = await supabase.storage
    .from("anuncios") // Nome do bucket
    .upload(filePath, file);

  if (error) throw error;

  return data?.path;
};