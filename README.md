# CORDOVA ANDROID tool to build and publish apk file [![Build Status](https://travis-ci.org/amanganiello90/cordova-publish-android.svg)](https://travis-ci.org/amanganiello90/cordova-publish-android)

[![npm](https://img.shields.io/npm/v/npm.svg)](https://www.npmjs.com/package/cordova-publish-android)&nbsp;<img src="https://img.shields.io/github/forks/amanganiello90/cordova-publish-android.svg">&nbsp;
<img src="https://img.shields.io/github/stars/amanganiello90/cordova-publish-android.svg">&nbsp;<a href="https://github.com/amanganiello90/cordova-publish-android/issues"><img src="https://img.shields.io/github/issues/amanganiello90/cordova-publish-android.svg">
</a>&nbsp;

A simple Node tool to build and publish apk file.
It runs cordova build command, rename .apk file with its project name and version. 
In the end the apk file is published on a binary repository (for example Artifactory) with maven deploy file goal (apache-maven-3.3.9).

### Installing
You must have installed Node.js and Java (whatever version) with its system variable (JAVA_HOME).

After these prerequisites, you can download the github repo and run:

```
npm install
```

or 

```
npm install -g
```

N.B for the linux machine probably you have to run "sudo npm install -g".

The second globally installs a shell command in your machine.


Besides, you can install automatically with npm commands in your project (locally):


```
npm install cordova-publish-android
```

or globally

```
npm install cordova-publish-android -g
```

N.B for the linux machine probably you have to run "sudo npm install cordova-publish-android -g".


### Execution

If you have cloned this repo and executed "npm install", you have to copy the publish.js file and the node_modules folder under your cordova root folder (where there is the config.xml file and the platforms folder).

N.B Previous the android platform must be added in your cordova project with the cordova cli command "cordova platform add android".
Remember that to create a cordova project you have to install before the cordova cli with the "npm i cordova -g".

After run this:

```
node publish <url> <repositoryId>
```

Where the "url" and the "repositoryId" are respectively your binary repo (for example Artifactory) url and the id associated to your server credential of the maven settings.xml.

The credentials are mandatory if the plublishing on Artifactory is permissed only with an authentification.
The settings.xml must be created in your user home under a folder named _.m2_.

The file structure is the following:

```
        <settings xmlns="http://maven.apache.org/SETTINGS/1.0.0" xmlns:xsi="http://www.w3.org/2001/XMLSchema-instance" xsi:schemaLocation="http://maven.apache.org/SETTINGS/1.0.0 https://maven.apache.org/xsd/settings-1.0.0.xsd">
          <servers>
			<server>
				<id>your_repository_id</id>
				<username>your_login</username>
				<password>your_password</password>
			</server>
		  </servers>
        </settings>
```

If you have executed "npm install -g", you directly can run in your cordova root project this command:

```
cpa publish <url> <repositoryId>
```

The parameters are the same of the previous option execution.
You can have more information about maven deploy:file goal and its parameters on: https://maven.apache.org/plugins/maven-deploy-plugin/deploy-file-mojo.html

## CORDOVA

To learn about Cordova (and cordova cli) visit its website: https://cordova.apache.org/.
To information about the creation of a maven settings and its .m2 folder: https://maven.apache.org/settings.html.
 

