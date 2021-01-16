p.py:
a test program, use e.xml

myepg.py:
get e.xml, produce tv.xml from e.xml and channeldef

e.xml:
epg file from http://epg.51zmt.top:8000/e.xml

channeldef:
my channel name list

tv.xml:
data file read by xsltv

crontab -e
* 7 * * * /home/legend/libs/xsltv/myepg.py

xsltv:
see README.txt first
only titantv theme optimized, pls use it instead
edited: titantv.tv.css tv.xsl


new 2021.01.06
newepg.py: -d
get e.xml, produce all.chn
run from crontab, get everyday e.xml

all.chn:
complete channel list

newtv.py: {user}
produce user/{user}.xml from e.xml and user/{user}.chn
update userbag.json
run without param from crontab after newepg.py
run with param by called from usertv.php

user/{user}.chn:
user channel list

user/{user}.xml:
user tv.xml file

userbag.json:
user.xml generating date

usertv.php: tag
call newtv.py for user
redirect to index.html

userchannel.php: tag,chns
create or update user.chn
redirect to usertv.php

privileges:
file                pri                     run
e.xml:              664                     local
all.chn:            664                     local
userbag.json:       666                     local+remote
user/:              755 www-data:www-data   remote
user/default. * :   666                     local
user/ * :           644                     remote
