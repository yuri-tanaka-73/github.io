# Yuri — Portfolio

若草色 × オレンジをテーマにした個人ポートフォリオ。GitHub Pages にそのまま公開できる静的サイトです。

## ファイル構成

```
portfolio/
├── index_2a.html   # メインHTML（全セクション）
├── style_2a.css    # スタイルシート（CSS変数・Mobile First）
├── script_2a.js    # テーマ・言語トグル・フェードイン
└── README_2a.md    # このファイル
```

## GitHub Pages への公開手順

1. このフォルダの内容を GitHub リポジトリに push する
   ```bash
   git init
   git add .
   git commit -m "initial portfolio"
   git remote add origin https://github.com/yuri-tanaka-73/<リポジトリ名>.git
   git push -u origin main
   ```
2. リポジトリの **Settings → Pages** を開く
3. Source を `Deploy from a branch` → ブランチ `main` / フォルダ `/ (root)` に設定
4. **Save** → 数分後に `https://yuri-tanaka-73.github.io/<リポジトリ名>/index_2a.html` で公開される

## カスタマイズ

| 項目 | 場所 |
|------|------|
| プロフィール写真 | `index_2a.html` の `<img class="hero-photo">` の `src` を変更 |
| プロジェクト追加 | `#projects` 内の `<article class="project-card">` を複製して `data-i18n-jp/en` を編集 |
| 経歴追加 | `#experience` 内の `<li class="timeline-item">` を複製 |
| カラー変更 | `style_2a.css` の `:root` 内 CSS 変数を編集 |
| OGP 画像・URL | `index_2a.html` の `<meta property="og:image">` と `og:url` を更新 |

## 機能

| 機能 | 詳細 |
|------|------|
| ダーク / ライトテーマ | `prefers-color-scheme` 自動検出 + 手動切替、`localStorage` 保存 |
| 日本語 / 英語切替 | `navigator.language` 自動検出 + 手動切替、`localStorage` 保存 |
| フェードインアニメーション | `IntersectionObserver` によるスクロール連動 |
| `prefers-reduced-motion` | アニメーション・blob 完全無効化対応 |
| レスポンシブ | Mobile First、ブレークポイント 768px |
| アクセシビリティ | スキップリンク・aria 属性・フォーカスリング・WCAG AA |
