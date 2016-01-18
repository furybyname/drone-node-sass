var payload = JSON.parse(process.argv[3]);

console.log(payload);
//console.log(JSON.stringify(process.argv));

var vargs = payload.vargs;

var exec = require('child_process').exec;
var srcPath = payload.workspace.path;
var target = vargs.target || '';
console.log('running npm install && grunt ' + target + ' && npm prune');

console.log('running npm install');
var cmd_npmInstall = 'cd ' + srcPath + ' && npm install';
exec(cmd_npmInstall, function(npmError, npmStdout, npmStderr) {
    if (npmError) {
        console.log(npmError);
        process.exit(1);
    }
    console.log(npmStdout);
    console.log(npmStderr);

    console.log('running grunt');
    var cmd_grunt = 'cd ' + srcPath + ' && npm install && node_modules/.bin/grunt ' + target;
    exec(cmd_grunt, function(gruntError, gruntStdout, gruntStderr) {
        if (gruntError) {
            console.log(gruntError);
            process.exit(1);
        }
        console.log(gruntStdout);
        console.log(gruntStderr);

        console.log('running npm prune');
        var cmd_prune = 'cd ' + srcPath + ' && npm prune --production';
        exec(cmd_prune, function(pruneError, pruneStdout, pruneStderr) {
            if (pruneError) {
                console.log(pruneError);
                process.exit(1);
            }
            console.log(pruneStdout);
            console.log(pruneStderr);
        });
    });
  // command output is in stdout
});
