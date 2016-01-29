# WhatchingYou

Autore: Diomede Mazzone con la collaborazione di Fabio Z Tessitore (@FabioZTessitore)

Tag: NodeJS, ExpressJS, Socket.io, Python, client/server

Versione Stabile: 1.0

Licenza: GPL 3.0 o successive

## Descrizione

Questo software ha scopo didattico, consiste in un server che sfrutta la tecnologia Node per
restituire ad un client connesso sulla porta 3000 un'immagine acquisita da una webcam
attravero uno script Python.
Oogni volta che lo script sovrascrive l'immagine il server rileva l'aggiornamento e la spedisce al client.

## Requisiti
*   Raspberry PI (testato su Raspberry PI 2)
*	  npm (https://www.npmjs.com/)
*   nodejs (https://nodejs.org/en/)
*   expressjs (http://expressjs.com/)
*   socket.io (http://socket.io/)
*   Python

## Istallazione e Avvio

* modifica IP: nel file index.html bisogna modificare l'indirizzo IP del server

* l'applicazione server, scritta utilizzando la tecnologia NodeJs, fa uso dei
moduli ExpressJs e Socket.io.
Per l'installazione di tali dipendenze:
```bash
$ npm install
```
  
* per l'esecuzione prima bisogna lanciare lo script python, successivamente il server node:
```bash 
$ python camera.py
```
```bash
$ node app.js
```
oppure (per distribuzioni basate su Debian)
```bash
$ nodejs app.js
```

a questo punto il server è in ascolto sulla porta 3000.

== File Presenti ==

I file presenti sono:


== Bug Riscontrati ==


= Ringraziamenti =

