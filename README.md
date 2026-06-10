# Yuri — Portfolio

ゆりのポートフォリオサイトです。GitHub Pages で公開しています。

## デプロイ手順

1. このリポジトリを GitHub にプッシュします:
   ```bash
   git remote add origin https://github.com/yuri-tanaka-73/portfolio.git
   git branch -M main
   git push -u origin main
   ```

2. GitHub のリポジトリページで **Settings** → **Pages** を開きます。

3. **Source** で **Deploy from a branch** を選択します。

4. **Branch** を `main`、フォルダを `/ (root)` に設定して **Save** をクリックします。

5. 数分後、`https://yuri-tanaka-73.github.io/portfolio/` で公開されます。

### カスタムドメイン（任意）

カスタムドメインを使う場合は、リポジトリルートに `CNAME` ファイルを置き、ドメイン名を記入してください。

## 構成

- `index.html` — ポートフォリオ本体（CSS / JS 埋め込み、外部依存ゼロ）
- `README.md` — このファイル

## 技術スタック

- HTML / CSS / JavaScript（ビルドツール・フレームワーク不使用）
- GitHub Pages
- ダークモード対応
- 日英バイリンガル対応
