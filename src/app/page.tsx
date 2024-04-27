import BottomBar from "@/components/bottom-bar";
import Navbar from "@/components/navbar";
import RepoCard from "@/components/repo-card";
import Image from "next/image";

export default function Home() {
  return (
    <main className="mt-24 mb-24">
      <Navbar></Navbar>
      {repoData.map(
        (item: {
          html_url: string;
          description: string;
          owner: any;
          name: string;
        }) => {
          return (
            <RepoCard
              username={item.owner.login}
              repoName={item.name}
              stars="4k"
              desc={item.description}
              href={item.html_url}
            />
          );
        }
      )}
      <BottomBar />
    </main>
  );
}
