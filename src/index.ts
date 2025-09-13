import bolt from '@slack/bolt'

const main = async () => {
  const app = new bolt.App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true,
  })

  app.event('app_mention', async ({ event, say }) => {
    app.logger.info(event)
    await say(`Hi there, <@${event.user}>!`)
  })

  await app.start()
  app.logger.info('⚡️ Bolt app is running!')
}

await main()
