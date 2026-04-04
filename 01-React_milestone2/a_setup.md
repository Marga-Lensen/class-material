### Starting point: new folder in existing path (for example: project01-react/)

```console
mkdir milestone2
cd milestone2
```

### there, at **milestone2**`$` , start creating:

```console
npm create vite@latest
```
### select these options; start with giving the name of your project (here: props):
```console
│
◇  Project name:
│  props
│
◇  Package name:
│  props
│
◇  Select a framework:
│  React
│
◇  Select a variant:
│  JavaScript
│
◆  Install with npm and start now?
│  ● Yes / ○ No
└
```

---
**In the console you see things happening like this:**
```console

◇  Scaffolding project in ./props...
│
◇  Installing dependencies with npm...

added 151 packages, and audited 152 packages in 8s

36 packages are looking for funding
  run `npm fund` for details

found 0 vulnerabilities
│
◇  Starting dev server...

> props@0.0.0 dev
> vite

Port 5173 is in use, trying another one... 

  VITE v8.0.3  ready in 163 ms

  ➜  Local:   http://localhost:5174/
  ➜  Network: use --host to expose
  ➜  press h + enter to show help

```

---
### Pay attention; pitfalls:

**❕ make sure to be in the right folder (here `props` ) to run the project.**

**If something goes wrong, just `control + C` , make sure you are in the right folder and run with `npm run dev` again.**

```console
Ctrl + C
cd props
npm run dev
```


**Important: ❕❕ when you get a project from a zip or from GitHub, you should always start with `npm install`, then `npm run dev`**


<!-- **In case of network access issues:  `npm run dev -- --host`** --> 
