# i18n.js

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A lightweight, zero-dependency internationalization script for static websites. It translates Japanese content to English based on browser settings or a URL parameter.

This script is designed to be simple: it assumes the source HTML is in Japanese and translates it to English for non-Japanese users.

## Features

-   **Text Replacement**: Translates text content of specific elements using a `translation.json` file.
-   **Content Toggling**: Shows or hides entire sections of content based on the detected language.
-   **Language Detection**: Determines the user's language from a URL parameter (`?lang=...`) or falls back to browser language settings.
-   **Simple Logic**: The script only runs if the detected language is not Japanese (`ja`).

## How to Use

1.  **Add the script to your HTML.**
    Place the following line before your closing `</body>` tag. It must be loaded as a module.
    ```html
    <script type="module" src="translation.js"></script>
    ```

2.  **Create a `translation.json` file.**
    In the same directory as your HTML, create a `translation.json` file. This file holds the key-value pairs for translation, where the key is the Japanese text and the value is the English translation.
    ```json
    {
      "日本語": "Japanese",
      "英語": "English"
    }
    ```

3.  **Tag content for translation.**
    Use one of the two methods below to mark up the content you want to translate in your HTML file.

### Method 1: Text Node Translation

For individual words or phrases, add the class `ja` to the element containing the Japanese text. The script will find this element and replace its text content with the corresponding English value from `translation.json`.

**Example:**
```html
<p>This word is <span class="ja">日本語</span>.</p>
```
When a non-Japanese user visits, the script transforms it to:
```html
<p>This word is <span class="ja">Japanese</span>.</p>
```

### Method 2: Content Block Toggling

For larger blocks of content, use the classes `.ja_content` for the Japanese version and `.en_content` for the English version. For non-Japanese users, the script will hide all `.ja_content` elements and show all `.en_content` elements.

**Example:**
You must add a small amount of CSS to hide the English content by default.
```html
<div class="ja_content">
  <p>これは日本語のコンテンツです。</p>
</div>
<div class="en_content">
  <p>This is the English content.</p>
</div>

<style>
  .en_content { display: none; }
</style>
```

## Language Detection

The language is determined with the following priority:
1.  **URL Parameter**: You can force a language by adding `?lang=en` or `?lang=ja` to the URL.
2.  **Browser Settings**: If no URL parameter is found, it uses the browser's language setting (`navigator.language`).
3.  **Default**: If no language can be determined, it defaults to English (`en`).

The script logs successful translations and any missing translation keys to the browser's developer console.

## License

License information available in [LICENSE](LICENSE).