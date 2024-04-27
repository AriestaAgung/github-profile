import BottomBar from "@/components/bottom-bar";
import Navbar from "@/components/navbar";
import RepoCard from "@/components/repo-card";
import networkMgr, { URL_REPO_LIST } from "@/utils/network-manager";
import GithubRepos from "@/utils/repos";
import { QueryClientProvider, useQuery } from "@tanstack/react-query";

export default async function Home() {
  const repoData = await networkMgr.get(URL_REPO_LIST);
  return (
    <main className="mt-24 mb-24">
      <Navbar></Navbar>
      <RepoCard data={repoData} />
      <BottomBar />
    </main>
  );
}
