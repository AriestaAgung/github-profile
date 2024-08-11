import BottomBar from "@/components/bottom-bar";
import Navbar from "@/components/navbar";
import RepoCard from "@/components/repo-card";
import networkMgr, {DETAIL_URL_REPO, URL_REPO_LIST} from "@/utils/network-manager";
import GithubRepo from "@/utils/repos";

export default async function Home() {
    const repoData: GithubRepo[] = await networkMgr.get(URL_REPO_LIST)
    const repoPromises = repoData.map(async item => {
        const repos: Repository = await networkMgr.get(DETAIL_URL_REPO + `${item.full_name}`)
        return {repos, item}
    });
    let assignedData: { repos: Repository, item: GithubRepo }[] = []
    const starElement = Promise.all(repoPromises)
        .then(repo => {
            assignedData = repo
            return <RepoCard data={assignedData} />
        })
  return (
    <main className="mt-24 mb-24">
      <Navbar></Navbar>
        {
            starElement
        }
      <BottomBar />
    </main>
  );
}
