const { getData } = require('../db')
class ErrorEmbed{
    /**
     * @class
     * @description Create an error embed
     * @param {String} description The description of your error embed, if you set up the description in the init class, {str} would get replaced with your description
     * @example
     * new ErrorEmbed("You failed the task")
     */
    constructor(description){
        if(!description) throw new TypeError(`Description is a required param`)
        let data = getData("init")
        if(!data.discord) throw new TypeError(`"discord" is a required field of the initiation.`)
        let embed = new data.discord.MessageEmbed();
    
        if(data.messages.success.title){
            embed.setTitle(data.messages.success.title)
        }
        if(!data.messages.success.description){
            embed.setDescription(description)
        }else{
            embed.setDescription(data.messages.success.description.replace(/{str}/gi,description))
        }
        if(data.colors.success){
            embed.setColor(data.colors.success)
        }
        return embed
    }
}
module.exports=ErrorEmbed