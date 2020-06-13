---
id: clocks 
title: /api/v1/clocks
sidebar_label: /api/v1/clocks
---

## Create a new clock
```POST http://ticktok.io.host:9643/api/v1/clocks```

Register a client to a clock while either creating a new clock or joining an existing one. Only one client instance will receive a clock per name & schedule.

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
    "id": "9e49e848f492",
    "name": "events:scale-agents",
    "schedule": "every.10.minutes",
    "status": "PENDING",
    "channel": {
        "type": "rabbit",
        "details": {
            "uri": "amqp://localhost",
            "queue": "ticktok-events:scale-agents;every.10.minutes"
        }
    },
    "links": [
        {
            "rel": "self",
            "href": "http://ticktok.io.host:9643/api/v1/clocks/9e49e848f492"
        },
        {
            "rel": "tick",
            "href": "http://ticktok.io.host:9643/api/v1/clocks/9e49e848f492/tick"
        },
        {
            "rel": "pause",
            "href": "http://ticktok.io.host:9643/api/v1/clocks/9e49e848f492/pause"
        }
    ]
}
```

The details of the channel that will allow the client to receive ticks for the specified schedule. The channel section will be different according to its type:
* rabbit:
  - uri - rabbit uri 
  - queue - queue name to receive ticks from
* http:
  - url - url to poll for ticks  

## Get all clocks
```GET: http://ticktok.io.host:9643/api/v1/clocks```

Retrieve all clocks. clocks with a pending status excluded by default. 

**Example response:**
```json
[
    {
        "id": "9e49e848f492",
        "name": "events:scale-agents",
        "schedule": "every.10.minutes",
        "status": "ACTIVE",
        "links": [
            {
                "rel": "self",
                "href": "http://ticktok.io.host:9643/api/v1/clocks/9e49e848f492"
            },
            {
                "rel": "tick",
                "href": "http://ticktok.io.host:9643/api/v1/clocks/9e49e848f492/tick"
            },
            {
                "rel": "pause",
                "href": "http://ticktok.io.host:9643/api/v1/clocks/9e49e848f492/pause"
            }
        ]
    },
    {
        "id": "398778e7a98",
        "name": "marketing:weekly-email",
        "schedule": "every.7.days",
        "status": "PAUSED",
        "links": [
            {
                "rel": "self",
                "href": "http://ticktok.io.host:9643/api/v1/clocks/398778e7a98"
            },
            {
                "rel": "tick",
                "href": "http://ticktok.io.host:9643/api/v1/clocks/398778e7a98/tick"
            },
            {
                "rel": "pause",
                "href": "http://ticktok.io.host:9643/api/v1/clocks/398778e7a98/pause"
            }
        ]
    }
]
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

