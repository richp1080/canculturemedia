# Can Culture Media – Public Folder Fix

This patch adds the minimal `public/index.html` required by Create React App and a `_redirects` file for Netlify.

## How to use
1. Unzip this archive in your repo root.
2. Make sure your `package.json` is at the same level as `public/`.
3. Commit and push:
   ```bash
   git add public/index.html public/_redirects
   git commit -m "Add CRA public/index.html and Netlify redirects"
   git push
