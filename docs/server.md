---
id: server
title: Ticktok.io Server
sidebar_label: Server
---


## Requirements 
Although the server can work without any externals requirements, this mode is meant for development/experiment use
. For production use the basic requirements are:

* [MongoDB](https://www.mongodb.com/) - For persistence and clustering
* [RabbitMQ](https://www.rabbitmq.com/) - For ticks delivery 

## Start up
The simplest way to start up the server is by using the [ticktok/ticktok](https://hub.docker.com/r/ticktok/ticktok
) docker image, available from DockerHub.

```bash
docker run \
    -e RABBIT_URI=amqp://rabbit.domain/vhost
    -e MONGO_URI=mongodb://domain/db
    -e ACCESS_TOKEN=AccessToken
    -p 9643:9643
    ticktok/ticktok
```

## Server configuration
| Option | Description | Default |
|---|---|----|
| RABBIT_URI | Rabbit uri that is available to both the server and the consumers, if there's a need to expose different uri to the consumers, use CONSUMER_RABBIT_URI. If no value is given, ticktok will work in http mode.| http-mode | 
| RABBIT_CONSUMER_URI | Use this to set a different rabbit uri for consumers, most of the time you'll want this to reduce permissions of consumers | - |
| MONGO_URI | This should include the database name as follows: <i>mongodb://domain/db_name</i>. If no value is given it will be configured to an internal in-memory database. <span class="warning">Internal database should be used for testing purpose only.</span> | internal |
| ACCESS_TOKEN | This is the security token. <span class="warning">Default value is provided only for testing purpose. You should replace it for production environments. | ticktok-zY3wpR | 

