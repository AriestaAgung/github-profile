"use client";
import Link from "next/link";
import StarIcon from "./icons/star-icon";
import GithubRepos from "@/utils/repos";
import { useEffect, useState } from "react";
import networkMgr, {BASE_URL, DETAIL_URL_REPO} from "@/utils/network-manager";
import getPaging from "@/utils/paging";

type RepoCardProp = {
  data?: GithubRepos[];
};

export default function RepoCard({ data }: RepoCardProp) {
  const limit = 4
  const [loading, isLoading] = useState(true);
  const [paging, setPage] = useState(1);
  useEffect(() => {
    isLoading(false);
  }, [data]);
  const loadAction = () => {
    setPage(paging+limit);
    console.log(paging);
  };

  if (loading) {
    return (
      <>
        <SkeletonRepoCard />
        <SkeletonRepoCard />
        <SkeletonRepoCard />
      </>
    );
  } else if (!data || data.length === 0) {
    console.log("LOADING_ERROR_NODATA");
    return (
        <>
      <SkeletonRepoCard />
      <SkeletonRepoCard />
      <SkeletonRepoCard />
    </>
    );
  } else if (data && data.length > 1) {
    const currentData = getPaging(paging + limit, data);
    const repoItem: Repository[] = [];
    currentData.map(async (item, idx) => {
      const repos: Repository = await networkMgr.get(DETAIL_URL_REPO + `${item.full_name}`)
      if (repos != null) {
        console.log(`PPPPPPPPPPPP ${idx}`)
        repoItem.push(repos)
      }
    });
    for (const item in repoItem) {
      console.log(item)
    }
    return (
        <div>
          {
            currentData.map( (item, idx) =>
                <Link key={item.id} href={`${item.html_url}`}>
                  <RepoCardView item={item} repoData={repoItem[idx]} />
                </Link>
            )
          }
          <div className={'flex justify-center items-center'}>
            <button onClick={loadAction} className={`bg-secondary-dark-color p-3 rounded-md text-white`}>Load More...</button>
          </div>
        </div>
    );
  }
}

export function RepoCardView({item, repoData}: { item: GithubRepos, repoData?: Repository }) {
  return (
      <>
        <div
            className="mx-5 my-5 py-5 px-5 max-h-40 max-w-full bg-main-color rounded-lg border-theme-dark-color border-2">
          <div className="flex flex-row justify-between items-center text-theme-dark-color">
            <div className="flex flex-col gap-2" id="repo_title">
              <p className="font-bold">{`${item.full_name}`}</p>
              <p className="text-sm">{item.description}</p>
              <div className="flex flex-row gap-2 ">
                <StarIcon additionalClass="text-lg"/>
                <p className="text-sm">{`${repoData?.stargazers_count ?? ""}`}</p>
              </div>
            </div>
            <div className="">
              <button
                  className="text-sm border-2 border-secondary-dark-color px-2 py-1 rounded-lg hover:bg-secondary-dark-color hover:text-main-color hover:border-none hover:border-secondary-dark-color">
                Detail
              </button>
            </div>
          </div>
        </div>
      </>
  );
}

export function SkeletonRepoCard() {
  return (
    <div className="mx-5 my-5 py-5 px-5 max-h-40 max-w-full bg-main-color rounded-lg border-theme-dark-color border-2">
      <div className="flex flex-row justify-between items-center text-theme-dark-color">
        <div className="flex flex-col gap-2" id="repo_title">
          <p className="font-bold animate-pulse w-20 h-6 bg-slate-400 rounded-lg"></p>
          <p className="text-sm animate-pulse w-20 h-6 bg-slate-400 rounded-lg"></p>
          <div className="flex flex-row gap-2 ">
            <StarIcon additionalClass="text-sm" />
            <p className="text-sm">4K</p>
          </div>
        </div>
        <div className="">
          <button className="text-sm px-2 py-1 hover:bg-secondary-dark-color hover:text-main-color hover:border-none hover:border-secondary-dark-color animate-pulse w-20 h-7 bg-slate-400 rounded-lg"></button>
        </div>
      </div>
    </div>
  );
}
