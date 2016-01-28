# Parteek webz 🔥🔥🔥

Static site for [Parteek](http://teek.me/) built using [Grow](https://grow.io/) and [Webpack](https://webpack.github.io/).

## Tools set-up

Make sure you have node and npm installed, preferably using [nvm](https://github.com/creationix/nvm). Run the following commands from the source root folder.

```
# Install the grow sdk
curl https://install.growsdk.org | bash

# Install webpack locally using npm
npm i

# Install webpack globally
npm install webpack -g
```

## Running development servers locally

In order to run grow in development mode you can use:

```
grow run
```

on the command line. Run this command in a terminal window in the source directory. This will run grow listening for incoming requests on the default `http://localhost:8080/` address.

Grow takes care of monitoring changes to any content or template directories and rebuilds the site as they change. It also monitors changes to SCSS files in the `source/sass` directory and rebuilds the CSS if anything changes.

JavaScript changes are built using Webpack. In another terminal window run the following command:

```
webpack --watch
```

This will run webpack in watch mode meaning any changes made to JS files in `source/js` will get rebuilt and pushed to `js/main.min.js`

With both these commands running you can safely edit CSS / JS and HTML and content will be rebuilt.

**NOTE**: This doesn't automatically refresh the browser window (yet). This should be a next update to the configs to allow auto reload.

## Content edits

All content lives inside the `content` folder. Project content is inside the `content/projects` folder. Editing content is as easy as editing the markdown content. Adding new projects can be done by adding a new markdown file and following a similar structure as the existing ones.

As new content is added, slight modifications to the templates might be necessary.

## Deploying to a local folder

Before doing a deploy to a local folder, ensure that the Javascript is minified by running `webpack -p`.

Grow makes it really easy to add various deployment locations. For now only local is provided. You can deploy the site to local `deploy` folder using the following command:

```
grow deploy default
```

This will bundle up all static files and assets and deploy them to the location specified. See the [grow deploy docs](https://grow.io/docs/deployment/) for more options.
