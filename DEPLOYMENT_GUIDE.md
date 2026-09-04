# Deployment & Hosting Guide
### Official Website for Shariful Islam Rayhan (Senior IT & Web Specialist)

This website is built with **React 19, TypeScript, Vite, and Tailwind CSS**. It can be deployed to **Bluehost, cPanel, Apache, Nginx, Node.js, Vercel, Netlify, or Hostinger**.

---

## 🚀 Option 1: Bluehost / cPanel / Shared Hosting (Recommended & Easiest)

Bluehost shared hosting serves static web files directly through Apache and LiteSpeed.

### Step 1: Prepare the Build
On your computer, open your terminal / command prompt in this project folder:
```bash
npm install
npm run build
```
This compiles the website into a single, production-ready folder named **`dist/`**.

### Step 2: Ensure Your Photo is Included
Make sure your portrait photo is named `Rayhan.jpg` inside the `public/` folder before running `npm run build`, OR upload `Rayhan.jpg` directly into the `dist/` folder.
- File path: `dist/Rayhan.jpg`
- Favicons (`favicon.svg`, `favicon.ico`, `favicon.png`) and `.htaccess` are automatically copied to `dist/`.

### Step 3: Upload to Bluehost via File Manager
1. Log in to your **Bluehost Account** and open **cPanel** (or **File Manager**).
2. Navigate to the **`public_html`** folder (or your subdomain directory like `public_html/portfolio`).
3. Upload all the files and folders from inside your local **`dist/`** folder:
   - `index.html`
   - `.htaccess` *(make sure hidden files are enabled in cPanel settings)*
   - `favicon.svg`, `favicon.ico`, `favicon.png`
   - `Rayhan.jpg`
   - `robots.txt`
   - `sitemap.xml`
   - `assets/` folder (contains your CSS and JavaScript)
4. That's it! Visit your domain (e.g., `https://yourdomain.com`). Your website, portrait, interactive pricing calculator, CV modal, and WhatsApp channels will load instantly with full HTTPS security and caching!

---

## ⚡ Option 2: Bluehost Node.js App Hosting (Full-Stack Mode)

If your Bluehost plan supports the cPanel **"Setup Node.js App"** feature:
1. In cPanel, click **Setup Node.js App**.
2. Click **Create Application**:
   - **Node.js version**: 18.x, 20.x, or 22.x
   - **Application root**: `public_html` (or your chosen path)
   - **Application startup file**: `dist/server.cjs`
3. Upload all project files to that folder.
4. Run `npm install` and `npm run build`.
5. Add your `.env` variables if using Gemini AI (`GEMINI_API_KEY=...`).
6. Click **Restart** to boot your custom server.

---

## 🌐 Option 3: Vercel or Netlify (100% Free & Fast 1-Click Deploy)

### Vercel:
1. Push this project to GitHub.
2. Go to [vercel.com](https://vercel.com) and click **Add New Project**.
3. Select your repository. Vercel auto-detects Vite:
   - **Build Command**: `npm run build`
   - **Output Directory**: `dist`
4. Click **Deploy**.

### Netlify:
1. Go to [netlify.com](https://netlify.com) and drag-and-drop the **`dist/`** folder directly into the Netlify dashboard!
2. Your site goes live in 5 seconds with free SSL.

---

## 📁 Key File Locations
- **`public/Rayhan.jpg`**: Your official executive portrait.
- **`public/favicon.svg` & `public/favicon.ico`**: Official "SIR" brand favicon.
- **`public/.htaccess`**: Apache routing and Gzip compression configuration for Bluehost.
- **`src/data/portfolioData.ts`**: All phone numbers, emails, service packages, and social media links.
