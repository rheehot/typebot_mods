const { getData } = require('../db')
class SuccessEmbed{
    /**
     * @class
     * @description Create an error embed
     * @param {String} description The description of your error embed, if you set up the description in the init class, {str} would get replaced with your description
     * @example
     * new SuccessEmbed("You failed the task")
     */
    constructor(description){
        if(!description) throw new TypeError(`Description is a required param`)
        let data = getData("init")
        if(!data.discord) throw new TypeError(`"discord" is a required field of the initiation.`)
        let embed = new data.discord.MessageEmbed();
    
        if(data.messages.error.title){
            embed.setTitle(data.messages.error.title)
        }
        if(!data.messages.error.description){
            embed.setDescription(description)
        }else{
            embed.setDescription(data.messages.error.description.replace(/{str}/gi,description))
        }
        if(data.colors.error){
            embed.setColor(data.colors.error)
        }
        return embed
    }
}
module.exports=SuccessEmbed