exports.action = function(data, callback, config, SARAH) {
  var exec = require('child_process').exec;
  if (data.progValue == "xbmc") {
    var process = '"C:\\Program Files (x86)\\XBMC\\XBMC.exe"';
    console.log(process);
    var child = exec(process, function (error, stdout, stderr) {
      if (error !== null) console.log('exec error: ' + error);
    });
    
    callback({'tts': "Je lance XBMC."});
  }
}