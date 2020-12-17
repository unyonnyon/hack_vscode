# vscode 開発支援

## .vscode

プロジェクト(ワークスペース)ごとに設定を固定することができる。setting の優先度としては、Workspace > User となる。

```json
// 以下の設定は.vscode/settings.jsonに追記する。
{
  "editor.formatOnSave": true,
  "editor.defaultFormatter": "esbenp.prettier-vscode",
  "[javascript]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[html]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[vue]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  },
  "[markdown]": {
    "editor.defaultFormatter": "esbenp.prettier-vscode"
  }
}
```

## フロントエンド系

### prettier

ソースコードを綺麗にしてくれる拡張機能。プロジェクト直下に置かれた`.pretiierrc`を編集することで整形ルールをカスタマイズ可能

```json
// オーバライドする形で既存のフォーマット形式をカスタマイズできる
{
  "overrides": [
    {
      "files": ["*.json", "*.html"],
      "options": {
        "tabWidth": 2
      }
    },
    {
      "files": ["*.js"],
      "options": {
        "requirePragma": true,
        "semi": true,
        "tabWidth": 4
      }
    },
    {
      "files": ["*.vue"],
      "options": {
        "singleQuote": true,
        "semi": true,
        "tabWidth": 2,
        "vueIndentScriptAndStyle": false
      }
    }
  ]
}
```

### eslint

構文チェックを行ってくれる。

### vetur

vue 開発時の etc が含まれる（特に snippet とか）。

## Python 系

### Pylance

最近出てきた言語サーバー。コード補間（サードパーティ、自作問わず）。MyPy と組み合わせると型チェックも行ってくれる。

### MS.Python

コード補間やデバッグ機能が含まれている。最近では Jupyter が同梱されるようになり、始めから jupyter notebook や jupyter lab を活用することができる

## Tips

Tips 活用の以下を達成することでコード品質の向上、作業時間の短縮を図る

- コーディング時のミスが出そうな作業は機能に頼る

- 繰り返す作業はまとめる

### コマンドパレットの活用

- Emmit: Wrap Indivisual Lines with Abbreviation

既存の html タグを新しく囲むときに便利。

- Transform to Uppercase

変数を定数へ変換させるのも可。

### スニペットの活用

インテリセンス（予測機能）と組み合わせると
<span style='color: #F00;'>_効果大_</span>

### Bracket Pair Colorizer2

括弧を閉じるところをハイライトしてくれる。ネストしがちな javascript や vue の script タグを記載する際に役立つ。

## Git 関連

### Git Graph

ブランチの流れが可視化できる。GUI 操作も可能。
