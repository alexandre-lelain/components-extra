/**
 * Highly inspired from material-ui's build scripts: https://github.com/mui-org/material-ui/blob/master/scripts/copy-files.js
 * Credits go to them :)
 */

const fs = require('fs-extra')
const path = require('path')

const PACKAGE_PATH = process.cwd()
const BUILD_PATH = path.join(PACKAGE_PATH, './build')

async function includeFileInBuild(file) {
  const sourcePath = path.resolve(PACKAGE_PATH, file)
  const targetPath = path.resolve(BUILD_PATH, path.basename(file))
  await fs.copy(sourcePath, targetPath)
  console.log(`Copied ${sourcePath} to ${targetPath}`)
}

async function createPackageFile() {
  const packageData = await fs.readFile(path.resolve(PACKAGE_PATH, './package.json'), 'utf8')
  // eslint-disable-next-line no-unused-vars
  const { scripts, devDependencies, ...packageDataOther } = JSON.parse(packageData)
  const newPackageData = {
    ...packageDataOther,
    main: './index.js',
    module: './esm/index.js',
    typings: './index.d.ts',
  }
  const targetPath = path.resolve(BUILD_PATH, './package.json')
  await fs.writeFile(targetPath, JSON.stringify(newPackageData, null, 2), 'utf8')
  console.log(`package.json created in build folder.`)

  return newPackageData
}

async function copyMetaFiles() {
  const filesToCopy = ['../../CHANGELOG.md', '../../LICENSE', '../../README.md']
  await Promise.all(filesToCopy.map(includeFileInBuild))
}

async function main() {
  await createPackageFile()
  await copyMetaFiles()
}

main()
