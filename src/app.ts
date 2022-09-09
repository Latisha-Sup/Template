import HyperExpress from 'hyper-express'

import blueprint from './blueprint'

const app = new HyperExpress.Server({ max_body_length: 50 * 1000000 }) // 50mb
app.use(blueprint)

export default app
