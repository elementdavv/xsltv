#!/usr/bin/python3

import sys
import os
import urllib.request
# from pprint import pprint
import xmltv

EPGURL = "http://epg.51zmt.top:8000/e.xml"
EPGXML = "e.xml"
CHANNELDEF = "channeldef"
TVXML = "tv.xml"

class Myepg:
''' main class '''

  def readepg(self, url=None):
    currentDir = os.path.dirname(os.path.realpath(__file__))

    if not url:
      url = EPGURL

    filename = os.path.join(currentDir, EPGXML)

    try:
      urllib.request.urlretrieve(url, filename)
    except:
      print("file download failed.")
      sys.exit()

    self.channels = xmltv.read_channels(open(filename, 'r'))
    self.programmes = xmltv.read_programmes(open(filename, 'r'))

  def readchanneldef(self, channeldef=None):
    currentDir = os.path.dirname(os.path.realpath(__file__))

    if not channeldef:
      channeldef = CHANNELDEF
    channeldef = os.path.join(currentDir, channeldef)

    self.mychannels = [line for line in open(channeldef)]

  def myepg(self, tvxml=None):
    currentDir = os.path.dirname(os.path.realpath(__file__))

    if not tvxml:
      tvxml = TVXML
    tvxml = os.path.join(currentDir, tvxml)

    w = xmltv.Writer()

    self.addepgs(w)
    w.write(tvxml, pretty_print=True)

  def addepgs(self, w):
    for mychannel in self.mychannels:
      self.managechannel(w, mychannel.strip())

  def managechannel(self, w, mychannel):
    for channel in self.channels:
      displayname = channel["display-name"][0][0]
      if displayname == mychannel:
        w.addChannel(channel)
        self.manageprogramme(w, channel["id"])

  def manageprogramme(self, w, channelid):
    for programme in self.programmes:
      channel = programme["channel"]
      if channel == channelid:
        w.addProgramme(programme)

if __name__ == '__main__':
  myepg = Myepg()
  myepg.readepg()
  myepg.readchanneldef()
  myepg.myepg()

