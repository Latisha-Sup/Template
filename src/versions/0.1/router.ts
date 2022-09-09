import { Request, Response, Router } from 'hyper-express'
import path from 'path'

import helloController from './controller/hello.controller'

const router = new Router()

router.get('/', (req: Request, res: Response) => {
  const version = path.basename(path.dirname(__filename))
  res.json({ version })
})

// hello controller
// guide for naming router, file and function
router.get('/hello', helloController.getAll)
router.post('/hello', helloController.store)
router.get('/hello/:id', helloController.show)
router.put('/hello/:id', helloController.update)
router.delete('/hello/:id', helloController.destroy)

export default router
