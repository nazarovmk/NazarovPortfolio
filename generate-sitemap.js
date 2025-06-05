// generate-sitemap.js
import { SitemapStream, streamToPromise } from "sitemap";
import { createWriteStream } from "fs";
import { Readable } from "stream";

const links = [
  { url: "/", changefreq: "monthly", priority: 1.0 },
  { url: "/portfolio", changefreq: "monthly", priority: 0.8 },
  { url: "/contact", changefreq: "monthly", priority: 0.6 },
  // Add more routes as needed
];

const stream = new SitemapStream({ hostname: "https://www.nazarovweb.uz/" });

streamToPromise(Readable.from(links).pipe(stream)).then((data) =>
  createWriteStream("./dist/sitemap.xml").end(data)
);
