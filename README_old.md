# Yuri Tanaka — Portfolio

田中 佑理のポートフォリオサイトです。GitHub Pages にそのまま公開できます。

## ファイル構成

```
portfolio/
├── index.html   # メインページ（全セクション含む）
├── style.css    # スタイルシート
├── script.js    # テーマ切替・言語切替・スクロールアニメーション
└── README.md    # このファイル
```

## GitHub Pages へのデプロイ手順

### 1. リポジトリを作成する

GitHub にログインし、新しいリポジトリを作成します。

- リポジトリ名: `yuri-tanaka-73.github.io`（ユーザー名と一致させると `https://yuri-tanaka-73.github.io/` で公開されます）
- または任意の名前（例: `portfolio`）でも可。その場合 URL は `https://yuri-tanaka-73.github.io/portfolio/` になります。
- Visibility: **Public**

### 2. ファイルをプッシュする

```bash
cd portfolio
git init
git add .
git commit -m "Initial portfolio"
git branch -M main
git remote add origin https://github.com/yuri-tanaka-73/<リポジトリ名>.git
git push -u origin main
```

### 3. GitHub Pages を有効にする

1. リポジトリページの **Settings** タブを開く
2. 左メニューの **Pages** をクリック
3. **Source** を `Deploy from a branch` に設定
4. **Branch** を `main` / `(root)` に設定して **Save**
5. 数分後、表示された URL でサイトが公開されます

## カスタマイズ方法

### プロフィール写真

`index.html` の以下の箇所を編集してください。

```html
<img src="TODO: プロフィール写真のURLを入れてください" ...>
```

写真ファイルをリポジトリに追加する場合は `src="photo.jpg"` のように相対パスで指定できます。

### プロジェクトの追加

`index.html` の `#projects` セクション内のカード（`<article class="card">`）をコピーして、
`TODO:` のプレースホルダを実際の内容に置き換えてください。

### 経歴の追加

`#experience` セクション内の `<li class="tl-item">` をコピーして追加してください。

### Open Graph 画像

`<meta property="og:image">` の `content` に公開済みの画像 URL を設定してください。

## 動作確認

ローカルで確認する場合は、ファイルをブラウザで直接開くか、簡易サーバーを使用してください。

```bash
# Python 3 がある場合
python -m http.server 8000
# → http://localhost:8000 で確認
```

## ライセンス

MIT
