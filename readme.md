# description
please goto [timelegend.net](https://timelegend.net/tvguide)

## install
* setup nginx
* setup php
* copy to www root
* setup crontab

## newepg.py -d
* get e.xml, and produce all.chn
* run on crontab, get everyday e.xml

## e.xml
epg file from [51zmt](http://epg.51zmt.top:8000/e.xml)

## all.chn
complete channel list

## newtv.py {user} {ip} {browserinfo}
* produce user/{user}.xml from e.xml and user/{user}.chn
* update userbag.json
* run without param on crontab after newepg.py
* run with param on called by usertv.php

## user/{user}.chn
user channel list

## user/{user}.xml
user tv.xml, read by tv.xsl

## user/default.chn
default channel list

## user/default.xml
default tv.xml, read by tv.xsl

## userbag.json
user data: tv.xml update time, where from, etc

## usertv.php usertag
* call newtv.py with param user/ip/browser
* redirect to index.html

## userchannel.php user, chns
* create or update user/{user}.chn
* redirect to usertv.php with param usertag

## privileges
|file               |  privileges  |        owner         |   access on    |
|:------------------|:------------:|----------------------|:---------------|
|e.xml              | 664          |                      |   local        |
|all.chn            | 664          |                      |   local        |
|userbag.json       | 666          |                      |   local+remote |
|user/              | 755          |   www-data:www-data  |   remote       |
|user/default.chn   | 666          |                      |   local        |
|user/default.xml   | 666          |                      |   local        |
|user/{user}.chn    | 644          |                      |   remote       |
|user/{user}.xml    | 644          |                      |   remote       |
