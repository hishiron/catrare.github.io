# サードパーティ通知

本アプリのビジュアルデザイン（Phase 12。[docs/ledger/design/40-screens.md §10.18](../../docs/ledger/design/40-screens.md#1018-ビジュアルデザインデジタル庁デザインシステム準拠) 参照）は、デジタル庁デザインシステム（DADS）関連のリソースを利用している。それぞれの出典・ライセンスは以下の通り。

## デジタル庁デザインシステム本体

- 出典: デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/dads/
- 本アプリのUIは、デジタル庁デザインシステムウェブサイト https://design.digital.go.jp/dads/ のコンテンツをもとにCatrareが作成した。デジタル庁が作成したものではない

## `@digital-go-jp/tailwind-theme-plugin`（npm, MIT）

DADSのデザイントークンをTailwind CSS v4のユーティリティとして提供するプラグイン。`src/index.css` から `@import` して利用している（コード改変なし）。

```
MIT License

Copyright (c) 2023 デジタル庁

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## `design-system-example-components-react`（GitHub, MIT。npm未公開）

https://github.com/digital-go-jp/design-system-example-components-react

デジタル庁デザインシステムのサンプルコンポーネント（React版）。共有UIパッケージ `packages/ui`（`@catrare/ui`）のコンポーネント（`src/components/`）・`src/lib/dads.ts`（旧 `src/components/ui/styles.ts` のクラス定数を置き換えたもの。`styles.ts` は issue #420 で削除済み）および Phase 11 UIヘルプ部品（`src/features/help/components/`）の一部クラス構成（ボタン・フォームコントロール・エラー表示・テーブル・フォーカス表示等）は、このリポジトリのコンポーネント実装（`Button`・`Input`・`Select`・`Textarea`・`Checkbox`・`ErrorText`・`Table` 等）を参照・引用し、React 19 + Tailwind CSS v4 + ネイティブ `disabled` 属性を用いる本アプリの実装に合わせて改変している。

```
MIT License

Copyright (c) 2025 デジタル庁

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

## Noto Sans JP（`@fontsource-variable/noto-sans-jp`, npm, SIL OFL 1.1）

本文フォントとして自己ホストしている（CDN読み込みなし）。フォントデータは `pnpm build` 時にビルド成果物へバンドルされる。

- 著作権表示: Google Inc.（Noto Sans JPはGoogle Fontsで配布されているフォントファミリー。出典: https://github.com/google/fonts）
- ライセンス: SIL Open Font License, Version 1.1（再配布・同梱を許容）

```
Google Inc.

This Font Software is licensed under the SIL Open Font License, Version 1.1.
This license is copied below, and is also available with a FAQ at:
http://scripts.sil.org/OFL


-----------------------------------------------------------
SIL OPEN FONT LICENSE Version 1.1 - 26 February 2007
-----------------------------------------------------------

PREAMBLE
The goals of the Open Font License (OFL) are to stimulate worldwide
development of collaborative font projects, to support the font creation
efforts of academic and linguistic communities, and to provide a free and
open framework in which fonts may be shared and improved in partnership
with others.

The OFL allows the licensed fonts to be used, studied, modified and
redistributed freely as long as they are not sold by themselves. The
fonts, including any derivative works, can be bundled, embedded,
redistributed and/or sold with any software provided that any reserved
names are not used by derivative works. The fonts and derivatives,
however, cannot be released under any other type of license. The
requirement for fonts to remain under this license does not apply
to any document created using the fonts or their derivatives.

DEFINITIONS
"Font Software" refers to the set of files released by the Copyright
Holder(s) under this license and clearly marked as such. This may
include source files, build scripts and documentation.

"Reserved Font Name" refers to any names specified as such after the
copyright statement(s).

"Original Version" refers to the collection of Font Software components as
distributed by the Copyright Holder(s).

"Modified Version" refers to any derivative made by adding to, deleting,
or substituting -- in part or in whole -- any of the components of the
Original Version, by changing formats or by porting the Font Software to a
new environment.

"Author" refers to any designer, engineer, programmer, technical
writer or other person who contributed to the Font Software.

PERMISSION & CONDITIONS
Permission is hereby granted, free of charge, to any person obtaining
a copy of the Font Software, to use, study, copy, merge, embed, modify,
redistribute, and sell modified and unmodified copies of the Font
Software, subject to the following conditions:

1) Neither the Font Software nor any of its individual components,
in Original or Modified Versions, may be sold by itself.

2) Original or Modified Versions of the Font Software may be bundled,
redistributed and/or sold with any software, provided that each copy
contains the above copyright notice and this license. These can be
included either as stand-alone text files, human-readable headers or
in the appropriate machine-readable metadata fields within text or
binary files as long as those fields can be easily viewed by the user.

3) No Modified Version of the Font Software may use the Reserved Font
Name(s) unless explicit written permission is granted by the corresponding
Copyright Holder. This restriction only applies to the primary font name as
presented to the users.

4) The name(s) of the Copyright Holder(s) or the Author(s) of the Font
Software shall not be used to promote, endorse or advertise any
Modified Version, except to acknowledge the contribution(s) of the
Copyright Holder(s) and the Author(s) or with their explicit written
permission.

5) The Font Software, modified or unmodified, in part or in whole,
must be distributed entirely under this license, and must not be
distributed under any other license. The requirement for fonts to
remain under this license does not apply to any document created
using the Font Software.

TERMINATION
This license becomes null and void if any of the above conditions are
not met.

DISCLAIMER
THE FONT SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO ANY WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT
OF COPYRIGHT, PATENT, TRADEMARK, OR OTHER RIGHT. IN NO EVENT SHALL THE
COPYRIGHT HOLDER BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY,
INCLUDING ANY GENERAL, SPECIAL, INDIRECT, INCIDENTAL, OR CONSEQUENTIAL
DAMAGES, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING
FROM, OUT OF THE USE OR INABILITY TO USE THE FONT SOFTWARE OR FROM
OTHER DEALINGS IN THE FONT SOFTWARE.
```

## 共有UIパッケージ（`packages/ui`）

本アプリは共有UIパッケージ `@catrare/ui`（`packages/ui`。[docs/ui/design/](../../docs/ui/design/README.md)）に依存している。`packages/ui` が利用するリソースの出典・ライセンスは以下の通り（`packages/ui/THIRD_PARTY_NOTICES.md` の内容を転記）。

### shadcn/ui（GitHub, MIT）

- 出典: https://ui.shadcn.com/ / https://github.com/shadcn-ui/ui
- `packages/ui/src/components/*.tsx` は shadcn/ui のコンポーネントソース（`style: base-nova`）をCLIでコピーインし、DADS準拠に再スタイリングしたもの

```
MIT License

Copyright (c) 2023 shadcn

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```

### `@base-ui/react`（npm, MIT）／その他のnpm依存

コンポーネントのヘッドレスプリミティブ。本番依存として本アプリの `pnpm list --prod` に現れ、`writeDependencyLicenses` が機械的に収録する。

| パッケージ | ライセンス | 役割 |
|---|---|---|
| `@base-ui/react` | MIT | ヘッドレスプリミティブ |
| `cn` | MIT | `twMerge(clsx(...))` 相当（shadcn公式） |
| `class-variance-authority` | Apache-2.0 | variant定義 |
| `lucide-react` | ISC | コンポーネント内部の機能アイコン |
| `tw-animate-css` | MIT | 開閉アニメーション用ユーティリティ |
| `shadcn` | MIT | `shadcn/tailwind.css` の提供元・CLI |

## 使用しなかったリソース

以下は権利面の制約（Figmaデータ: CC BY 4.0、イラスト/アイコン素材: 専用利用規約）のため本フェーズでは使用していない（40-screens §10.18.2）。

- Figmaデザインデータ
- イラストレーション・アイコン素材
