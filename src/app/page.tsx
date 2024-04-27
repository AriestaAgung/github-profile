import BottomBar from "@/components/bottom-bar";
import Navbar from "@/components/navbar";
import RepoCard from "@/components/repo-card";
import networkMgr, { URL_REPO_LIST } from "@/utils/network-manager";
import { Url } from "next/dist/shared/lib/router/router";
import Image from "next/image";
import Link from "next/link";

export default async function Home() {
  const repoData = await networkMgr.get(URL_REPO_LIST);

  return (
    <main className="mt-24 mb-24">
      <Navbar></Navbar>
        {repoData.map(
          (item: {
            html_url: Url;
            description: string;
            owner: any;
            name: string;
          }) => {
            return (
              <Link href={item.html_url}>
                <RepoCard
                  username={item.owner.login}
                  repoName={item.name}
                  stars="4k"
                  desc={item.description}
                />
              </Link>
            );
          }
        )}
      <BottomBar />
    </main>
  );
}
