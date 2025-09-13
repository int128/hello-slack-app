import bolt from '@slack/bolt'

const main = async () => {
  const app = new bolt.App({
    token: process.env.SLACK_BOT_TOKEN,
    appToken: process.env.SLACK_APP_TOKEN,
    socketMode: true,
  })

  app.event('app_mention', async ({ event, say, client }) => {
    app.logger.info(event)
    await client.reactions.add({
      channel: event.channel,
      timestamp: event.ts,
      name: 'robot_face',
    })
    await say(`Hi there, <@${event.user}>!`)
    await client.reactions.remove({
      channel: event.channel,
      timestamp: event.ts,
      name: 'robot_face',
    })
  })

  await app.start()
  app.logger.info('⚡️ Bolt app is running!')
}

await main()
