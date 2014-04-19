import scraperwiki

html = scraperwiki.scrape("https://www.secom.planalto.gov.br/consea/boletins.nsf/01ContatoxNome?OpenView&Start=1")
print html

import lxml.html
root = lxml.html.fromstring(html)
table=root.cssselect('table')[1]
for tr in table.cssselect('tr'):
    td=tr.cssselect('td')
    print td
