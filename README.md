# catrare.github.io
カトレアテックHP用

## プライバシーポリシーの保守メモ

アプリごとのプライバシーポリシー（`docs/<アプリ名>/privacy/`）は、アプリが実際に保存・送信する情報と一致させる。次の場合は、該当アプリのポリシーを見直す。

- **広告SDKなどの第三者SDKを追加・更新したとき**: SDKの公式データ開示資料と、組み込んだSDK版のPrivacy Manifest（`PrivacyInfo.xcprivacy`の`NSPrivacyCollectedDataTypes`）を照合し、ポリシーの「送信する情報」「利用目的」に過不足がないか確認する
- **端末内に保存する項目（設定・記録など）を追加・変更したとき**: ポリシーの「端末内に保存する情報」を更新する
- App Store Connectの「プライバシー申告」も、同じ内容と整合させる（アプリ側の作業）

このリポジトリにはテスト・CIの基盤がなく、Privacy Manifestはアプリ側のSDK成果物にあるため、照合は上記の手動確認で行う。

### ニャンクライムの照合基準（2026-09-20時点）

- Google Mobile Ads SDK 13.9.0: 識別子（広告ID等）、大まかな位置（IPアドレス由来）、クラッシュデータ、性能データ、その他の診断データ、広告データ、操作情報。利用目的は第三者広告・自社広告・分析
- Google User Messaging Platform 3.1.0: 大まかな位置、性能データ、操作情報。利用目的はアプリの機能（同意の管理）
- 公式資料: https://developers.google.com/admob/ios/privacy/data-disclosure
- 該当するポリシーの節: 3節（広告）、4節（同意の管理）、6節（第三者提供・外部への送信）

## app-ads.txt

`docs/app-ads.txt`（公開URL `https://www.catrare-tech.jp/app-ads.txt`）は、AdMobで広告を出すアプリ（現在はニャンクライム）の広告枠が正規のものであることを示すファイル。App Store Connectの掲載情報の「マーケティングURL」にこのサイトのURL（例: `https://www.catrare-tech.jp/nyanclimb/`）を登録すると、AdMobがここを読みに行く。クローラーは `www.` を外した `catrare-tech.jp/app-ads.txt` を見に行き、GitHub Pagesの転送で `www.catrare-tech.jp/app-ads.txt` に届く。

- 記載するのはAdMobの管理画面（アプリ → app-ads.txt）に表示される1行。`pub-` 以降はAdMobのパブリッシャーID（アカウントごとに1つ）で、アプリが増えても行は増えない
- 広告ネットワークを追加したときは、そのネットワークが指定する行を追記する
- ファイル名・置き場所（サイトのルート）は変えない
