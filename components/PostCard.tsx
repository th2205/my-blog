import Link from "next/link";
import Image from "next/image";
import React from "react";

interface Props {
  pageId: string;
  coverUrl: string | undefined;
  title: string;
  createdAt: string;
}

export function PostCard({ pageId, createdAt, title, coverUrl }: Props) {
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure className="object-cover max-h-56">
        <Image
          src={coverUrl!}
          alt="cover"
          placeholder={"blur"}
          blurDataURL={coverUrl!}
          width={320}
          height={200}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
          }}
        />
      </figure>
      {/*<div className="badge badge-secondary">NEW</div>*/}
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="pt-6">
          <p className="text-sm	">{createdAt}</p>
        </div>
        <div className="flex  justify-end items-center">
          <Link href={`/blog/${pageId}`}>
            <button className="btn ">READ</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
