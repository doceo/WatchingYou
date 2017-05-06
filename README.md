# WhatchingYou

Autore: Diomede Mazzone e Fabio Z Tessitore (@FabioZTessitore)

Tag: NodeJS, ExpressJS, Socket.io, OpenCV, client/server

Versione: 0.1.0

Licenza: GPL-3.0

## Descrizione

Questo software ha scopo didattico.

Consiste in un server che sfrutta la tecnologia Node e le capacità di OpenCV
per restituire a più client in broadcast una sequenza di immagini acquisita
da una webcam.

## Prerequisiti

Assicurati di aver installato le librerie OpenCV

```
$ sudo apt-get install libopencv-dev
```

## Requisiti
* Raspberry PI (testato su Raspberry PI 2) con camera
* npm (https://www.npmjs.com/)
* nodejs (https://nodejs.org/en/)
* expressjs (http://expressjs.com/)
* socket.io (http://socket.io/)
* OpenCV (http://opencv.org/)
* peterbraden/node-opencv (https://github.com/peterbraden/node-opencv)

## Istallazione e Avvio

* modifica IP: nel file index.html bisogna modificare l'indirizzo IP del server

* installazione delle dipendenze (attenzione ai prerequisiti):

```bash
$ npm install
```

* esecuzione

```bash
$ node app.js
```
oppure (per distribuzioni basate su Debian)

```bash
$ nodejs app.js
```

a questo punto il server è in ascolto sulla porta 3000.


== Bug Riscontrati ==


= Ringraziamenti =
