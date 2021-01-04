# vscode 開発支援

## .vscode

---

プロジェクト(ワークスペース)ごとに設定を固定することができる。setting の優先度としては、Workspace > User となる。従ってプロジェクト雛形に組み込むことで、設定の統一化も可能

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

---

### prettier

ソースコードを綺麗にしてくれる拡張機能。プロジェクト直下に置かれた`.pretiierrc`を編集することで整形ルールをカスタマイズ可能。

設定ファイルを変更することで下記のような詳細設定が可能

- 文字列はシングルクウォートで囲む

- 文末のセミコロンを付ける

- フォーマットしたいファイル形式/ファイルを限定する

設定例

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

拡張機能とは別に npm で eslint パッケージをインストールする必要がある。構文チェックをエディタ上で<span style='color: #F00;'>リアルタイム</span>
で行ってくれる。ルールが膨大なため、何を重視するか精査が必要。
コード整形を prettier に任せ、構文を eslint でチェックする形での運用例が多い。

```json
{
  "env": {
    "es6": true,
    "browser": true
  },
  "extends": ["eslint:recommended"],
  "rules": {
    "no-unused-vars": ["error"],
    "no-console": ["warn"]
  }
}
```

> ルール参考
> <https://qiita.com/khsk/items/0f200fc3a4a3542efa90>

Vue.js や React.js に特化している eslint プラグインも存在する。ex) eslint-plugin-vue

### vetur

vue 開発時の etc が含まれる（特に snippet とか）。linter やフォーマット機能も含まれている。

## Python 系

---

### Pylance

最近出てきた言語サーバー。コード補間が強力（サードパーティ、自作問わず）。MyPy と組み合わせると型チェックも行ってくれる。

### MS.Python

コード補間やデバッグ機能が含まれている。最近では Jupyter が同梱されるようになり、
始めから jupyter notebook や jupyter lab を活用することができる（ローカル環境への jupyter 系ライブラリのインストールは別途必要）

## Tips

---

Tips 活用の以下を達成することでコード品質の向上、作業時間の短縮を図る

- コーディング時のミスが出そうな作業は機能に頼る

- 繰り返す作業はまとめる

### コマンドパレットの活用

- Emmit: Wrap Indivisual Lines with Abbreviation

既存の html タグを新しく囲むときに便利。その他にも html を記載するときの繰り返し作業や id や class を付与するのが楽になる。

- Transform to Uppercase

変数を定数へ変換させるのも可。

### スニペットの活用

インテリセンス（予測機能）と組み合わせると
<span style='color: #F00;'>_効果大_</span>

### Bracket Pair Colorizer2

括弧を閉じるところをハイライトしてくれる。ネストしがちな javascript や vue の script タグを記載する際に役立つ。

### TODO tree

ちょっとした Todo メモに便利。ラベル分けも可能

## Git 関連

---

### Git Graph

ブランチの流れが可視化できる。GUI 操作も可能。

### Git Lense

色々な git 操作を editor 上で行えるらしい。複数人開発の経験があまりなく、恩恵に対してはいまいちピンとこない。。。
