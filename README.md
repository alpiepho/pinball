# I/O Pinball (alpiepho fork)

When I showed this to some freinds I was challenged..."now you need to change it so the ball is the teams logo?".  Challenged Accepted.

This project is a fork of the original project (https://github.com/flutter/pinball) with a few additions:

- changed ball.png as challenged
- build with peanut script to host of gh-pages
- build as an installable PWA
- change the background screens to reflect the team

The run_peanut.sh script was particularly tricky...turns out that gh-pages does not like to serve assets with "__" in the url.

NOTE: I did disable the Google analytics.  And I don't think the global scoring will work.  A future option or another project, I will look into keeping common scores in Firebase as the origianl application does.


## Get Application
Version: 0.1

GH-Pages site: https://alpiepho.github.io/pinball/

or QR Code:

![QR Code](./qr-code.png)

## "Install" on iPhone

This application is a Web application known as a PWA (progressive web application).  It is possible to add a PWA to the home screen of an iPhone
like it is a downloaded application (there is a similare mechanism for Android that is not discused here).  Use the following steps:

1. Open the above link in Safari and click on up-arrow
2. Click on "Add to Home Screen"
3. Select "Add"

## TODO List

- [x] add todo list ot README
- [x] fix open source links
- [x] toggle sound (see Issues below)
- [x] allow i/info button from all screens, even when playing (pause game?)
- [x] debug mode from hidden press
- [ ] auto mode from hidden press
- [ ] can we add firebase to gh page? need login?

## Issues

- attempted to add sound mute.  works partially.  MUST disable BEFORE starting any games. Restart app to re-enable.

## References

Icons created with https://appicon.co/  NOTE: original image should be square to avoid white edges on IOS Home screen.

The qr code was generated from:
https://www.the-qrcode-generator.com/


# I/O Pinball (Original)

[![Pinball Header][logo]][pinball_link]

[![io_pinball][build_status_badge]][workflow_link]
![coverage][coverage_badge]
[![style: very good analysis][very_good_analysis_badge]][very_good_analysis_link]
[![License: MIT][license_badge]][license_link]

A Pinball game built with [Flutter][flutter_link] and [Firebase][firebase_link] for [Google I/O 2022][google_io_link].

[Try it now][pinball_link] and [learn about how it's made][blog_link].

_Built by [Very Good Ventures][very_good_ventures_link] in partnership with Google_

_Created using [Very Good CLI][very_good_cli_link] 🤖_

---

## Getting Started 🚀

To run the desired project either use the launch configuration in VSCode/Android Studio or use the following commands:

```sh
$ flutter run -d chrome
```

_\*I/O Pinball works on Web for desktop and mobile._

---

## Running Tests 🧪

To run all unit and widget tests use the following command:

```sh
$ flutter test --coverage --test-randomize-ordering-seed random
```

To view the generated coverage report you can use [lcov](https://github.com/linux-test-project/lcov).

```sh
# Generate Coverage Report
$ genhtml coverage/lcov.info -o coverage/
# Open Coverage Report
$ open coverage/index.html
```

---

## Working with Translations 🌐

This project relies on [flutter_localizations][flutter_localizations_link] and follows the [official internationalization guide for Flutter][internationalization_link].

### Adding Strings

1. To add a new localizable string, open the `app_en.arb` file at `lib/l10n/arb/app_en.arb`.

```arb
{
    "@@locale": "en",
    "counterAppBarTitle": "Counter",
    "@counterAppBarTitle": {
        "description": "Text shown in the AppBar of the Counter Page"
    }
}
```

2. Then add a new key/value and description

```arb
{
    "@@locale": "en",
    "counterAppBarTitle": "Counter",
    "@counterAppBarTitle": {
        "description": "Text shown in the AppBar of the Counter Page"
    },
    "helloWorld": "Hello World",
    "@helloWorld": {
        "description": "Hello World Text"
    }
}
```

3. Use the new string

```dart
import 'package:pinball/l10n/l10n.dart';

@override
Widget build(BuildContext context) {
  final l10n = context.l10n;
  return Text(l10n.helloWorld);
}
```

### Adding Translations

1. For each supported locale, add a new ARB file in `lib/l10n/arb`.

```
├── l10n
│   ├── arb
│   │   ├── app_en.arb
│   │   └── app_es.arb
```

2. Add the translated strings to each `.arb` file:

`app_en.arb`

```arb
{
    "@@locale": "en",
    "counterAppBarTitle": "Counter",
    "@counterAppBarTitle": {
        "description": "Text shown in the AppBar of the Counter Page"
    }
}
```

`app_es.arb`

```arb
{
    "@@locale": "es",
    "counterAppBarTitle": "Contador",
    "@counterAppBarTitle": {
        "description": "Texto mostrado en la AppBar de la página del contador"
    }
}
```

[build_status_badge]: https://github.com/flutter/pinball/actions/workflows/main.yaml/badge.svg
[coverage_badge]: coverage_badge.svg
[firebase_link]: https://firebase.google.com/
[flutter_link]: https://flutter.dev
[flutter_localizations_link]: https://api.flutter.dev/flutter/flutter_localizations/flutter_localizations-library.html
[google_io_link]: https://events.google.com/io/
[blog_link]: https://medium.com/flutter/i-o-pinball-powered-by-flutter-and-firebase-d22423f3f5d
[internationalization_link]: https://flutter.dev/docs/development/accessibility-and-localization/internationalization
[license_badge]: https://img.shields.io/badge/license-MIT-blue.svg
[license_link]: https://opensource.org/licenses/MIT
[logo]: art/readme_header.png
[pinball_link]: https://pinball.flutter.dev
[very_good_analysis_badge]: https://img.shields.io/badge/style-very_good_analysis-B22C89.svg
[very_good_analysis_link]: https://pub.dev/packages/very_good_analysis
[very_good_cli_link]: https://github.com/VeryGoodOpenSource/very_good_cli
[very_good_ventures_link]: https://verygood.ventures/
[workflow_link]: https://github.com/flutter/pinball/actions/workflows/main.yaml
