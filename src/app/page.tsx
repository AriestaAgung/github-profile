import BottomBar from "@/components/bottom-bar";
import Navbar from "@/components/navbar";
import RepoCard from "@/components/repo-card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-24 mb-24">
      <Navbar></Navbar>
      <div>
        <RepoCard
          username="User"
          repoName="Repository"
          stars="4k"
          desc="This is a user repository"
        />
        <RepoCard
          username="User"
          repoName="Repository"
          stars="4k"
          desc="This is a user repository"
        />
        <RepoCard
          username="User"
          repoName="Repository"
          stars="4k"
          desc="This is a user repository"
        />
        <RepoCard
          username="User"
          repoName="Repository"
          stars="4k"
          desc="This is a user repository"
        />
        <RepoCard
          username="User"
          repoName="Repository"
          stars="4k"
          desc="This is a user repository"
        />
        <RepoCard
          username="User"
          repoName="Repository"
          stars="4k"
          desc="This is a user repository"
        />
        <RepoCard
          username="User"
          repoName="Repository"
          stars="4k"
          desc="This is a user repository"
        />
        <RepoCard
          username="User"
          repoName="Repository"
          stars="4k"
          desc="This is a user repository"
        />
        <RepoCard
          username="User"
          repoName="Repository"
          stars="4k"
          desc="This is a user repository"
        />
      </div>
      <BottomBar />
    </main>
  );
}
