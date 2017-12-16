# noop-console.js

IEで発生する console.log() 等によるJS動作不良を解決します。

## 機能

IEでのみ発生する問題
console.log() を消し忘れていて、想定通り動作しない！という現象を解消します。

この現象は **開発者ツール** を開いていると発生しないため、気づきにくいことも問題です。

## 使い方

noop-console.js をダウンロードし、できるだけ早い段階でページに読み込ませてください。
他ライブラリとの依存はありません。

## 詳細

window.console オブジェクト内のメソッドが定義されていなければ
無害な "何もしない" 関数（noop関数）に置き換えます。

具体的には以下のメソッドです。

+ console.assert()
+ console.clear()
+ console.count()
+ console.debug()
+ console.dir()
+ console.dirxml()
+ console.error()
+ console.group()
+ console.groupCollapsed()
+ console.groupEnd()
+ console.info()
+ console.log()
+ console.profile()
+ console.profileEnd()
+ console.table()
+ console.time()
+ console.timeEnd()
+ console.timeStamp()
+ console.trace()
+ console.war()

## License

ご自由にご利用ください（MIT）