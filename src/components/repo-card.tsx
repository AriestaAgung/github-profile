import StarIcon from "./icons/star-icon";

type RepoCardProps = {
  username: string;
  repoName: string;
  desc: string;
  stars: string;
};

export default function RepoCard({
  username,
  repoName,
  stars,
  desc,
}: RepoCardProps) {
  return (
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
          <button className="text-sm border-2 border-theme-dark-color px-2 py-1 rounded-lg">
            Detail
          </button>
        </div>
      </div>
    </div>
  );
}
