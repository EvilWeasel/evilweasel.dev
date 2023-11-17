import * as fs from "fs";
import * as path from "path";
import * as glob from "glob";
import * as matter from "gray-matter";
// Get all markdown files in the directory
const files = glob.sync("src/content/guides/powershell/**/*.md");

files.forEach((file) => {
  let content = fs.readFileSync(file, "utf8");

  // Replace all links in the content
  content = content.replace(/\[(.*?)\]\((.*?)\)/g, (match, text, link) => {
    // Remove the ID from the link
    link = link.replace(/%20[0-9a-f]{24}/g, "");
    link = link.replace(/ /g, "-");
    link = link.replace(/\.md/g, "");
    // Append .md to the end of the link
    link = `${link}.md`;
    return `[${text}](${link})`;
  });

  // Write new content to file
  fs.writeFileSync(file, content);

  // Rename the file
  const newFilePath = file.replace(/%20[0-9a-f]{24}/g, "").replace(/ /g, "-");
  fs.renameSync(file, newFilePath);
});
