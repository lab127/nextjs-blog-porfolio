# Next.js Markdown Blog Static Site

#### Convert markdown to JSX

agar bisa di baca di `page.tsx`

```bash
pnpm add markdown-to-jsx
```

Cara menggunakan:

```js
import Markdown from "markdown-to-jsx";

<Markdown>{content}</Markdown>;
```

#### Front Matter

```bash
pnpm add gray-matter
```

Cara Menggunakan

```js
import matter from "gray-matter";

const postMatter = matter(content);
```