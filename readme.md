# Yaets: Yet Another Electron Typescript Starter

- Electron
- Typescript
- Riot
- NeDB
- Mocha/Chai
- Spectron

## Installation

```shell
git clone https://github.com/pascallando/yaets
cd yaets
npm install
```

## Usage

### Start dev tools

```
grunt
```

Default Grunt script will:

- Start tsc in watch mode to allow Typescript sources on the fly.
- Start Rio compiler in watch mode to allow tags compilation on the fly.
- Start the electron app in DEV mode with live reload.

### Launch unit tests

```
npm run test
```

### Launch ui/e2e tests

```
npm run e2e
```

### Build and package the application

```
npm run build
```
