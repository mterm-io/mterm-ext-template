# mterm-ext-template

A template for creating [mterm](https://github.com/mterm-io/mterm) extensions

### Changes
- update package.json's name, description, author and repository fields
- update README.md with your extension's details, see [mterm-ext-google](https://github.com/mterm-io/mterm-ext-google) and [mterm-ext-red](https://github.com/mterm-io/mterm-ext-red) for examples
- update `mterm.js` with your extension's logic

### Publishing

Publishing is done via npm. See general docs on [npm publishing](https://docs.npmjs.com/creating-and-publishing-unscoped-public-packages) on the internet. `ext add <package_name>` uses npmjs.org as a transport mechanism.

```bash
npm login
npm publish
```

This package should now be available on npmjs.org at 
```Bash
https://www.npmjs.com/package/<NAME_IN_PACKAGE_JSON>
```


### Installing on mterm

```bash
ext add <NAME_IN_PACKAGE_JSON>
```