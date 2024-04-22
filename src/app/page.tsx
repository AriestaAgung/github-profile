import BottomBar from "@/components/bottom-bar";
import Navbar from "@/components/navbar";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <BottomBar />
    </main>
  );
}
