# ⌨️ typebot_mods ⌨️
[![downloadsBadge](https://img.shields.io/npm/dt/typebot_mods?style=for-the-badge)](https://npmjs.com/typebot_mods)
[![versionBadge](https://img.shields.io/npm/v/typebot_mods?style=for-the-badge)](https://npmjs.com/typebot_mods)
[![doc](https://img.shields.io/badge/Documentation-Click%20here-blue?style=for-the-badge)](https://typebot_mods.js.org) <br>
**What features does typebot_mods have?**
* 1️⃣Embeds
* 2️⃣Advanced Config

How do I install it?
```
npm i typebot_mods
```
This can be quite a confusing module at first, here are some examples. <br>
When requiring, I recommend in your main file you use the Init class, see example below.
```js
const { Init } = require('typebot_mods')
//Initiate it..
new Init({
     discord: require('discord.js'),
     colors:{
         success: "#50CA2B",
         error: "#D31919"
     },
     messages:{
         error:{
             title: "Uh oh! An error appeared!",
             description: "Hey there! Either something went wrong with my robot code, or you did something wrong! Well, this is what happened! {str}"
         },
         success:{
             title: "Success!",
             description: "You have successfully completed the task {str}"  
         }
     }
})
```
With this code, you setup a discord variable, save the colors of your success and errror embeds, save the titles and descriptions of your success and error embeds as well. <br> Here is an example of of creating an error embed:
```js
const { ErrorEmbed } = require('typebot_mods')
message.channel.send(new ErrorEmbed("Failed"))
```
This would make an embed like this (If you copied and pasted the code): <br>
[![img1](https://salvage.is-inside.me/3nvyemS8.png)](https://npmjs.com/package/typebot_mods) <br>
And here is an example of making a success embed:
```js
const { SuccessEmbed } = require('typebot_mods')
message.channel.send(new SuccessEmbed("Yee"))
```
This is what it would look like: <br>
[![img1](https://salvage.is-inside.me/XJuLTRrk.png)](https://npmjs.com/package/typebot_mods) <br>
**I hope this module helps you!**