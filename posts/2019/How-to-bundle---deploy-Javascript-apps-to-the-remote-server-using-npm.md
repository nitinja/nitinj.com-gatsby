---
title: How to bundle & deploy Javascript apps to the remote server using npm
description: >-
  I am using webpack to bundle all my JS, HTML & CSS files. While webpack is
  capable bundler, It does not provide any tool (I could be wrong…
date: '2017-02-19T17:43:34.731Z'
categories: []
keywords: []
slug: >-
  /@nitinj/how-to-bundle-deploy-javascript-apps-to-the-remote-server-using-npm-c617b6e59b4c
---

I am using webpack to bundle all my JS, HTML & CSS files. While webpack is capable bundler, It does not provide any tool (I could be wrong here) to actually create an archive of output folder (in my case, it was _dist_) as well as deploy it to remote server (I am using artifactory server to store my bundles).

So here is how I did it:

1.  created a new shell script _deploy.sh_ on the root of the project

touch deploy.sh

2\. Get version of your app from package.json using _node -p_

**#!/bin/bash  
  
**_#Get app version  
  
_APP\_VERSION=**$**(node -pe **"require('./package.json').version"**)

3\. Create archive of _dist_ folder using tar command

#create a name for your bundle  
ARCHIVE\_NAME=**'app-name-'**$APP\_VERSION**'.tar.gz'**

_#create an archive_ tar -czvf $ARCHIVE\_NAME -C ./dist .

here, -C makes sure you archive the content of dist directory but not the dist directory itself.

4\. deploy this (copy the archive) to the remote server using curl

#deploy to remote server

curl -u username:password -X PUT **"http://jenkins.myserver.com:8081/artifactory/libs-release-local/com/myserver/myproject/$APP\_VERSION/$ARCHIVE\_NAME"** \-T ./$ARCHIVE\_NAME

The full shell script looks like this:

Now call this script from your npm scripts in _package.json_ file:

...  
scripts: {  
    "deploy": "./deploy.sh"  
}

That’s it! now run

npm run deploy 

and see your app deployed to the remote server!