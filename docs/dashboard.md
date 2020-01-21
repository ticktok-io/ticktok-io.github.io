---
id: dashboard
title: Dashboard
sidebar_label: Dashboard
---

## Overview 
Although most of the scheduling operation of Ticktok.io is done programmatically. the dashboard provides a way to monitor and do essential action on clocks and ticks.

![screenshot](https://raw.githubusercontent.com/ticktok-io/brand/master/screenshots/screenshot_clock_list_v26.png)

## Authentication
Authentication for the dashboard is done via the url query param 'api_key'
```
   https://<domain>:9643?api_key=ACCESS_TOKEN
```

## Pause/Resume clocks
Sometime we need to pause a clock immediately. In order to do that each clock has a pause/resume button next to it in the UI. Once a clock is disable it wont be deleted and your program will not get ticks from it. 
 

