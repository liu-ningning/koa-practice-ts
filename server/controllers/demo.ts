import { Context } from 'koa'
import ctxUtils from '../libs/ctx-utils'

export default class Test {
  public static async home(ctx: Context) {
    const { device } = ctxUtils({ ctx })

    const config = {
      device,
      question: 'this is a koa ts practice',
      answer: 'Is you?',
    }

    ctx.state = Object.assign({},
      {
        title: 'Hello Demo!',
        config: JSON.stringify(config),
      }
    )

    await ctx.render('demo')
  }
}
