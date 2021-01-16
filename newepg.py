#!/usr/bin/python3

'''
download e.xml and produce all.chn
run with -d to download e.xml
'''

import sys
import os
import requests
import xmltv

EPGURL = "http://epg.51zmt.top:8000/e.xml"
EPGXML = "e.xml"
ALLCHN = "all.chn"

currentdir = os.path.dirname(os.path.realpath(__file__))
ename = os.path.join(currentdir, EPGXML)
aname = os.path.join(currentdir, ALLCHN)

if len(sys.argv) > 1 and sys.argv[1] == '-d':
  try:
    r = requests.get(EPGURL)
    with open(ename, 'wb') as f:
      f.write(r.content)
  except:
    print("file download failed.")
    sys.exit()

channels = xmltv.read_channels(open(ename, 'r'))

with open(aname, 'w') as f:
  for channel in channels:
    f.write((channel["display-name"][0][0]) + '\n')
