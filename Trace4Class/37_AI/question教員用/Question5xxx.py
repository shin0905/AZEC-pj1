import requests
from bs4 import BeautifulSoup

# ニュースサイトのURL
url = 'https://news.yahoo.co.jp/'

# HTMLを取得
response = requests.get(url)
html = response.content

# BeautifulSoupでHTMLを解析
soup = BeautifulSoup(html, 'html.parser')

# 最新記事のタイトルを抽出
# クラス名が不明な場合、タグ名や他の属性を使用して要素を特定する
titles = soup.find_all('a', href=True)

# タイトルを出力
for title in titles:
    if title.get_text():  # テキストが存在する場合のみ出力
        print(title.get_text())
