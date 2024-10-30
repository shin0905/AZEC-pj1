import importlib
import subprocess
import traceback

modules = [
    ('requests', 'requests'),
    ('sqlite3', 'sqlite3'),
    ('time', 'time'),
    ('tkinter', 'tkinter'),
    ('turtle', 'turtle'),
    ('jpholiday', 'jpholiday'),
    ('glob', 'glob'),
    ('pyxel', 'pyxel'),
    ('pandas', 'pandas'),
    ('opencv-contrib-python', 'cv2'),  # 修正: 正しいインポート名は 'cv2'
    ('beautifulsoup4', 'bs4'),  # BeautifulSoupのためのエントリを追加
    ('romkan','romkan')
]

def _import(module, name):
    try:
        importlib.import_module(name)
        print(f'{module}はインストール済みです。')
    except ImportError:
        print(f'{module}がインストールされていません。インストールを試みます...')
        try:
            subprocess.check_call(['python', '-m', 'pip', 'install', module])
            importlib.import_module(name)
            print(f'{module}のインストールに成功しました。')
        except subprocess.CalledProcessError as e:
            print(f'{module}のインストールに失敗しました。')
            print(e)
            traceback.print_exc()

for module, name in modules:
    if name:  # モジュール名が空でない場合にのみインポートを試みる
        _import(module, name)