---
sidebar_position: 4
---
# `c!rank`

This command can be used to view or manage your group ranks, altough it is not advised to manage ranks with this command
Instead of this command use the [Dashboard](https://clanny-gateway.glitch.me/)

:::info
To use the dashboard you need a Clanny managed account in your group
:::

:::info Difference between `[Rank]` and `[Rank ID]`
`[Rank]` can be either a Rank ID (Big number, view using `c!rank`) or a Rank Number (1-255)

`[Rank ID]` is only a Rank ID (Big number, view using `c!rank`)
:::

## Syntax

- `c!rank` View ranks
- `c!rank update` Syncronize your ranks in the Clanny database with those on Roblox
- `c!rank delete [Rank]` Delete a rank, `c!rank update` does not delete ranks for safety reasons
- `c!rank xp [Rank] [Requirement]` Set a rank's xp requirement
- `c!rank unlock [Rank]` Enables automated promotions and demotions from and to that rank
- `c!rank lock [Rank]` Disables automated promotions and demotions from and to that rank
- `c!rank perm [Rank] [normal/officer/hicom/owner]` Changes a rank's permission level
- `c!rank role [Rank ID] [Discord Role ID/Mention/Ping]` Sets a rank's Discord role, this will be given automatically or removed automatically
- `c!rank prefix [Rank ID] [Prefix]` Sets a rank's nickname prefix, this will be set automatically. This can not contain spaces.  Set the prefix to "none" if you want to remove it

:::tip
Clanny supports some _special_ Discord roles, their uses are self explenatory

- Clanny Nickname Bypass
- Clanny Role Bypass

These are case sensitive
:::
