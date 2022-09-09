import express from 'express'
import fs from 'fs'

const blueprint = express.Router()

const versions = fs.readdirSync(__dirname + '/versions')
for (const version of versions) {
  const path = `${__dirname}/versions/${version}`
  const files = fs.readdirSync(path)
  const routerFile = files.filter((file) => file.includes('router'))
  if (routerFile) {
    const routerPath = `${path}/${routerFile}`
    if (fs.lstatSync(routerPath).isFile()) {
      const router = require(routerPath).default
      blueprint.use(`/v${version}`, router)
    }
  }
}

export default blueprint
