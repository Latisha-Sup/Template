import { Request, Response } from 'express'

const getAll = (req: Request, res: Response) => {
  try {
    res.json({ hello: 'getAll' })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
}

const store = (req: Request, res: Response) => {
  try {
    const { body } = req
    res.json({ hello: 'store', body })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
}

const show = (req: Request, res: Response) => {
  try {
    const { params } = req
    res.json({ hello: 'show', params })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
}

const update = (req: Request, res: Response) => {
  try {
    const { params, body } = req
    res.json({ hello: 'update', params, body })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
}

const destroy = (req: Request, res: Response) => {
  try {
    const { params, body } = req
    res.json({ hello: 'destroy', params, body })
  } catch (error) {
    if (error instanceof Error) {
      res.status(500).json({ error: error.message })
    }
  }
}

const helloController = {
  getAll,
  store,
  show,
  update,
  destroy,
}

export default helloController
