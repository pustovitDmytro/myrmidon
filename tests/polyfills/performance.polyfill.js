(function(){
      var nowOffset = Date.now();
      
        global.performance = { };

        global.performance.now = function now(){
        return Date.now() - nowOffset;
      }
})();