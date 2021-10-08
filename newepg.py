#!/usr/bin/python3

'''
download e.xml and produce all.chn
run with -d to download e.xml
'''

import sys
import os
import requests
from requests.exceptions import RequestException
import xmltv

EPGURL = "http://epg.51zmt.top:8000/e.xml"
EPGXML = "e.xml"
ALLCHN = "all.chn"

CURRENTDIR = os.path.dirname(os.path.realpath(__file__))
ENAME = os.path.join(CURRENTDIR, EPGXML)
ANAME = os.path.join(CURRENTDIR, ALLCHN)

if len(sys.argv) > 1 and sys.argv[1] == '-d':
    try:
        R = requests.get(EPGURL)
        with open(ENAME, 'wb') as f:
            f.write(R.content)
    except (RequestException, IOError) as ex:
        print(ex)
        sys.exit()

CHANNELS = xmltv.read_channels(open(ENAME, 'r'))

with open(ANAME, 'w') as f:
    for channel in CHANNELS:
        f.write((channel["display-name"][0][0]) + '\n')
