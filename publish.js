var fs= require('fs');
var shell_exec = require('shell_exec').shell_exec;
var parseString = require('xml2js').parseString;

var name = __dirname + '/platforms/android/build/outputs/apk/android-debug.apk';

var artifactoryPath = process.argv[2];
//if (artifactoryPath==null)
	//artifactoryPath ='http://artifactory:8080';


var idRepo = process.argv[3];

//if(idRepo==null)
 //idRepo = 'ArtifactoryReleases';


var xml = fs.readFileSync(__dirname + '/config.xml', 'utf8');

parseString(xml, function (err, result) {
	

	var groupId=result.widget['$'].id;
	var version = result.widget['$'].version;
	var artifactId =result.widget.name['0'];
	
	// execute cordova build
console.log('waiting cordova build...');
console.log(shell_exec('cd node_modules/cordova/bin && cordova build '));


// maven deploy file
console.log('waiting publish apk...');
console.log(shell_exec('cd apache-maven-3.3.9/bin && mvn deploy:deploy-file -Durl='+ artifactoryPath+' -DrepositoryId='+ idRepo + ' -Dfile='+ name+ ' -DgeneratePom=false -DgroupId='+ groupId +' -DartifactId='+artifactId +' -Dversion='+version));


});

