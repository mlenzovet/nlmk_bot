import requests
import re
import urllib.request
from bs4 import BeautifulSoup
from collections import deque
from html.parser import HTMLParser
from urllib.parse import urlparse
import os
import ssl

#workaround for ssl issues
ssl._create_default_https_context = ssl._create_unverified_context

# Regex pattern to match a URL
HTTP_URL_PATTERN = r'^http[s]*://.+'

# Create a class to parse the HTML and get the hyperlinks
class HyperlinkParser(HTMLParser):
    def __init__(self):
        super().__init__()
        # Create a list to store the hyperlinks
        self.hyperlinks = []

    # Override the HTMLParser's handle_starttag method to get the hyperlinks
    def handle_starttag(self, tag, attrs):
        attrs = dict(attrs)

        # If the tag is an anchor tag and it has an href attribute, add the href attribute to the list of hyperlinks
        if tag == "a" and "href" in attrs:
            self.hyperlinks.append(attrs["href"])


def get_hyperlinks(url, id):
    headers = {
        "Content-Type": "application/json",
    }
    data = {
        "id": id
    }

    try:
        # Make a POST request to the URL
        response = requests.post(url, headers=headers, json=data)
        
        # If the response is not HTML, return an empty list
        if not response.headers['Content-Type'].startswith("text/html"):
            return []
        
        # Get the HTML content
        html = response.text
    except Exception as e:
        # Optionally, you can print the error for debugging:
        # print(url, e)
        return []
    
    # Create the HTML Parser and then Parse the HTML to get hyperlinks
    parser = HyperlinkParser()
    parser.feed(html)

    return parser.hyperlinks

