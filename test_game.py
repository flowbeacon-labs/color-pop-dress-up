from pathlib import Path
import http.server, socketserver, threading, os
from playwright.sync_api import sync_playwright

root=Path(__file__).resolve().parent
class Handler(http.server.SimpleHTTPRequestHandler):
    def __init__(self,*args,**kwargs): super().__init__(*args,directory=str(root),**kwargs)
    def log_message(self,*args): pass
server=socketserver.TCPServer(('127.0.0.1',0),Handler)
threading.Thread(target=server.serve_forever,daemon=True).start()
with sync_playwright() as p:
    b=p.chromium.launch(executable_path='/usr/bin/chromium',headless=True,args=['--no-sandbox'])
    for vp in [{'width':1300,'height':900},{'width':390,'height':844}]:
        page=b.new_page(viewport=vp)
        errors=[]
        page.on('pageerror',lambda e:errors.append(str(e)))
        page.set_content((root/'index.html').read_text())
        page.add_style_tag(content=(root/'style.css').read_text())
        page.add_script_tag(content=(root/'game.js').read_text())
        assert page.locator('#stage svg').count()==1
        assert page.locator('.model-btn').count()==4
        assert page.locator('.item').count()==8
        assert page.locator('.swatch').count()==12
        page.locator('.model-btn').nth(2).click()
        assert page.locator('#modelName').inner_text()=='Zara'
        page.locator('[data-cat="top"]').click()
        page.locator('[data-item="crop"]').click()
        assert 'active' in page.locator('[data-item="crop"]').get_attribute('class')
        page.locator('[data-cat="bottom"]').click()
        page.locator('[data-item="jeans"]').click()
        page.locator('.swatch').nth(4).click()
        assert 'active' in page.locator('.swatch').nth(4).get_attribute('class')
        page.locator('[data-cat="accessory"]').click()
        page.locator('[data-item="crown"]').click()
        assert page.locator('#stage svg').count()==1
        page.locator('#save').click()
        assert page.locator('#toast').inner_text(), 'Save should show confirmation or storage-unavailable message'
        page.locator('#randomAll').click()
        page.locator('#reset').click()
        assert not errors,errors
        if vp['width']<500:
            assert page.evaluate('document.documentElement.scrollWidth <= window.innerWidth+2'), 'Mobile horizontal overflow'
        page.screenshot(path=str(root/('preview-mobile.png' if vp['width']<500 else 'preview-desktop.png')),full_page=True)
        print('PASS browser interaction workflow',vp,'no JS errors')
        page.close()
    b.close()