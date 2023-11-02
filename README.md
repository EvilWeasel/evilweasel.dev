# EvilWeasel.dev

[link to deployment](https://evilweasel-blog.netlify.app) 

This is the source-code for my personal homepage and devblog.
On my blog you'll find posts and guides all about `it` and `software-development`, as well as links to my other projects.

This repo is just for the source-code and content of my blog.


## Contributing to / Reusing this Project

This project is licensed under AGPLv3. If you don't know what that means, here's the **TLDR**:
You may **use**/**modify**/**commercialy use** this project how you see fit, as long as you:

1. **Disclose** your source-code.
2. Release your code using the **same or an equally permissive license**.
3. **State the changes you made** to the original work (within reason).

*Also...*
> THERE IS NO WARRANTY FOR THE PROGRAM, TO THE EXTENT PERMITTED BY
> APPLICABLE LAW.


## 🚀 Project Structure

Inside of an Astro project, we have the following folders and files:

```sh
/
├── public/ # Static-Assets 
│   └── favicon.svg
├── src/  # All Source-Code
│   ├── components/ # UI-Components / Custom-Elements
│   │   └── Card.astro
│   ├── layouts/  # Layout-Templates
│   │   └── Layout.astro
│   └── pages/  # Sites with filepath-based-routing
│       │── posts/  # ...todo
│       └── index.astro # Route: localhost:4321/
└── package.json
```

Astro looks for `.astro` or `.md` files in the `src/pages/` directory. Each page is exposed as a route based on its file name.

There's nothing special about `src/components/`, but that's where we like to put any Astro/React/Vue/Svelte/Preact components.

Any static assets, like images, can be placed in the `public/` directory.
However, since Astro 3.0, a better way to store images is in a `images/` folder inside `src/`. That way the images will get served in optimized image-formats, like `avif` or `webp`.


## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `bun install`             | Installs dependencies                            |
| `bun run dev`             | Starts local dev server at `localhost:4321`      |
| `bun run build`           | Build your production site to `./dist/`          |
| `bun run preview`         | Preview your build locally, before deploying     |
| `bun run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `bun run astro -- --help` | Get help using the Astro CLI                     |

> 💡Note:
> Prefix `bun` to the `bun run <param>` command, to actually run the command with the bun-runtime. This is done, so a hoster that does not yet support bun can build the site in a CI-Environment ^_^

```sh
bun run bunbuild # builds the project using bun instead of node
bun run bundev # starts the dev-server with `bun` runtime
```


## 👀 Want to learn more?

Feel free to check [the official documentation](https://docs.astro.build).
