#!/usr/bin/env node
var fs= require('fs');
var shell_exec = require('shell_exec').shell_exec;
var parseString = require('xml2js').parseString;
var program = require('commander');
const os = require('os');
const home_plugin = shell_exec('npm list cordova-publish-android -g -p ');

var name = __dirname + '/platforms/android/build/outputs/apk/android-debug.apk';


program
    .command('publish')
    .arguments('<artifactoryPath> <idRepo>')
    .description('build apk generated from cordova and publish with maven deploy file')
    .action(function (artifactoryPath, idRepo, cmd) {
		
		var xml = fs.readFileSync(__dirname + '/config.xml', 'utf8');

		parseString(xml, function (err, result) {
	
			var groupId=result.widget['$'].id;
			var version = result.widget['$'].version;
			var artifactId =result.widget.name['0'];
	
			// execute cordova build
			console.log('waiting cordova build...');
			console.log(shell_exec('cd ' +home_plugin +'/node_modules/cordova/bin && cordova build '));


			// maven deploy file
			console.log('waiting publish apk...');
			console.log(shell_exec('cd ' +home_plugin +'/apache-maven-3.3.9/bin && mvn deploy:deploy-file -Durl='+ artifactoryPath+' -DrepositoryId='+ idRepo + ' -Dfile='+ name+ ' -DgeneratePom=false -DgroupId='+ groupId +' -DartifactId='+artifactId +' -Dversion='+version));


		});
		
		
	});
	
