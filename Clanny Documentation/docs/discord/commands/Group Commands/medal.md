---
sidebar_position: 2
---
# `c!medal`

This command can be user to view a user's medals, create medals, delete medals, (un)award medals

## Syntax

- `c!medal` View all medals in a server
- `c!medal [User]` View the specified user's medals
- `c!medal create [ID] [Emoji] [Description]` Create a medal, the ID can be any number you want (Unless it goes out of bounds for 64bit computing of course ;) )
- `c!medal emoji [ID] [Emoji]` Change the specified medal's emoji
- `c!medal description [ID]` Change the specified medal's description
- `c!medal award [ID] [User]` Give the specified user the specified medal
- `c!medal unaward [ID] [User]` Remove the specified medal from the specified user
- `c!medal delete [ID]` Deletes a medal

:::caution Deleted medals
Deleted medals will only get removed from a user when they check it, if you were to do the following the user will have the smart kids medal
- `c!medal create 1 😎 Cool kids medal`
- `c!medal award 1 coolkidroblox`
- `c!medal delete 1`
- `c!medal create 1 🧠 Smart kids medal`
:::