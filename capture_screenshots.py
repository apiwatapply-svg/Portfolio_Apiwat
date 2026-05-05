import asyncio
from playwright.async_api import async_playwright
import os

async def main():
    out_dir = r"d:\Apply_Job\Portfolio\portfolio\public\projects\Student_Attendance_Management_System"
    os.makedirs(out_dir, exist_ok=True)
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        page = await browser.new_page(viewport={'width': 1280, 'height': 800})
        
        urls = [
            ('/', 'home.png'),
            ('/kiosk', 'kiosk.png'),
            ('/login', 'login.png')
        ]
        
        for path, filename in urls:
            url = f"http://localhost:3005{path}"
            print(f"Capturing {url}...")
            try:
                await page.goto(url, wait_until="networkidle")
                # Wait a bit for animations and fonts to load
                await asyncio.sleep(3)
                await page.screenshot(path=os.path.join(out_dir, filename))
                print(f"Saved {filename}")
            except Exception as e:
                print(f"Failed to capture {url}: {e}")
                
        await browser.close()

if __name__ == "__main__":
    asyncio.run(main())
