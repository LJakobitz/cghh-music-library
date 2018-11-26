# cghh-music-library
a project for a music libraby in style of https://github.com/codyseibert/tab-tracker

**Prerequesites**
* you need to have nodejs and npm installed for this project to work.


**Installation Guide:**
* clone repository in the directory where you want to install the library:
```bash
git clone https://github.com/LJakobitz/cghh-music-library.git
```
* change into the server folder:
```bash
cd cghh-music-library/server
```
* install needed dependencies:
```bash
npm install

...

audited 2645 packages in 2.919s
found 0 vulnerabilities
```
* fill database with example data:
```bash
npm run seed

...

Executing (default): INSERT INTO `Histories` (`id`,`createdAt`,`updatedAt`,`UserId`,`SongId`) VALUES (NULL,'2018-11-26 13:51:34.889 +00:00','2018-11-26 13:51:34.889 +00:00',1,1);
```
* start up the backend server (if you don't want to use a second terminal `npm start &`)
```bash
npm start

...

Server started on port 8081
```
* in a different terminal, go into the client folder
```bash
cd cghh-music-library/client
```
* install needed dependencies (as for the 26th Nov 2018, there are 2 vulnerabilities. Until now they don't hinder the project):
```bash
npm install

...

audited 11674 packages in 7.149s
found 2 vulnerabilities (1 moderate, 1 high)
  run `npm audit fix` to fix them, or `npm audit` for details
```
* start up the frontend server:
```bash
npm start

...

DONE  Compiled successfully in 6628ms

I  Your application is running here: http://localhost:8080
```
* in your browser go to that location |^| :
![alt text](https://github.com/LJakobitz/cghh-music-library/blob/master/client/src/assets/screenshot.png "ScreenShot Firefox")
* Enjoy exploring!