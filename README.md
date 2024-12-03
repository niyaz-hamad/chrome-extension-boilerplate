# Minimal Chrome extension (MV3) boilerplate with React, TypeScript, TailwindCSS, and Webpack

I found that existing solutions had the following problems: 
- poor folder structure, 
- excessive overhead, 
- and a lack of proper linting, type safety, and formatting.

Therefore, I created my own.

## How to use?

`npm start` is development build and `npm build` is production build.

**Remember to update the following to reflect your project:**

1. In the `manifest.json` file, update the `name` and `description` fields.
2. In the `package.json` file, update the `name`, `description`, `author`, and `license` fields.
3. In the `webpack.common.mjs` file, update the `title` variable within the `getHtmlPlugins` function.

### How to add a new page?

1. Navigate to the `src/pages` directory and model your new page after the existing ones.
2. Open `webpack.common.mjs` file and add your new page to the entry object, following the format of the existing entries.
3. Update `manifest.json` file as needed to include your new page.

### How to use environment variables?

1. Create a `.env` file in the root directory of your project.
2. Define your variables in the format: `VARIABLE_NAME=value`.
3. Access them through `process.env.VARIABLE_NAME`.

## Upcoming features

- `eslint-plugin-react-hooks` package (not yet supported with the latest version of React)
- Hot reloading
