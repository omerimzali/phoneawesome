<p align="center">
  <img width="192" src="https://github.com/omerimzali/phoneawesome/blob/master/examples/sml_logo_white.png?raw=true"><br><br>
 </p>

<h1 align="center">Phoneawesome</h1>

*<p align="center">Best Way to Create Phone Display on HTML Pages</p>*

<p align="center">
  <img src="https://img.shields.io/badge/license-MIT-blue.svg?style=flat"/>
   <img src="https://img.shields.io/badge/phone-awesome-red.svg?style=flat"/>
 </p>
 
## Introduction

PhoneAwesome is a Javascript Library to create phone display on web pages. 

## Install

You can get UITerminal with CDN.

```html
<script src="https://cdn.jsdelivr.net/gh/omerimzali/phoneawesome@master/dist/build/phoneawesome.js"></script>
```
Or You can clone it.
```
git clone https://github.com/omerimzali/phoneawesome.git
```

## Usage

## Elements&Colors&ETC
1. Creating a Device.
```
<div id='device1'></div>
var options = {src:"https://picturepan2.github.io/spectre/"};
var device1 = phoneawesome('#device1',options);

```
2. Changing Device Modal
```
<div id='device2'></div>
var options = {device:"google-pixel-2-xl",
src:"https://picturepan2.github.io/spectre/"};
var device2 = phoneawesome('#device2',options);

```
3.Device Sizes

```
<div id='device2'></div>
var options = {device:"iphone-8",width:"400",height:"600",
src:"https://picturepan2.github.io/spectre/"};
var device5 = phoneawesome('#device5',options);
```
4.Change src

```
var device6options = {device:"iphone-8",width:"400",height:"600",
src:"https://picturepan2.github.io/spectre/"}; 
var device6 = phoneawesome('#device6',device6options);

device6.changesrc("https://nostalgic-css.github.io/NES.css/"); 
//or 
device6.changesrc("https://picturepan2.github.io/spectre/");
```

## Browser Support
Phoneawesome tested on following browsers.
* Chrome
* Firefox
* Safari
* Opera

## Development&Contributions

[![contributions welcome](https://img.shields.io/badge/contributions-welcome-brightgreen.svg?style=flat)](https://github.com/omerimzali/uiterminal)

You can fork the project and enter this commands in your terminal.

```sh
git clone https://github.com/YOUR_GITHUB_USERNAME/phoneawesome.git
cd uiterminal

```

## Thanks 
 Phoneawesome Based on Devices.css, I have to thank to [BcRicco](https://github.com/picturepan2) 




