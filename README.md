# Vanilla JS + CSS programming problem

## Requisites

- node

## Preparation

```sh
npm i
```

## The code

This code is bundled by vite. We have TS support and vitest for unit tests.

In the `src` folder you will find:

`src/factory.ts`
This is the factory that produces a count function you will use later.

`src/factory.test.ts` -
This is the unit test for the factory.

`src/style/main.css`
These are the styles for the exercise. Plain CSS, nothing fancy :).

`index.html`
The main page

`src/main.ts`
Main logic for the implementation of the requirements.

## The requirements

Build a simple page that looks similar to the image at `public/design.png`.

When you click the big yellow button in the middle, counter function imported from `factory.ts` should be executed and the returned value populated in the middle of it.

When you change either the `start_at` or `step` controls, new instance from the factory should be taken with updated arguments.

## Running the project

To work on the code:

```sh
npm run dev
```

To run tests:

```sh
npm run test
```

To run UI tests:

```sh
npm run test:ui
```

To lint the code:

```sh
npm run lint
```

To format the code:

```sh
npm run format
```

## Deployment

This project is set up to automatically deploy to GitHub Pages when changes are pushed to the main branch. You can access the live site at: https://[your-github-username].github.io/centered_counter/

To deploy manually:

1. Build the project:

```sh
npm run build
```

2. Push the `dist` folder to the `gh-pages` branch:

```sh
git subtree push --prefix dist origin gh-pages
```

## Extra credit

- Improve accessibility.
- Better test coverage.
- UI tests.
- Improve DX.
- Add linters and formatters.
- Have fun.
