# Astroreadscharts blog

## What I will build

• Preserve the supplied website and its existing sections, forms, reviews, colours, and behaviour.
• Add Blog to both desktop and mobile navigation.
• Add a polished Blog section with article cards, article reading view, search, loading, empty, and error states.
• Keep all website code in one downloadable `index.html` file.
• Load published articles from a Google managed publishing source so website code never needs editing for a new post.
• Avoid hyphens in all new visible website wording.

## Publishing workflow

Write posts in a Google Sheet using columns for title, date, category, summary, content, image, status, and author. Publishing or editing a row updates the website automatically. This is the most dependable single file approach because Google Docs cannot safely expose private editing access directly from a public HTML file.

The code will use a configurable public Google Apps Script address. It will include clear setup comments for connecting the Sheet and will display sample articles until that address is added, so the finished file remains usable immediately.

## Technical details

• The existing HTML remains the source of truth.
• New CSS and JavaScript stay inside the same file.
• External article text is escaped before display.
• Only rows marked Published appear.
• Article URLs use the page hash so readers can open and share an article without extra folders or pages.
• The finished `index.html` will be provided as a downloadable file and also rendered in the preview.
