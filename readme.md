p.py:
a test program, use e.xml

myepg.py:
produce tv.xml from e.xml and channeldef

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
