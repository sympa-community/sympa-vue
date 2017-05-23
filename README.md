# `sympa-vue`

[![Build Status](https://travis-ci.org/sympa-community/sympa-vue.svg?branch=master)](https://travis-ci.org/sympa-community/sympa-vue)

Web-interface for Sympa, built with VueJS

`node>=4` needs to be installed first

```shell
git clone https://github.com/sympa-community/sympa-vue
cd sympa-vue
npm install
npm start
```

# How to run a mailserver for tests ?

## Run James

First you'll need to have `docker` and `docker-compose` installed on your machine.

You can retrieve the `docker-compose.yml` file for James by using the following command :

`wget https://raw.githubusercontent.com/apache/james-project/master/dockerfiles/run/docker-compose.yml`

After that make sure that you have the Docker daemon is running. If not, just run `sudo dockerd`.

Also make sure that nothing is already listening on the following ports : 80, 25, 110, 143, 465, 587, 993 and 9042.

Then you will have to start the services with : `docker-compose up` and wait a few seconds.

A default domain will be created : `james.local`

Just edit your hosts file (located at : `/etc/hosts`) and add : `127.0.0.1  james.local`

The next time you will only have to do :

  - go to the folder containing the `docker-compose.yml` file you got last time

  - run `sudo dockerd` if needed, then `docker-compose up`

## Add a user

Juste make sure you have James running, then run

`docker exec james java -jar /root/james-cli.jar -h 127.0.0.1 -p 9999 adduser user01@james.local 1234`

to add a user which has :

  - email = `user01@james.local`

  - password = `1234`

## Configure Thunderbird to access James' users' mails

Email adress: `user01@james.local`

Password: `1234`

**Incoming server:**

  - Protocol: `IMAP`

  - Host: `localhost`

  - Port: `143`

  - SSL: `none`

  - Authentication: `normal`

  - username: `user01`

**Outgoing server:**

  - Protocol: `SMTP`

  - Host: `localhost`

  - Port: `25`

  - SSL: `none`

  - Authentication: `normal`

  - username: `user01`

and that's it! You will be aible to send and receive messages using IMAP and SMTP.

## Let's use JMAP !

### Get a `continuationToken`

If you did all these things correctly, you will be aible to send a POST request to the `http://localhost/authentication` endpoint.

So you will need to set the following headers :

  - `Content-Type` to `application/json; charset=UTF-8`

  - `Accept` to `application/json`

And send the following JSON:

```json
{
  "username": "user01@james.local",
  "clientName": "Sympa",
  "clientVersion": "0.0.1",
  "deviceName": "Device for testing"
}
```

and if it's OK, you will have a 200 return like that:

```json
{
  "continuationToken": "user01@james.local_2017-05-23T16:59:56.273Z_DMoVfgOk73rQE6PIpZ3bu8A73nDUkZFzZ0r940plo2Ej/AP2S2PfgLSH/oaugafyjohdlO6g+znX+38TA0rjipI/3aTh0q42Vy+tAPccy87sFqeC+tLpJoukN9bhEFOlpPknz6TMyaW/5P7u0gNLYv5qiKvTxUSulOb4/dpmEnt1y+u7SdmAOb/Jt63e9NhWE3YEUz9uUzUXVXcqBX5eJSMBId35f6HnXUu5n+ESFip81cI6r34xX/HDf2+mltTTisQdycH5Trjgh6M5R17SJ06DGJkv6iHBccjY3na+scCaXo0O3hYScm9lKGeL9gXpNOibUoUyjfSixZC0N1sDCA==",
  "methods": [
    "password"
  ],
  "prompt": null
}
```

### Get the `accessToken`

To get the accessToken you will need to send a new POST request like before with the same headers, but with the following content:

```json
{
  "token": "user01@james.local_2017-05-23T16:59:56.273Z_DMoVfgOk73rQE6PIpZ3bu8A73nDUkZFzZ0r940plo2Ej/AP2S2PfgLSH/oaugafyjohdlO6g+znX+38TA0rjipI/3aTh0q42Vy+tAPccy87sFqeC+tLpJoukN9bhEFOlpPknz6TMyaW/5P7u0gNLYv5qiKvTxUSulOb4/dpmEnt1y+u7SdmAOb/Jt63e9NhWE3YEUz9uUzUXVXcqBX5eJSMBId35f6HnXUu5n+ESFip81cI6r34xX/HDf2+mltTTisQdycH5Trjgh6M5R17SJ06DGJkv6iHBccjY3na+scCaXo0O3hYScm9lKGeL9gXpNOibUoUyjfSixZC0N1sDCA==",
  "method": "password",
  "password": "1234"
}
```

The `token` field must contain the value of the `continuationToken` got just before, and we need to set the `password` field with the user's password (here: `1234`).

If all is OK, you will get a 201 Created response, with a similar content:

```json
{
  "accessToken": "e41c4ec1-cabd-4bec-baa3-b2453b3b2b1d",
  "api": "/jmap",
  "eventSource": "/notImplemented",
  "upload": "/upload",
  "download": "/download"
}
```

And here you have the `accessToken` and differents endpoint for using JMAP.

From now, you will have to add the header `Authorization` to the value of the accessToken got just before.

### Get all differents endpoint

Making a `GET` request at the authentication endpoint with the `Authorization` header set will give you the differents endpoint like before; it can be useful if it changes during the time.. so if at one moment you get a 404 error, it could be nice to run that request to get current endpoints.

It will give you something like that:

```json
{
  "api": "/jmap",
  "eventSource": "/notImplemented",
  "upload": "/upload",
  "download": "/download"
}
```

### Revoke a token

Just make a `DELETE` request with the `Authorization` header, il will give you a `204` response if it was OK, or a `401` response if it was already revoked or if no `Authorization` header was set.


*To be continued...*

