import Link from "next/link";
import StarIcon from "./icons/star-icon";
import { url } from "inspector";

type RepoCardProps = {
  username: string;
  repoName: string;
  desc: string;
  stars: string;
  href: string;
};

export default function RepoCard({
  username,
  repoName,
  stars,
  desc,
  href,
}: RepoCardProps) {
  return (
    <Link href={href}>
      <div className="mx-5 my-5 py-5 px-5 max-h-40 max-w-full bg-main-color rounded-lg border-theme-dark-color border-2">
        <div className="flex flex-row justify-between items-center text-theme-dark-color">
          <div className="flex flex-col gap-2" id="repo_title">
            <p className="font-bold">{`${username}/${repoName}`}</p>
            <p className="text-sm">{desc}</p>
            <div className="flex flex-row gap-2 ">
              <StarIcon additionalClass="text-sm" />
              <p className="text-sm">{stars}</p>
            </div>
          </div>
          <div className="">
            <button className="text-sm border-2 border-secondary-dark-color px-2 py-1 rounded-lg hover:bg-secondary-dark-color hover:text-main-color hover:border-none hover:border-secondary-dark-color">
              Detail
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
}
