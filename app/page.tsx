import Navbar from "@/components/navbar";
import { Button } from "@/components/ui/button";
import UploadImage from "@/components/upload-images";
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <h1>bem vindo </h1>
      <Button>teste</Button>
      <UploadImage />
    </div>
  );
}
