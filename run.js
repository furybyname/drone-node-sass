var payload = JSON.parse(process.argv[3]);

console.log(payload);
//console.log(JSON.stringify(process.argv));

var vargs = payload.vargs;

var exec = require('child_process').exec;
var srcPath = payload.workspace.path;
var target = vargs.target || '';
console.log('running npm install && grunt ' + target + ' && npm prune');
var cmd = 'cd ' + srcPath + ' && npm install && node_modules/.bin/grunt ' + target + ' && npm prune --production';
exec(cmd, function(error, stdout, stderr) {
    if (error) {
        console.log(error);
        process.exit(1);
    }
    console.log(stdout);
  // command output is in stdout
});
