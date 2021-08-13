=================
Notes on Nty-code
=================


Overview
========

The directory *core/ts* contains the *typescript*-code for the *cli*, the *web-server* and the *front-end*. To translate all those *typescript* code at once into *javascript*, we have decided to use *ECMAscript modules* also for *nodejs*. As a consequence *nodejs v14* is at least required.

Database
========

browser or nodejs
-----------------

- TaffyDB_ : fast in-memory database, SQL inspired features
- LowDB_ : local JSON database for small projects

.. _TaffyDB : https://github.com/typicaljoe/taffydb
.. _LowDB : https://github.com/typicode/lowdb


browser only
------------

- idb_ : IndexedDB, but with promises

.. _idb : https://github.com/jakearchibald/idb


server side
-----------

- json-server_ : REST API with zero coding

.. _json-server : https://github.com/typicode/json-server


