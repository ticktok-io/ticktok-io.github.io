---
id: auth 
title: Authentication
sidebar_label: authentication
---

## Access token 

All calls should be authenticated with an access token.
There are two ways to provide an access token:

**Using a query param:**

```curl -X POST http://ticktok.io.host:9643/api/v1/clocks?access_token=<token>```

**Using authorization header:**

```curl -H "Authorization: token <access_token>" -X POST http://ticktok.io.host:9643/api/v1/clocks```



