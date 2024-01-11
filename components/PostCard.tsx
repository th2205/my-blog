import Link from "next/link";

interface Props {
  pageId: string;
  coverUrl: string | undefined;
  title: string;
  createdAt: string;
}

export function PostCard({ pageId, createdAt, title, coverUrl }: Props) {
  return (
    <Link href={`/blog/${pageId}`}>
      <li className="bg-white rounded-xl shadow-md overflow-hidden cursor-pointer flex-auto w-[18rem]">
        <div className="flex flex-col">
          <div>
            <img
              src={coverUrl}
              className="h-48 w-full object-cover"
              height="192"
            />
          </div>
          <div className="p-4">
            <p className="block mt-1 text-lg leading-tight font-medium text-black">
              {title}
            </p>
            {/*<p className="mt-2 text-gray-500">Blog Post Description</p>*/}
            <p className="mt-2 text-xs text-gray-400">{createdAt}</p>
            <p className="mt-2 text-sm text-gray-500">
              Category: Category Name
            </p>
          </div>
        </div>
      </li>
    </Link>
  );
}
