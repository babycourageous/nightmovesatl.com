# 11ty Netlify Starter

[![Netlify Status](https://api.netlify.com/api/v1/badges/6ff39233-48f7-4f80-9a82-12b0ef08ec63/deploy-status)](https://app.netlify.com/sites/11ty-netlify-starter/deploys)

My first stop for kicking off a project using the [Eleventy](https://www.11ty.io/) static site generator.

This project starter includes the following:

- [Eleventy](https://www.11ty.io)
  - A date format filter for Nunjucks with [Date-fns](https://github.com/date-fns/date-fns)
- CSS withPostCSS processing
  - PostCSS Import
  - Pre CSS
  - Tailwind CSS
    - Tailwind Custom Forms
    - Tailwind Lobotomized Owl selector
  - Autoprefixer
  - CSSNano
- JS bundling with Rollup
- [Netlify Dev](https://www.netlify.com/products/dev)
  - [Netlify Redirects](https://netlify.com/docs/redirects/) in development
  - [Netlify Functions](https://www.netlify.com/products/functions) in development

![11ty Netlify Starter screenshot](./screenshot.png)

## Getting Started

Choose one of three ways to get started! Instructions use `yarn` but will work all the same with `npm` if that's your command of choice (just be sure to update `netlify.toml` if you prefer `npm`).

### One-Click Netlify Deploy

The fastest way to get this project cloned and continuously deployed to Netlify is to just click the button below and follow the instructions!

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/babycourageous/11ty-netlify-starter)

1. Netlify will clone this 11ty Netlify Starter git repository into your personal Github account (you will have to allow permissions for it to add the repo for you).
2. A new site will then be created for you in Netlify and it will be configured to use your new repo. You will then immediately be able to deploy changes by pushing changes to your repo.

### Degit

Simply put, the `degit` command makes copies of git repositories. Running the command below will find the latest commit and then download the associated tar file (without the entire git history). You can then `cd` into the directory and install the dependencies.

```sh
npx degit https://github.com/babycourageous/11ty-netlify-starter PROJECT_NAME
cd PROJECT_NAME && yarn
```

### Git Clone

The tride and true classic (and slightly more involved).

1. Clone this repo

```sh
 git clone --depth 1 https://github.com/babycourageous/11ty-netlify-starter.git PROJECT_NAME
```

2. `cd` into the project directory and remove git history

```
cd PROJECT_NAME && rm -rf .git
```

3. Install dependencies.

```sh
yarn
```

4. Start the development server. This will serve the site with all its assets using browsersync.

```sh
yarn start
```

5. Open a browser to `http://localhost:3000`

6. Optionally initiate a new git repo.

```sh
git init
```

## Structure

- 11ty-specific files and such like filters, etc for `.eleventy.js` config live in an `11ty` folder at the root level.
- All 11ty site files (pages, content, includes, layouts, site data, site assets, etc) live in `src` where they will be compiled by 11ty.
- Any data files placed in `src/_data` will be available to all pages inside `src`.
- CSS, javascript, images, and svg live in their own respective folders in `src/_assets/` where they will be processed by npm scripts and thoughtfully placed into the `_site` folder.
- Built output lives in `_site`.

## Netlify Dev

Having Netlify Dev installed adds Netlify redirects, proxies, and serverless functions to the mix.

1. Install the Netlify CLI globally

```sh
npm install -g netlify-cli
```

2. run a local server with some added Netlify sugar in front of Eleventy

```sh
netlify dev
```

or

```sh
ntl dev
```

This will detect the settings in the `netlify.toml` file and run the local development script alongside browswersync on port 3000 with all the sugar `netlify dev` provides (like being able to execute any of the serverless functions directly)!

### Netlify Functions

Netlify Dev proxies a development server alongside Eleventy so you can access the functions in development!

```
/.netlify/functions/node-fetch
```

### Netlify Lambda

In order to include function-specific node modules in the deployment without checking in node_modules `netlify lambda` is included as a post-build step. This will install and bundle any required modules alongside their function when Netlify builds the site for production.

### Redirects and proxies

An example redirect is included in the `netlify.toml` file via Netlify's Redirects API. This provides a more user-friendly URL as a proxy to the default.

```
/api/dad-joke
```

## TODO

- Add [NetlifyCMS](https://www.netlifycms.org/) to the project.
