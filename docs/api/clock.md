---
id: clock 
title: /api/v1/clocks/{id}
sidebar_label: /api/v1/clocks/{id}
---

## Invoke an action on clock
```PUT: http://ticktok.io.domain/api/v1/clocks/{clockId}/{action}```

For each clock there might several available actions, these action will be return in the 'links' section. Currently available action are:
* tick - Manually tick a specific clock
* pause - Pause an active clock
* resume - Resume paused clock


**Example response:**
```json
{
    "id": "5ee4f980d8469e49e84928c1",
    "name": "events:scale-agents",
    "schedule": "every.10.minutes",
    "status": "PAUSED",
    "links": [
        {
            "rel": "self",
            "href": "http://localhost:9643/api/v1/clocks/5ee4f980d8469e49e84928c1"
        },
        {
            "rel": "resume",
            "href": "http://localhost:9643/api/v1/clocks/5ee4f980d8469e49e84928c1/resume"
        },
        {
            "rel": "tick",
            "href": "http://localhost:9643/api/v1/clocks/5ee4f980d8469e49e84928c1/tick"
        }
    ]
}
```

## Retrieve a specific clock
```PUT: http://ticktok.io.domain/api/v1/clocks/{clockId}```

Get a clock by its id

```json
{
    "id": "5ee4f980d8469e49e84928c1",
    "name": "events:scale-agents",
    "schedule": "every.10.minutes",
    "status": "PAUSED",
    "links": [
        {
            "rel": "self",
            "href": "http://localhost:9643/api/v1/clocks/5ee4f980d8469e49e84928c1"
        },
        {
            "rel": "resume",
            "href": "http://localhost:9643/api/v1/clocks/5ee4f980d8469e49e84928c1/resume"
        },
        {
            "rel": "tick",
            "href": "http://localhost:9643/api/v1/clocks/5ee4f980d8469e49e84928c1/tick"
        }
    ]
}
```


