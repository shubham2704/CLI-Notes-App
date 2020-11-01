# CLI Notes App

A simple CommandLine/CLI notes taking app made with nodejs. With features of adding,listing and removing the desired notes. The notes are saved in JSON format in `notes-data.json` file, on your system. This file gets created in `CLI-Notes-App` directory wehn the app is executed very first time. 

## Features
- Add note
- Read all notes
- Read a single note
- Remove the note

## Usage

- In order to use this app, you need to download or clone this repositiory on your local machine for this run the below command in your terminal/powershell/cmd
```
git clone https://github.com/shubham2704/CLI-Notes-App.git
```

- After cloning the repository : 
```
npm install
```
- After running the above commands the app is ready to run.

```
- [ -t ] is used to give title for your note.
- [ -b ] is used to give body/Description or the actual note to your note.
- you can see below how these commands are used
```

#### Adding the new note
```
node app.js add -t "Title of note" -b "Actual note/ Body for the note"
```

#### Reading all notes
```
node app.js list
```

#### Reading the single note
```
node app.js read -t "Title of the note you want to read"
```

#### Removing the note
```
node app.js remove -t "Title of the note you want to remove"
```