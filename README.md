# i18n.js

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

i18n.js is a JavaScript library that simplifies the implementation of multilingual support for websites. It provides functionality for manual translation and language switching.

## Features
- Manual translation
- Language switching

## Usage
To use the translation functionality, follow these steps:

1. Create a `translate.json` file in the project root with translations:

```json
{ "日本語": "Japanese" }
```

2. Use the `ja` class on elements you want to translate:

```html
<sometag class="ja">日本語</sometag>
```

This will automatically translate the text to the user's language.

3. To display content in different languages, use the following structure:

```html
<div class="ja_content">日本語</div>
<div class="en_content">English</div>
<style>.en_content { display: none }</style>
```

The content will be displayed based on the user's language setting.

## License
MIT License — see [LICENSE](LICENSE).