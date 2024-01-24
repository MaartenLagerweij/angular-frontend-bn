# (DE) ProductsFrontendApp2

Dieses Projekt wurde mit [Angular CLI](https://github.com/angular/angular-cli) Version 17.1.0 erstellt. Es handelt sich um das Frontend, um eine Liste von Autos anzuzeigen, wobei es möglich ist, Autos zur Liste hinzuzufügen und zu löschen. 
Das Projekt besteht aus 3 Teilen:
- Angular für die Frontend-Nutzung (aktuelles Repository)
- Symfony für die Backend-API
- MySQL für die Datenbank
Diese README-Datei soll Anweisungen geben, wie man das Projekt startet und ausführt.
Ein Entwurf der Projektplanung findet sich hier: https://lucid.app/lucidchart/35d14b52-6362-4db4-8dd6-9c73aa4283b0/edit?viewport_loc=61%2C-30%2C1837%2C1053%2C0_0&invitationId=inv_3f726896-7d79-4626-aaf5-91105ddf821f

## Inhaltsverzeichnis

- [Installation](#installation)
- [Benutzung](#benutzung)

## Installation

### Voraussetzungen

- Node.js und npm (für Angular Frontend)
- Composer (für Symfony Backend)
- XAMPP (für MySQL-Datenbank)

### Frontend-Einrichtung

1. Zum Frontend-Ordner navigieren: `cd products-frontend-app2`.
2. Notwendige Pakete installieren: `npm install`.
3. Die Frontend-Anwendung starten: `npm start` oder `ng serve`.
4. Browser öffnen und zu `http://localhost:4200/login` gehen.
5. Anmelden mit Benutzername: 'maarten' und Passwort 'benntec'.

## Benutzung

Nachdem sowohl das Frontend, das Backend und XAMPP (mit korrekter Datenbank) laufen, die Anwendung starten, indem man zur Login-Seite unter `http://localhost:4200/login` geht. Mit den gegebenen Anmeldeinformationen einloggen. Liste der Produkte, die aus der Datenbank abgerufen wird, anzeigen. Bei Bedarf Produkte hinzufügen.

## Entwicklungsserver

`ng serve` ausführen, um einen Entwicklungsserver zu starten. Navigiere zu `http://localhost:4200/`. Die Anwendung wird automatisch neu geladen, wenn du Änderungen an den Quelldateien vornimmst.

## Code-Scaffolding

`ng generate component component-name` ausführen, um eine neue Komponente zu generieren. Du kannst auch `ng generate directive|pipe|service|class|guard|interface|enum|module` verwenden.

## Build

`ng build` ausführen, um das Projekt zu bauen. Die Build-Artefakte werden im `dist/`-Verzeichnis gespeichert.

## Unit-Tests ausführen

`ng test` ausführen, um die Unit-Tests über [Karma](https://karma-runner.github.io) zu starten.

## End-to-End-Tests ausführen

`ng e2e` ausführen, um die End-to-End-Tests über eine Plattform deiner Wahl auszuführen. Um diesen Befehl zu verwenden, musst du zuerst ein Paket hinzufügen, das End-to-End-Testfähigkeiten implementiert.

## Weitere Hilfe

Um weitere Hilfe zur Angular CLI zu erhalten, verwende `ng help` oder besuche die [Übersichts- und Befehlsreferenzseite von Angular CLI](https://angular.io/cli).




# (EN) ProductsFrontendApp2

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.1.0. This is the frontend to display a list of cars, where it is possible to add and delete cars to the list. 
The projects consists of 3 part:
- Angular for Frontend use (current repository)
- Symfony for the backend API
- MySQL for the database
This READ.me file is meant to give instruction on how to start up and run the project.
A skatch of the planning of the project can be found here: https://lucid.app/lucidchart/35d14b52-6362-4db4-8dd6-9c73aa4283b0/edit?viewport_loc=170%2C461%2C1837%2C1053%2C0_0&invitationId=inv_3f726896-7d79-4626-aaf5-91105ddf821f

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)

## Installation

### Requirements

- Node.js and npm (for Angular Frontend)
- Composer (for Symfony Backend)
- XAMPP (for MySQL database)

### Frontend Setup

1. Navigate to the frontend folder: `cd products-frontend-app2`.
2. Install necessary packages: `npm install`.
3. Start the frontend application: `npm start` or `ng serve`
4. Open a browser and go to http://localhost:4200/login
5. Login with Username: 'maarten' and password 'benntec'

## Usage

After both frontend, backend and XAMPP (with correct database) are running, start the application by going to the login page on http://localhost:4200/login. Sign in with given credentials. See list of products that is fetched from the database. Add products if necessary.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
