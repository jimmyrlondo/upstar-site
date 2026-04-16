# Upstar Mental Health Services Website

Static website for Upstar Mental Health Services built with plain HTML, CSS, and JavaScript for GitHub Pages.

## Local preview

Because this site uses relative links, run a local web server from the repository root:

```bash
cd /home/runner/work/upstar-site/upstar-site
python3 -m http.server 8080
```

Then open: `http://localhost:8080`

## Enable GitHub Pages

1. In GitHub, open **Settings → Pages** for this repository.
2. Under **Build and deployment**, choose **Deploy from a branch**.
3. Select the `main` branch and `/ (root)` folder.
4. Save and wait for deployment.

## Configure Formspree

All forms use the same Formspree placeholder endpoint:

```text
https://formspree.io/f/REPLACE_ME
```

### Setup steps

1. Create one form endpoint in Formspree.
2. Replace `REPLACE_ME` in all form `action` attributes with your real form ID.
3. In the Formspree dashboard, set the recipient email to: `a.nicole@upstarmhs.com`.
4. Keep the existing `_next` hidden field values so submissions redirect to the shared confirmation page: `get-started/success.html`.

## Custom domain (optional)

When ready to use a custom domain:

1. Add your domain in **Settings → Pages → Custom domain**.
2. Update DNS records at your registrar to point to GitHub Pages.
3. Enable HTTPS in GitHub Pages settings after DNS resolves.
