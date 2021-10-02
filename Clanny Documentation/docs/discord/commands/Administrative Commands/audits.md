---
sidebar_position: 4
---
# `c!audits`

Clanny's audits module will log all write and confidential read actions into a Discord channel.

:::caution
People should **never** be able to delete messages in audits channels
:::

:::caution
ClannyAPI requests will get logged to this channel. It will show you from what game it is from, this information should **NEVER** be trusted in an API abuse case
:::

## Syntax

- `c!audits` View current settings
- `c!audits channel [Discord channel ID]` Configures the audits to be logged in the specified channel
- `c!audits enable` Enables audits for your server
- `c!audits disable` Disabled audits for your server (This action gets logged to the audits channel if available)

:::tip
Google will be able to help you if you do not know how to get the ID of a Discord channel
:::