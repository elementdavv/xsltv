#!/usr/bin/python3
'''
produce user.xml from user.chn
if run without param, use default as user
'''

import sys
import os
import json
import time
import xmltv

EPGXML = "e.xml"
USER = "default"
BAG = "userbag.json"

class Newtv:
  ''' class def'''

  def __init__(self):
    ''' init method'''
    self.currentdir = os.path.dirname(os.path.realpath(__file__))
    self.channels = None
    self.programmes = None
    self.mychannels = None

  def readepg(self):
    ''' read epg channels/programmes '''
    filename = os.path.join(self.currentdir, EPGXML)

    self.channels = xmltv.read_channels(open(filename, 'r'))
    self.programmes = xmltv.read_programmes(open(filename, 'r'))

  def readchanneldef(self, u):
    ''' read user channels '''
    channeldef = os.path.join(self.currentdir, 'user', u) + '.chn'

    self.mychannels = [line for line in open(channeldef)]

  def myepg(self, u):
    ''' create my epg '''
    tvxml = os.path.join(self.currentdir, 'user', u) + '.xml'

    w = xmltv.Writer()
    self.addepgs(w)
    w.write(tvxml, pretty_print=True)

  def addepgs(self, w):
    ''' add epg '''
    for mychannel in self.mychannels:
      self.managechannel(w, mychannel.strip())

  def managechannel(self, w, mychannel):
    ''' handle channel '''
    for channel in self.channels:
      displayname = channel["display-name"][0][0]
      if displayname == mychannel:
        w.addChannel(channel)
        self.manageprogramme(w, channel["id"])

  def manageprogramme(self, w, channelid):
    ''' handle programmes '''
    for programme in self.programmes:
      channel = programme["channel"]
      if channel == channelid:
        w.addProgramme(programme)

  def updatebag(self, u, i, p, b):
    ''' update userbag info '''
    ymd = time.strftime('%Y%m%d', time.localtime(time.time()))
    dt = time.strftime('%D %T', time.localtime(time.time()))
    bagname = os.path.join(self.currentdir, BAG)
    with open(bagname, 'r') as f:
      vs = json.load(f)
      if u not in vs:
        vs[u] = {}
        vs[u]['created'] = dt
      vs[u]['data'] = ymd
      if i is not None:
        vs[u]['ip'] = i
      if p is not None:
        vs[u]['platform'] = p
      if b is not None:
        vs[u]['browser'] = b
    with open(bagname, 'w') as f:
      json.dump(vs, f, indent=2)


if __name__ == '__main__':
  user = USER
  ip = None
  bname = None
  platform = None
  browser= None
  if len(sys.argv) > 1:
    user = sys.argv[1]
  if len(sys.argv) > 2:
    ip = sys.argv[2]
  if len(sys.argv) > 3:
    bname = sys.argv[3]
  if bname is not None:
    bname = bname.replace(',', ' ')
    platform, browser = bname.split(' ', 1)

  newtv = Newtv()
  newtv.readepg()
  newtv.readchanneldef(user)
  newtv.myepg(user)
  newtv.updatebag(user, ip, platform, browser)
