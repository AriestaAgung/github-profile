"use client";
import Link from "next/link";
import StarIcon from "./icons/star-icon";
import GithubRepos from "@/utils/repos";
import { useEffect, useState } from "react";

type RepoCardProp = {
  data?: GithubRepos[];
};

export default function RepoCard({ data }: RepoCardProp) {
  const [loading, isLoading] = useState(true);
  useEffect(() => {
    isLoading(false);
  }, data);
  if (data === undefined) {
    return (
      <div className="mx-5 my-5 py-5 px-5 max-h-40 max-w-full bg-main-color rounded-lg border-theme-dark-color border-2">
        <div className="flex flex-row justify-between items-center text-theme-dark-color">
          <div className="flex flex-col gap-2 animate-pulse" id="repo_title">
            <p className="font-bold">Repositories</p>
            <p className="text-sm">Description</p>
            <div className="flex flex-row gap-2 ">
              <StarIcon additionalClass="text-sm" />
              <p className="text-sm">4K</p>
            </div>
          </div>
          <div className="">
            <button className="text-sm border-2 border-secondary-dark-color px-2 py-1 rounded-lg hover:bg-secondary-dark-color hover:text-main-color hover:border-none hover:border-secondary-dark-color">
              Detail
            </button>
          </div>
        </div>
      </div>
    );
  } else if (loading == true) {
    return (
      <>
        <SkeletonRepoCard />
        <SkeletonRepoCard />
        <SkeletonRepoCard />
      </>
    );
  }
  return data.map((item, idx) => {
    <Link href={`${item.html_url}`} key={idx}>
      <div className="mx-5 my-5 py-5 px-5 max-h-40 max-w-full bg-main-color rounded-lg border-theme-dark-color border-2">
        <div className="flex flex-row justify-between items-center text-theme-dark-color">
          <div className="flex flex-col gap-2" id="repo_title">
            <p className="font-bold">{`${item.owner}/${item.name}`}</p>
            <p className="text-sm">{item.description}</p>
            <div className="flex flex-row gap-2 ">
              <StarIcon additionalClass="text-sm" />
              <p className="text-sm">{item.starred_url}</p>
            </div>
          </div>
          <div className="">
            <button className="text-sm border-2 border-secondary-dark-color px-2 py-1 rounded-lg hover:bg-secondary-dark-color hover:text-main-color hover:border-none hover:border-secondary-dark-color">
              Detail
            </button>
          </div>
        </div>
      </div>
    </Link>;
  });
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
