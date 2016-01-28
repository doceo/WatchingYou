# WhatchingYou
=== WhatchingYou ===

Autori: Diomede Mazzone, Fabio Tessitore
Tag: Node JS, Python, client/server
Versione Stabile:1.0
Licenza: GPL 3.0 o successive

== Descrizione ==

questo software ha scopo didattico, consiste in un server che sfrutta la tecnologia Node che restituisce ad un client connesso sulla porta 3000 un fine index.html. Il file index contiene un'immagine acquisita dalla webcam attraverso uno script python. ogni volta che lo script sovrascrive l'immagine il server rileva l'aggiornamento e la spedisce al client.


Requisiti:
*   Raspberry PI (testato su Raspberry PI 2)
*	  npm (https://www.npmjs.com/)
*   node js (https://nodejs.org/en/)
*   Python


== Istallazione e Avvio ==

* modifica IP: nel file index.html bisogna modificare l'indirizzo IP con quello del dispositivo sul quale è lanciato il server


* installazione delle dipendenze: all'interno della cartella di WhatchingYou bisogna installare le dipendenze:

  $ npm install
  
  
* per l'esecuzione prima bisogna lanciare lo script python, successivamente il server node js:
  
  $ python camera.py
  
  $ node app.js
  oppure
  $ nodejs app.js //dipende dalla distribuzione di linux


a questo punto il server è in ascolto.

== File Presenti ==

I file presenti sono:


== Bug Riscontrati ==


= Ringraziamenti =

