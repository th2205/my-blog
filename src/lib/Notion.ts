import { Client } from "@notionhq/client";
import { NotionToMarkdown } from "notion-to-md";

interface PageInfo {
  url: string;
  cover?: {
    external: {
      url: string;
    };
  };
  properties: {
    title: any;
    created_at: any;
    published: any;
  };
}

interface ParsedPageInfo {
  pageId: string;
  coverUrl: string;
  title: string;
  createdAt: string;
  published: boolean;
}

class Notion {
  private readonly apiKey: string;
  private readonly databaseId: string;
  private readonly client: Client;
  private readonly n2m: NotionToMarkdown;

  constructor() {
    this.apiKey = process.env.NOTION_API_KEY as string;
    this.databaseId = process.env.NOTION_DATABASE_ID as string;
    this.client = new Client({ auth: this.apiKey });
    this.n2m = new NotionToMarkdown({ notionClient: this.client });
  }

  async getPagesMetaData() {
    const res = await this.client.databases.query({
      database_id: this.databaseId,
    });
    const results = res.results as unknown as PageInfo[];

    console.log("res", results);
    const pages = results.map((page) => {
      const pageId = this.getPageId(page.url);
      const coverUrl = page.cover?.external.url;
      const title = page.properties.title.title[0].plain_text;
      const createdAt = page.properties.created_at.date?.start;
      const published = page.properties.published.checkbox;

      console.log(page.properties.created_at.date?.start);

      return {
        pageId,
        coverUrl,
        title,
        createdAt,
        published,
      } as ParsedPageInfo;
    });

    return pages;

    // return pages.sort((a, b) => new Date("2022-01-01") - new Date(b.createdAt));
  }

  private getPageId(url: string) {
    const pageId = url.split("/").pop();

    if (!pageId) {
      return "";
    }

    if (pageId.includes("-")) {
      return pageId.split("-").pop();
    }

    return pageId;
  }

  async getPageMetaDataById(pageId: string) {
    const data = await this.getPagesMetaData();

    return data.find((page) => page.pageId === pageId);
  }

  async getPageMarkdown(pageId: string) {
    const mdblocks = await this.n2m.pageToMarkdown(pageId);
    const mdString = this.n2m.toMarkdownString(mdblocks);

    console.log("mdblocks", mdblocks);
    console.log("mdString", mdString.parent);

    return mdString.parent;
  }
}

export const notion = new Notion();
