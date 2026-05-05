import asyncio
from playwright.async_api import async_playwright
import os

out_dir = r"d:\Apply_Job\Portfolio\portfolio\public\projects\Student_Attendance_Management_System"

async def login_and_capture(browser, role, email, password, paths):
    context = await browser.new_context(viewport={'width': 1280, 'height': 800})
    page = await context.new_page()
    
    print(f"\n--- Logging in as {role} ({email}) ---")
    await page.goto("http://localhost:3005/login", wait_until="networkidle")
    
    # Fill login form
    await page.fill("input[name='email']", email)
    await page.fill("input[name='password']", password)
    await page.click("button[type='submit']")
    
    # Wait for navigation after login
    await asyncio.sleep(4) # Wait for Supabase auth + redirect
    
    for path, filename in paths:
        url = f"http://localhost:3005{path}"
        print(f"Capturing {url} as {filename}...")
        try:
            await page.goto(url, wait_until="networkidle")
            # Wait for potential data fetching / rendering
            await asyncio.sleep(3)
            await page.screenshot(path=os.path.join(out_dir, filename), full_page=True)
            print(f"Saved {filename}")
        except Exception as e:
            print(f"Failed to capture {url}: {e}")
            
    await context.close()

async def main():
    os.makedirs(out_dir, exist_ok=True)
    
    async with async_playwright() as p:
        browser = await p.chromium.launch(headless=True)
        
        # Admin Login
        await login_and_capture(browser, "Admin", "admin@admin.com", "admin123", [
            ('/admin', 'admin_dashboard.png'),
            ('/admin/users', 'admin_users.png'),
            ('/admin/subjects', 'admin_subjects.png'),
            ('/admin/classes', 'admin_classes.png'),
            ('/admin/enrollments', 'admin_enrollments.png'),
            ('/admin/cards', 'admin_cards.png'),
        ])
        
        # Teacher Login (Try teacher1@school.com from Mock data or teacher@example.com)
        await login_and_capture(browser, "Teacher", "teacher1@school.com", "password123", [
            ('/teacher', 'teacher_dashboard.png'),
        ])
        
        # Student Login (Try student1@school.com from Mock data)
        await login_and_capture(browser, "Student", "student1@school.com", "password123", [
            ('/student', 'student_dashboard.png'),
        ])
        
        await browser.close()
        print("\nAll captures completed!")

if __name__ == "__main__":
    asyncio.run(main())
