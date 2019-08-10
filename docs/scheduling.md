---
id: scheduling
title: Scheduling
sidebar_label: Scheduling
---

To create a new schedule use one of the available SDKs

#### Java
```Java
Ticktok ticktok = new Ticktok(options().domain("http://ticktok:9643").token("1234"));
ticktok.schedule("user-mgmt:purge-users", "every.2.minutes", () -> foo());
```
#### Javascript
```javascript
const ticktok = require('ticktok')

ticktok('https://ticktok:9643', 'token')
  .schedule({name: 'user-mgmt:purge-users', schedule: 'every.30.seconds'}, (err, tick) => { 
    purge() 
})
```
#### Clojure
```clojure
(require '[ticktok.core :as tk])

(def config {:host "http://ticktok:9643"
             :token "ticktok-zY3wpR"})

(def ticktok (tk/ticktok :start config))

(ticktok :schedule {:name "hurry.up"
                    :schedule "every.3.seconds"
                    :callback #(println "First clock got a tick!")})

(tk/ticktok :close)
```

## Supported schedule expressions 

### Fixed

| Expression | Description |
|---|---|
| every.[1-999].seconds | Ticks every X seconds |
| every.[1-999].minutes | Ticks every X minutes |
| every.[1-999].hours   | Ticks every X hours   |

### Special

| Expression | Description |
|---|---|
| @never | This will never ticks automatically, only manually via UI or code |
