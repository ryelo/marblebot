# Marblebot

Bot that keeps track of all the marbles

## Development

`git clone`

`npm install && npm run start`

## Running a local server

I use `ngrok` to deploy a local instance

`ngrok http 3000`.

__ Once both `npm run start` and `ngrok http 3000` are running, you're ready to set up your slack instance.

## Slack

1. Create your own workspace.

2. Build a [Slackbot](https://api.slack.com/apps)

3. Copy your Client ID, Client Secret, and Signing Secret to your `.env` file

4. Add an "Interactive Component" with a `Request URL` of `https://____.ngrok.io/slack/receive`

5. Add an "Bot User" with a `Display Name` of `marblebot`

6. Add an "Event Subscription" with a `Request URL` of `https://____.ngrok.io/slack/receive`

7. Add a "Redirect URL" with a `Redirect URL` of `https://____.ngrok.io/oauth`

8. Add the bot to the workspace

9. `/invite @marblebot` to the channel

10. Check to see if marblebot responds by saying `@marblebot say hi`