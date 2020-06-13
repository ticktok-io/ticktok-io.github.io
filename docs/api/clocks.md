---
id: clocks 
title: /api/v1/clocks
sidebar_label: /api/v1/clocks
---

## Create a new clock
```POST http://ticktok.io.host:9643/api/v1/clocks```

Register a client to a clock while either creating a new clock or joining an existing one. Only one client instance will receive a clock per name & schedule 

**Body:**
```json
{
    "name": "Clock name",
    "schedule": "every.2.minutes"
}
``` 

The response will include current clock properties.

**Example response (RabbitMQ):**
```json
{
    "id": "5ee4d459d8469e49e848f492",
    "name": "events:scale-agents",
    "schedule": "every.10.minutes",
    "status": "PENDING",
    "channel": {
        "type": "rabbit",
        "details": {
            "uri": "amqp://localhost",
            "queue": "ticktok-events:scale-agents;every.10.minutes"
        },
        "uri": "amqp://localhost",
        "queue": "ticktok-events:scale-agents;every.10.minutes"
    },
    "links": [
        {
            "rel": "self",
            "href": "http://localhost:9643/api/v1/clocks/5ee4d459d8469e49e848f492"
        },
        {
            "rel": "tick",
            "href": "http://localhost:9643/api/v1/clocks/5ee4d459d8469e49e848f492/tick"
        },
        {
            "rel": "pause",
            "href": "http://localhost:9643/api/v1/clocks/5ee4d459d8469e49e848f492/pause"
        }
    ]
}
```

The response includeד the details of the queue that will allow the client to receive ticks for the specified schedule. The channel section will be different according to its type:
* rabbit:
  - uri - rabbit uri 
  - queue - queue name to receive ticks from
* http:
  - url - url to poll for ticks from  

## Get all clocks
```GET: http://ticktok.io.host:9643/api/v1/clocks```

Retrieve all clocks excluding pending clocks by default. 

**Example response:**
```json
{
    "id": "23412",
    "name": "provision-renderers",
    "schedule": "every.10.minutes",
    "status": "ACTIVE"
}
```

This call allow you to filter out clocks by specifying query params.

|Parameter |Description                             |
|----------|----------------------------------------|
| name     | Clock's name                           |
| status   | Possible values: PENDING/ACTIVE/PAUSED |
| schedule | Clock schedule                         |


**Search examples:**

Find all active clocks
```
GET http://ticktok.io.host:9643/api/v1/clocks?status=ACTIVE
```
Find all clocks schedule to anything other than every 10 seconds
```
GET http://ticktok.io.host:9643/api/v1/clocks?schedule=!every.10.seconds
```

