import requests
from bs4 import BeautifulSoup

# Make a request
page = requests.get(
    "https://www.slapburgers.ca/s/order?location=11ed313857d62dd3b998ac1f6bbbd01e&item=6")
soup = BeautifulSoup(page.content, 'html.parser')

# Extract title of page
page_title = soup.title

# Extract body of page
page_body = soup.body

# Extract head of page
page_head = soup.head

# print the result
print(page_title, page_head)