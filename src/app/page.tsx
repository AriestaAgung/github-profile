import BottomBar from "@/components/bottom-bar";
import Navbar from "@/components/navbar";
import RepoCard from "@/components/repo-card";
import networkMgr, { URL_REPO_LIST } from "@/utils/network-manager";

export default async function Home() {
  const repoData = await networkMgr.get(URL_REPO_LIST)
  return (
    <main className="mt-24 mb-24">
      <Navbar></Navbar>
      <RepoCard data={repoData} />
      <BottomBar />
    </main>
  );
}
