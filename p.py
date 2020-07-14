#!/usr/bin/python3

import xmltv
from pprint import pprint

# If you need to change the locale:
# xmltv.locale = 'Latin-1'

# If you need to change the date format used in the XMLTV file:
# xmltv.date_format = '%Y%m%d%H%M%S %Z'

filename = 'e.xml'

# Print info for XMLTV file (source, etc.)
#pprint(xmltv.read_data(open(filename, 'r')))

# Print channels
pprint(xmltv.read_channels(open(filename, 'r')))

# Print programmes
#pprint(xmltv.read_programmes(open(filename, 'r')))
