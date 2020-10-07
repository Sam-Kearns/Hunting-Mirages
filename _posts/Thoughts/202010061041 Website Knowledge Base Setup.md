Have been bouncing back and forth between a few different ideas for how to manage my Obsidian knowledge base. Particularly around how and where it is stored.

Currently it is a sub-folder of my website project. I did this for the primary reason that the website project is a JAMStack GIT repo where any commits to master will be immediately published to the Hunting Mirages website. This gives me a super low-friction publish workflow where I use Obsidian to add content to the knowledge base, then SourceTree to commit to origin/master, and then the new content will be auto deployed to the website. Keeping this workflow as simple as possible will be critical to keeping my website up to date on a daily basis.

If I don't keep the knowledge base as a sub-folder of this git repo, then I have to implement some sort of sync that will undoubtedly require extra steps and be clunky.

So far the studio session publish workflow will look like this:
* Go into studio and do studio session
* Export WAV of work done to NAS
* Upload WAV to Soundcloud
* Make studio session note with Soundcloud ID in website project using Obsidian
* Commit note to website repo

At a later time I may also add a video streaming step to the workflow
