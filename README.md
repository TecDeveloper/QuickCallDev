# QuickCall (development version)

<p align ="center">
<a href="#license" alt="License">
        <img src="https://img.shields.io/static/v1?label=License&message=MIT&color=brightgreen" /></a>
<a href="#version" alt="Version">
  <img src="https://shields.io/npm/v/quickcalldev" /> </a>
</p>

## ⚠️ Warning ⚠️
### This is a development build and you might face some issues. We push to the [main branch](https://npmjs.com/package/quickcall).

### Set Up

1. Install the package
   
```javascript
npm init
```

```javascript
npm install quickcalldev
```

2. (optional) Configure your quickcall build

Currently, the only way to configure quickcall is using functions. We are planning to roll out a config file based system soon.
```
const qc = require("quickcalldev")

qc.customShorts(true)
qc.thirdPartyEnabled(false)
```
3. (optional, only available in quickcalldev) Enable experimental functions

```
qc.betaEnabled(true)
```
4. **Work In Progress** Install 3rd-party packages

**⚠️Warning⚠️: [chalk](https://npmjs.com/package/chalk) is used by default for some functions, meaning you dont need to install it again.**

```javascript
npm install simple-get
```

*soon™*