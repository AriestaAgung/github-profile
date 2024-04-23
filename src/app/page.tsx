import BottomBar from "@/components/bottom-bar";
import Navbar from "@/components/navbar";
import RepoCard from "@/components/repo-card";
import Image from "next/image";

export default function Home() {
  return (
    <main>
      <Navbar></Navbar>
      <RepoCard
        username="User"
        repoName="Repository"
        stars="4k"
        desc="This is a user repository"
      />
      <BottomBar />
    </main>
  );
}
