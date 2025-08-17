# [Start Bootstrap - Creative](https://startbootstrap.com/theme/creative/)

[Creative](https://startbootstrap.com/theme/creative/) is a one page, creative website theme built with [Bootstrap](https://getbootstrap.com/) created by [Start Bootstrap](https://startbootstrap.com/).


# StartBootstrap Creative - Dockerized Version

This project is a Dockerized version of the StartBootstrap Creative template. Now you can run it anywhere using Docker or Docker Compose without manual setup.

## Features
- Fully containerized single-stage build (multi-stage optional).
- Non-root user for secure builds.
- Build and serve handled inside Docker.
- Easy deployment using Docker Compose.

## Prerequisites
- Docker >= 20.x
- Docker Compose (optional for local dev)

<img width="1469" height="225" alt="Screenshot 2025-08-17 142714" src="https://github.com/user-attachments/assets/7795d7d7-537d-41fb-a98f-dbc6f1965f76" />

<img width="1811" height="862" alt="Screenshot 2025-08-17 142732" src="https://github.com/user-attachments/assets/5f31e8df-359b-4430-97c4-fc2d005e2c54" />

<img width="1902" height="276" alt="Screenshot 2025-08-17 143716" src="https://github.com/user-attachments/assets/da2d4ad8-05b1-4173-aa46-cafb1d977041" />
<img width="1517" height="266" alt="Screenshot 2025-08-17 143733" src="https://github.com/user-attachments/assets/f589cc4e-ef87-4d4a-ad85-382ef7c643ea" />



## How to Run
### Using Docker
```bash
docker build -t my-app:latest .
docker run -d -p 8080:8080 my-app:latest



## Preview

[![Creative Preview](https://assets.startbootstrap.com/img/screenshots/themes/creative.png)](https://startbootstrap.github.io/startbootstrap-creative/)

**[View Live Preview](https://startbootstrap.github.io/startbootstrap-creative/)**

## Status

[![GitHub license](https://img.shields.io/badge/license-MIT-blue.svg)](https://raw.githubusercontent.com/StartBootstrap/startbootstrap-creative/master/LICENSE)
[![npm version](https://img.shields.io/npm/v/startbootstrap-creative.svg)](https://www.npmjs.com/package/startbootstrap-creative)

## Download and Installation

To begin using this template, choose one of the following options to get started:

- [Download the latest release on Start Bootstrap](https://startbootstrap.com/theme/creative/)
- Install using npm: `npm i startbootstrap-creative`
- Clone the repo: `git clone https://github.com/StartBootstrap/startbootstrap-creative.git`
- [Fork, Clone, or Download on GitHub](https://github.com/StartBootstrap/startbootstrap-creative)

## Usage

### Basic Usage

After downloading, simply edit the HTML and CSS files included with `dist` directory. These are the only files you need to worry about, you can ignore everything else! To preview the changes you make to the code, you can open the `index.html` file in your web browser.

### Advanced Usage

Clone the source files of the theme and navigate into the theme's root directory. Run `npm install` and then run `npm start` which will open up a preview of the template in your default browser, watch for changes to core template files, and live reload the browser when changes are saved. You can view the `package.json` file to see which scripts are included.

#### npm Scripts

- `npm run build` builds the project - this builds assets, HTML, JS, and CSS into `dist`
- `npm run build:assets` copies the files in the `src/assets/` directory into `dist`
- `npm run build:pug` compiles the Pug located in the `src/pug/` directory into `dist`
- `npm run build:scripts` brings the `src/js/scripts.js` file into `dist`
- `npm run build:scss` compiles the SCSS files located in the `src/scss/` directory into `dist`
- `npm run clean` deletes the `dist` directory to prepare for rebuilding the project
- `npm run start:debug` runs the project in debug mode
- `npm start` or `npm run start` runs the project, launches a live preview in your default browser, and watches for changes made to files in `src`

You must have npm installed in order to use this build environment.

### Contact Form

The contact form available with this theme is prebuilt to use [SB Forms](https://startbootstrap.com/solution/contact-forms).
SB Forms is a simple form solution for adding functional forms to your theme. Since this theme is prebuilt using our
SB Forms markup, all you need to do is sign up for [SB Forms on Start Bootstrap](https://startbootstrap.com/solution/contact-forms).

After signing up you will need to set the domain name your form will be used on, and you will then see your
access key. Copy this and paste it into the `data-sb-form-api-token='API_TOKEN'` data attribute in place of
`API_TOKEN`. That's it! Your forms will be up and running!

If you aren't using SB Forms, simply delete the custom data attributes from the form, and remove the link above the
closing `</body>` tag to SB Forms.

## Bugs and Issues

Have a bug or an issue with this template? [Open a new issue](https://github.com/StartBootstrap/startbootstrap-creative/issues) here on GitHub or leave a comment on the [theme overview page at Start Bootstrap](https://startbootstrap.com/theme/creative/).

## About

Start Bootstrap is an open source library of free Bootstrap themes and templates. All of the free themes and templates on Start Bootstrap are released under the MIT license, which means you can use them for any purpose, even for commercial projects.

- <https://startbootstrap.com>
- <https://twitter.com/SBootstrap>

Start Bootstrap was created by and is maintained by **[David Miller](https://davidmiller.io/)**.

- <https://davidmiller.io>
- <https://twitter.com/davidmillerhere>
- <https://github.com/davidtmiller>

Start Bootstrap is based on the [Bootstrap](https://getbootstrap.com/) framework created by [Mark Otto](https://twitter.com/mdo) and [Jacob Thorton](https://twitter.com/fat).

## Copyright and License

Copyright 2013-2023 Start Bootstrap LLC. Code released under the [MIT](https://github.com/StartBootstrap/startbootstrap-creative/blob/master/LICENSE) license.
