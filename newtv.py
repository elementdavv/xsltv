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

    def read_channel_def(self, usr):
        ''' read user channels '''
        channeldef = os.path.join(self.currentdir, 'user', usr) + '.chn'

        with open(channeldef) as file:
            self.mychannels = [line.rstrip() for line in file]

    def myepg(self, usr):
        ''' create my epg '''
        tvxml = os.path.join(self.currentdir, 'user', usr) + '.xml'

        wri = xmltv.Writer()
        self.addepgs(wri)
        wri.write(tvxml, pretty_print=True)

    def addepgs(self, wri):
        ''' add epg '''
        for mychannel in self.mychannels:
            self.managechannel(wri, mychannel.strip())

    def managechannel(self, wri, mychannel):
        ''' handle channel '''
        for channel in self.channels:
            displayname = channel["display-name"][0][0]
            if displayname == mychannel:
                wri.addChannel(channel)
                self.manageprogramme(wri, channel["id"])

    def manageprogramme(self, wri, channelid):
        ''' handle programmes '''
        for programme in self.programmes:
            channel = programme["channel"]
            if channel == channelid:
                wri.addProgramme(programme)

    def updatebag(self, usr, ip1, plat, brow):
        ''' update userbag info '''
        ymd = time.strftime('%Y%m%d', time.localtime(time.time()))
        dat = time.strftime('%D %T', time.localtime(time.time()))
        bagname = os.path.join(self.currentdir, BAG)
        with open(bagname, 'r') as fil:
            vis = json.load(fil)
            if usr not in vis:
                vis[usr] = {}
                vis[usr]['created'] = dat
            vis[usr]['data'] = ymd
            if ip1 is not None:
                vis[usr]['ip'] = ip1
            if plat is not None:
                vis[usr]['platform'] = plat
            if brow is not None:
                vis[usr]['browser'] = brow
        with open(bagname, 'w') as fil:
            json.dump(vis, fil, indent=2)


if __name__ == '__main__':
    USER = "default"
    IP = None
    BNAME = None
    PLATFORM = None
    BROWSER = None
    if len(sys.argv) > 1:
        USER = sys.argv[1]
    if len(sys.argv) > 2:
        IP = sys.argv[2]
    if len(sys.argv) > 3:
        BNAME = sys.argv[3]
    if BNAME is not None:
        BNAME = BNAME.replace(',', ' ')
        PLATFORM, BROWSER = BNAME.split(' ', 1)

    NEWTV = Newtv()
    NEWTV.readepg()
    NEWTV.read_channel_def(USER)
    NEWTV.myepg(USER)
    NEWTV.updatebag(USER, IP, PLATFORM, BROWSER)
