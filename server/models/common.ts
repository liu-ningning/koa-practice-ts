import logger from '../libs/logger'
import { mysqlClient, redisClient } from '../libs/connect'

async function getAnchor() {
  const defaultMySQL = mysqlClient('default')

  const selectSQL = 'SELECT * FROM test_user LIMIT 0,10'
  const result = await defaultMySQL.query(selectSQL).catch((err: any) => {
    logger.error(err, { tips: 'test -> query error' })
  })

  logger.info({ result })

  return result
}

async function getUser() {
  const defaultRedis = redisClient('default')

  const result = await defaultRedis.hgetall('u:113').catch((err: any) => {
    logger.error(err, { tips: 'test -> query error' })
  })

  logger.info({ result })

  return result
}

export { getAnchor, getUser }
