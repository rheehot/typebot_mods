const { saveData } = require('../db')
class Init{
    /**
     * @class
     * @param {Object} options - Options for the mod
     * @param {String} options.discord - Your discord variable
     * @param {Object} options.colors - An object containing your colors
     * @param {String} options.colors.success - The success embed color
     * @param {String} options.colors.error - The error embed color
     * @param {Object} options.messages - An object containing all base messages for embeds
     * @param {Object} options.messages.error - An object containing base messages for the error embed
     * @param {String} options.messages.error.title - The title of the error embed
     * @param {String} options.messages.error.description - The description of the error embed, to get the specific error text, use {str}
     * @param {Object} options.messages.success - An object containing base messages for the success embed
     * @param {String} options.messages.success.title - The title of the success embed
     * @param {String} options.messages.success.description - The description of the success embed, to get the specific success text, use {str}
     * @example
     * new Init({
     *      discord: require('discord.js'),
     *      colors:{
     *          success: "#50CA2B",
     *          error: "#D31919"
     *      },
     *      messages:{
     *          error:{
     *              title: "Uh oh! An error appeared!",
     *              description: "Hey there! Either something went wrong with my robot code, or you did something wrong! Well, this is what happened! {str}"
     *          },
     *          success:{
     *              title: "Success!",
     *              description: "You have successfully completed the task {str}"  
     *          }
     *      }
     * })
     * @description Setup typebot_mods in one simple class
     * @class 
     */
    constructor(options){
        options = new require('merge-options')(options)
        saveData("init",options)
        
    }
}

module.exports = Init