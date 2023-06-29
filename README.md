# i18n
 
## translation.js

### manual translation

put a translate.json
```json
{ "日本語": "Japanese" }
```

use class name "ja"
- <sometag class="ja">日本語</sometag> → <sometag class="ja">Japanese</sometag>

### language select

- <div class="ja_content">日本語</div> <div class="en_content">English</div> <style>.en_content { display: none }</style> → selected by the language setting
