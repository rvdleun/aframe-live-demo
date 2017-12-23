# AFrame Live Demo

## Introduction

This is a simple repository containing some files to give a live AFrame presentation, using Firebase. You will be able to code live on your computer, and your audience will see the results live on their own devices.

For an example, you can watch my presentation at [Fronteers](https://vimeo.com/240443022/2640837862#t=35m) (starting around 34:45)

## Installation

In the configuration directory, copy the contents of `editor-conf.dist.js` to `editor-conf.js` and `firebase-conf.dist.js` to `firebase-conf.js`.

### Firebase

1. Create a new instance at [Firebase](https://console.firebase.google.com/)
2. Click `Add Firebase to your web app`. Copy the contents of the `config` variable in the `firebase-conf.js` file at the indicated spot.
3. Go to `Database` -> `Rules` and change the rules to...

```json
{
  "rules": {
    ".read": "true",
    ".write": "true"
  }
}
```

PLEASE NOTE: These rules will give anyone read and write access to all data in your Firebase database. For now, we're assuming that your audience will play nice and won't muck with anything, but I will be adding some additional instructions on how to properly secure your database in the future.

### Editor

In the `editor.conf.js` file, you can add templates that will be added as buttons to the editor page to quickly copy/paste code into the editor.

The editor itself makes use of [Ace](https://ace.c9.io/) for an easy-to-use code editor.

## Instructions

* Host these files online, possibly remove the `editor.html` page online to avoid any tampering, and send your audience to the `index.html` page.
* You can use the code editor on the `editor.html` page online or on your local computer to change the scene online. 
* Wow and inspire your audience with how easy it is to build WebVR using AFrame.

## Todo

* Instructions on how to secure Firebase from any editing.