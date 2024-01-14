import Link from "next/link";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "./ui/card";
import Image from "next/image";
import { Badge } from "./ui/badge";

interface Props {
  pageId: string;
  coverUrl: string | undefined;
  title: string;
  createdAt: string;
}

export function PostCard({ pageId, createdAt, title, coverUrl }: Props) {
  return (
    <Card className="flex-grow: 1 flex-shrink-1">
      <Link href={`/blog/${pageId}`}>
        <Image
          src={coverUrl!}
          alt={"cover"}
          width={320}
          height={200}
          objectFit={"cover"}
          placeholder={"blur"}
          blurDataURL={coverUrl!}
          style={{
            width: "320px",
            height: "200px",
            borderRadius: "0.5rem",
            objectFit: "cover",
          }}
        />
        <CardHeader className={"px-0 py-3"}>
          <div>
            <Badge variant={"secondary"}>자바</Badge>
            <Badge variant={"secondary"}>일상</Badge>
          </div>
        </CardHeader>
        <CardContent className={"px-1"}>
          <CardTitle className={"pb-2 "}>{title}</CardTitle>
          <CardDescription className={"text-black"}>
            asdmasldhqajkshjk
          </CardDescription>
        </CardContent>
        <CardFooter className={"px-1"}>
          <div>
            <CardDescription>{createdAt}</CardDescription>
          </div>
        </CardFooter>
      </Link>
    </Card>
  );
}
