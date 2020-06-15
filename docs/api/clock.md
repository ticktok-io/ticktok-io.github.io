---
id: clock 
title: /api/v1/clocks/{id}
sidebar_label: /api/v1/clocks/{id}
---

## Invoke an action on clock
```PUT: http://ticktok.io.domain/api/v1/clocks/{clockId}/{action}```

For each clock there might be several actions available, these action will be returned in the 'links' section. Currently, the available actions are:
* tick - Manually invocation of a specific clock
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
            "href": "http://ticktok.io.host:9643/api/v1/clocks/5ee4f980d8469e49e84928c1"
        },
        {
            "rel": "resume",
            "href": "http://ticktok.io.host:9643/api/v1/clocks/5ee4f980d8469e49e84928c1/resume"
        },
        {
            "rel": "tick",
            "href": "http://ticktok.io.host:9643/api/v1/clocks/5ee4f980d8469e49e84928c1/tick"
        }
    ]
}
```

## Retrieve a specific clock
```PUT: http://ticktok.io.domain/api/v1/clocks/{clockId}```

Get a clock by clock id

```json
{
    "id": "5ee980d8449e84928c1",
    "name": "retailer:poll-new-messages",
    "schedule": "every.30.seconds",
    "status": "PAUSED",
    "links": [
        {
            "rel": "self",
            "href": "http://ticktok.io.host:9643/api/v1/clocks/5ee980d8449e84928c1"
        },
        {
            "rel": "resume",
            "href": "http://ticktok.io.host:9643/api/v1/clocks/5ee980d8449e84928c1/resume"
        },
        {
            "rel": "tick",
            "href": "http://ticktok.io.host:9643/api/v1/clocks/5ee980d8449e84928c1/tick"
        }
    ]
}
```


