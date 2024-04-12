
# Rest Convert 
[![Build Status][github-actions-status]][github-actions-url]
[![Github Tag][github-tag-image]][github-tag-url]

<div align="center">

</div>

## Install

Clone the repo and install dependencies:

```bash
git clone --depth 1 --branch main git@github.com:pngan/rest-convert.git your-project-name
cd your-project-name
npm install
```

## Starting Development

Start the app in the `dev` environment:

```bash
npm start
```

## Packaging for Production

To package apps for the local platform:

```bash
npm run package
```


## Publish a Release

To create a Release on this repository:
- Update the version number in the file `release\app\package.json`. Version numbers follow the semver conventional.
- Commit and push this change to the `main` branch.
- Create and push tags. The version must start with a `v`, e.g. `v1.2.3` git tag 
```bash
git tag v1.2.3
git push origin v1.2.3
```

This will automatically create a new draft release in the repository. After the products have been tests, then the release can be manually *published*.


## License

MIT © [rest-convert](https://github.com/pngan/rest-convert.git)

[github-actions-status]: https://github.com/pngan/rest-convert/workflows/Test/badge.svg
[github-actions-url]: https://github.com/pngan/rest-convert/actions
[github-tag-url]: https://github.com/pngan/rest-convert/releases/latest
[github-tag-image]: https://img.shields.io/github/tag/pngan/rest-convert.svg?label=version
