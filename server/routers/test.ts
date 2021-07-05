import Router from 'koa-router'
import { DefaultState, Context } from 'koa'

import demo from '../controllers/demo'

const router = new Router<DefaultState, Context>()

// test routes
router.get('/demo', demo.home)

export { router }
