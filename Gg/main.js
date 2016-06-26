var StorageManager = require('StorageManager');
module.exports.loop = function () {
   
   for(var name in Game.rooms)
   {
    StorageManager.run(name);
   }
    
    
}