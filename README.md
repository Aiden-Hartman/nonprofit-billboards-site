# Mission Billboards

A polished static marketing website for a billboard-buying partner serving nonprofits, advocacy groups, and political organizations. Built with Vite and React, with a Netlify Forms contact workflow.

## Local Development

```bash
npm install
npm run dev
```

## Production Build

```bash
npm run build
```

The production files are generated in `dist/`.

## Netlify Deployment

1. Push this repository to GitHub, GitLab, or Bitbucket.
2. In Netlify, choose **Add new site** and import the repository.
3. Use these build settings:
   - Build command: `npm run build`
   - Publish directory: `dist`
4. Deploy the site.

The contact form is configured for Netlify Forms:

- Form name: `contact`
- Method: `POST`
- `data-netlify="true"`
- Honeypot field: `bot-field`
- Success page: `/thank-you.html`

The hidden static form in `index.html` ensures Netlify can detect the form during deploy while the visible React form provides the custom styled user experience.
