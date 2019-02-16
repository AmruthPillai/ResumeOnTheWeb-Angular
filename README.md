<p align="center">
	<img src="https://i.imgur.com/WnVVMvv.png" width="500px" alt="Amruth Pillai's Resume on the Web">
</p>

---

### Badges of Honor

[![website amruthpillai.com](https://img.shields.io/website-up-down-green-red/http/amruthpillai.com.svg)](https://amruthpillai.com/)
[![uptimerobot amruthpillai.com](https://img.shields.io/uptimerobot/ratio/m781987043-24c5463b2c0e80a630682bd0.svg?style=flat)](https://amruthpillai.com/)
[![made-with-angular](https://img.shields.io/badge/made%20with-angular-red.svg?style=flat&logo=angular)](https://amruthpillai.com/)
![](https://img.shields.io/badge/made%20with-bootstrap-blue.svg?style=flat&logo=bootstrap)
[![last commit on github](https://img.shields.io/github/last-commit/amruthpillai/resumeontheweb-angular.svg?style=flat)](https://amruthpillai.com/)
![](https://img.shields.io/docker/automated/amruthpillai/resumeontheweb-angular.svg?style=flat)
![](https://img.shields.io/github/languages/code-size/amruthpillai/resumeontheweb-angular.svg?style=flat)
![](https://img.shields.io/github/license/amruthpillai/resumeontheweb-angular.svg?style=flat)

---

Everyone needs their own little spot on the interwebs, and this is mine.  
**Welcome to my resume, on the web!**

## Introduction

This is the official open source repository of my website/resume aptly titled, [Resume on the Web](https://amruthpillai.com/). It is build on the latest technologies, trying to put together as much of what I have learnt over the years intro practice. 

The website features a variety of tidbits from across the web, from how the server is set up to the animations on the page. This *README.md* serves as a feature list as to what all has made this website special, and a proof of source for anyone else to fork and work on their own version of the website (with due credits, of course).

## Live Demo

To check out a live demo of the site in all of it's glory, head over to:

### https://www.amruthpillai.com/

## Features

There's a lot of features deep down the heart of this project that make it special. It's not just a simple website that I whipped up in 2-3 days. Anybody could do that, but since this is a resume/personal project, I wanted to use it to showcase the best use of all my skills, from design, to development, to devOps.

The number of things I've learnt from this project is truly endless, but I'll try to create one anyway:
* Uses ![Angular v7.2.4](https://img.shields.io/badge/Angular-v7.2.4-red.svg?style=flat&logo=angular) as the frontend framework for managing various web components
* Using the latest version of ![Bootstrap v4.3](https://img.shields.io/badge/Bootstrap-v4.3-blue.svg?style=flat&logo=bootstrap)
* Makes use of ![Sass](https://img.shields.io/badge/sass-ce1477.svg?style=flat&logo=sass&logoColor=white) to style components smarter
* Containerization using ![Docker](https://img.shields.io/badge/docker-blue.svg?style=flat&logo=docker&logoColor=white) *([Repo on Docker Hub](https://cloud.docker.com/repository/docker/amruthpillai/resumeontheweb-angular))*
* UI/UX Design from scratch *(Adobe Photoshop CC, Adobe XD)*
* Package Management using npm.js *(http://npmjs.com/)*
* Minification of HTML, CSS and JS *(to serve requests faster)*
* Optimization of Images *(to take up less space)*
* Server Setup & Management (Apache & Ubuntu 16.04)
* SSL Certification and Renewal using Certbot
* Using SVGs instead of Bitmap images, *wherever possible*
* Fetching from Medium/Instagram APIs *(to fuel the dynamic content on the site)*

## Building from Source

Since the project has been set up with Angular, the build process has become easier than ever.
**Just follow the steps to get started:**

1. Make sure you have Node/NPM installed on your computer, then run the following commands:
```console
npm install -g @angular/cli
```

2. Clone the repository and go into the working directory
```console
git clone https://github.com/AmruthPillai/ResumeOnTheWeb-Angular.git
cd ResumeOnTheWeb-Angular
```

3. Then, just run this command to install the necessary dependencies. It might take a while for it to finish, so keep an episode of 'Friends' running, just in case.
```console
npm install
```

4. Watch the project come to life by firing up a server, brought to you by `ng-cli` which you installed in Step 1
```console
ng serve
```

5. If you want to build the application in production, just make use of `ng-cli` again
```console
ng build --prod
```
