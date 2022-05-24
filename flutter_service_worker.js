'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "e2cbcdee12b227f9269d22f45bc120ce",
"index.html": "79d1df52cab6eba46189e6605fc374f8",
"/": "79d1df52cab6eba46189e6605fc374f8",
"main.dart.js": "54eae54e906f612978fce51a4c4ad023",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/1024.png": "59e0094aaee3a1fab128a320909168b2",
"icons/60.png": "6371c41679aeb184e8c1117f59888539",
"icons/64.png": "f37893c3a5f7ee7bc37709d2be809753",
"icons/58.png": "69c69673d4f3641c17b3b444001d0ff5",
"icons/29.png": "84e74a38ad31af8b706b5d4f47e067b7",
"icons/114.png": "98d3eb0ddf3e70f6a5b04e9ff1f42738",
"icons/128.png": "74e7e4c8093784798e190133e3ac701b",
"icons/16.png": "8bc1f700e7d95b2bc63e2b00a146a825",
"icons/120.png": "f9f041398141b8ff3191241b715f686a",
"icons/256.png": "31b622beb97b33978784e3095bf93541",
"icons/32.png": "0eeec2f996e887f3b91b48868499bdb6",
"icons/180.png": "b820958df9adf5ccffa0ac233e6ef37e",
"icons/57.png": "9a83d9d4490e7986b97fe3bf7ab91c89",
"icons/40.png": "e047b5f824bfd065af5a6e90f3e5a2a8",
"icons/87.png": "e68e60424ceb7e179764771b36152258",
"manifest.json": "1c9a86e0e037e9496b59e1f95641fdc5",
"https://alpiepho.github.io/pinball/assets/AssetManifest.json": "45d815abd04c71035d71ebcffa33e954",
"https://alpiepho.github.io/pinball/assets/NOTICES": "40bb87b03fc6719013aac1780bc8f63e",
"https://alpiepho.github.io/pinball/assets/FontManifest.json": "b08a2ff5f884cbd8619dba1aaf185381",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/fonts/PixeloidMono-1G8ae.ttf": "dbf3f90cee67aab678ca14b1312d0325",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/fonts/PixeloidSansBold-RpeJo.ttf": "d231b0116d3dd8ad58d6ea3a74417055",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/fonts/PixeloidSans-nR3g1.ttf": "6bb6308744b389c96f189aad21a307cb",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/signpost/active2.png": "cfb806bcb83bd07601d4d16bfbd2a15e",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/signpost/active3.png": "4b9157f152e3483e214ad2dfeee39c73",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/signpost/active1.png": "7d87dcb959140ec2e62d4303bc022c59",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/signpost/inactive.png": "5e1be36e8563c21cf0093e5b8392953a",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/baseboard/left.png": "5197341b0860006687bb40425b2b8dd2",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/baseboard/right.png": "9f94d017183666df2a54ab1591d3734b",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/multiplier/x6/dimmed.png": "60684d6f319c08f3940746405fac4cac",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/multiplier/x6/lit.png": "0adfcfb6313be0b947166c611e70fe60",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/multiplier/x4/dimmed.png": "1e62a7e19572342d75dd3e11f73fabef",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/multiplier/x4/lit.png": "c9fd6ba9504e63ddf4acd1ab6c3f5814",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/multiplier/x3/dimmed.png": "ccfde32f79419bfd605bd71a8c6eff97",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/multiplier/x3/lit.png": "84da58b0fe3d7bc45dc7f971cf98c5f2",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/multiplier/x2/dimmed.png": "6538f01760513645c5cd9d187bb5cf38",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/multiplier/x2/lit.png": "c4216f130efc9f4434acc3eaa7d1b8cc",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/multiplier/x5/dimmed.png": "ecd974119d841d17975c6418a0f14724",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/multiplier/x5/lit.png": "84ddd7fdfeb06e0832ce6d2e117e1cf9",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/plunger/plunger.png": "b3e5820af3de02a47d1b338bf79b01c3",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/plunger/rocket.png": "b6c43b14f0925934be335027e55af873",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/error_background.png": "8603251a0a53d18d829d64c7aac33357",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/slingshot/upper.png": "0dade11c5eda77c20907bfd60ccfc240",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/slingshot/lower.png": "3176f2c676d90e2993116ce6aa380a04",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/boundary/bottom.png": "05eeb92a0849fe12b0869042c55d8778",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/boundary/outer.png": "fffbae07522ebf1b8802e6c77928c900",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/boundary/outer_bottom.png": "6df468c84c093cdfd7be90584ed16bcb",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/flipper/left.png": "b1547f3f2bf1a7c133f571cc1028326e",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/flipper/right.png": "f8b75027851ab8d66053525744faaf95",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/board_background.png": "9feacc5137c479c047e96d016996ed95",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/dino/animatronic/mouth.png": "230e3f6aa1cbc2961a0e0cbffa43502e",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/dino/animatronic/head.png": "ecd0c55aad4a3365131a7c13f59ae166",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/dino/top_wall.png": "cb5149b8f467af11a8137b81c133e89f",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/dino/bottom_wall.png": "83ddfa109e1cab41b1a010908cf8be59",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/dino/top_wall_tunnel.png": "3dbc185205255392f18acef3d6e6d6d2",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/score/one_million.png": "d0925a2e8d40d5051c36615f8ae1150a",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/score/five_thousand.png": "dfc436951e8e94c71877376c8872ca7c",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/score/two_hundred_thousand.png": "c16248c4bc141abda70163c3e18ee4a5",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/score/twenty_thousand.png": "992165e89054476a03ce3225fc7e942d",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/flapper/flap.png": "ffd30ca85e1580a313fdb21e1c32c562",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/flapper/back_support.png": "90d7ab9930b12fa860508f2f9e53ea15",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/flapper/front_support.png": "215b46e9543f952996ef1b67db6ebf76",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/google_rollover/right/pin.png": "fb25466ff04d444ebfc8fa64f8c0519f",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/google_rollover/right/decal.png": "c41ca747fa23f2d85a524d7d480abe1a",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/google_rollover/left/pin.png": "a361d911ba73a5d42f7ddbc176a7e6b7",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/google_rollover/left/decal.png": "f4c7c6624d17092ca867c244b5176f15",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/ball/flame_effect.png": "0338a3f9ffaea8579132a3d666ba0ace",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/android/rail/main.png": "b7853f526a33cb2f5ed2e2cc2420cf53",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/android/rail/exit.png": "7270e221a610ec7a5b47e14dbe9d031b",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/android/spaceship/light_beam.png": "eac0b1f634744d78739a77f08f62a0db",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/android/spaceship/animatronic.png": "06c62b4fb8fd218e63e7843842520fe9",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/android/spaceship/saucer.png": "3e2137bcea81198bf1ae813d9be0c4de",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/android/bumper/a/dimmed.png": "786973a2027a1509e64d1213072db25d",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/android/bumper/a/lit.png": "4f073ee6533a4257c5af349ac7ab5a4d",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/android/bumper/cow/dimmed.png": "7fb0391772fb1c378c2ff893ca2ce2ea",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/android/bumper/cow/lit.png": "cbba954576f902e4788bd8d6397b9ea3",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/android/bumper/b/dimmed.png": "945047f700031b480f07410f9ee0ecbc",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/android/bumper/b/lit.png": "26c9950491cbb920c42dd5967cd5580d",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/android/ramp/railing_background.png": "d3c8a43864193887a3c981d868916a8d",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/android/ramp/main.png": "54857fb0c92ad25bb7c5f84fae1103a9",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/android/ramp/arrow/active2.png": "59dffbda64f0c12b1830db6c8a78be11",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/android/ramp/arrow/active3.png": "684cdd7d0f46ee3ba6ce2404d41744b5",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/android/ramp/arrow/active1.png": "18f256a3a8e82b32578a873dec67e4a2",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/android/ramp/arrow/active4.png": "c2c226440977df2eda1adf242dd89b95",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/android/ramp/arrow/active5.png": "c7bc92c0a9e088106f568083f66cd45c",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/android/ramp/arrow/inactive.png": "b0419fbbe1e0dda69286d36fc753b2e9",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/android/ramp/railing_foreground.png": "5e5178d4f0d5b41a8752596f0a809dc5",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/android/ramp/board_opening.png": "f117f5f04275429edccae56e3ff43e1e",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/display_arrows/arrow_right.png": "e08c4fa67db4c0d449a8c12e187dccee",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/display_arrows/arrow_left.png": "0d40189cbd33004c72926d002447200c",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/google_word/letter6/dimmed.png": "8dea316a33073173f6b059d3169b5a8d",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/google_word/letter6/lit.png": "102ebbc5dcdf6859f5653e8c5d544ae8",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/google_word/letter1/dimmed.png": "f3abbc91d08f8bed53fb59d3cb8a3d35",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/google_word/letter1/lit.png": "d603c3cf2a4f9b3d8ffa05541fbe1352",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/google_word/letter2/dimmed.png": "1b27a89ea57099fd6fa67b9593c7489b",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/google_word/letter2/lit.png": "5288386094a13c457ee6b7cca4a9f028",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/google_word/letter5/dimmed.png": "a7e9279733bb3f6f839d78cbc328d03e",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/google_word/letter5/lit.png": "9d9ee5e106fcbc75ac3de2d4cdbeda1b",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/google_word/letter4/dimmed.png": "a842d6ef699014ab400f6c630008faa6",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/google_word/letter4/lit.png": "ee40ad42fd0a3b9fc426947e4975caef",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/google_word/letter3/dimmed.png": "77e7ca518dd4b7019d94b2ac7878cb40",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/google_word/letter3/lit.png": "d8d30bdfaf73b163a29297ff78d730fa",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/dash/animatronic.png": "d738e6d6af57a928957f00189a093459",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/dash/bumper/a/inactive.png": "6ea5f7c8ef34dc62735fbe387c22df1e",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/dash/bumper/a/active.png": "4cb834cbe79d3925a9ef4fff43a94044",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/dash/bumper/main/inactive.png": "0b8c635fcb53d5f01ad3180a405401c5",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/dash/bumper/main/active.png": "76b1fa9a3bd5b08f0e05f8aa58d42a3c",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/dash/bumper/b/inactive.png": "79d54766265e0274590745a94308d3a3",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/dash/bumper/b/active.png": "977ac26318b041ad9549a5ab92dd3aa3",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/skill_shot/pin.png": "95d182a02ef95930f6db503869c3c633",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/skill_shot/dimmed.png": "2fad1fc84507de2bdefa512fc5248a23",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/skill_shot/lit.png": "1f302f8fc44bd2534fc72298e321d607",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/skill_shot/decal.png": "7fc288e4b1959f08253fd0dd25b88c03",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/multiball/dimmed.png": "e6420454871f6e8f28112c394b053d16",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/multiball/lit.png": "ba636f85ac050563aae888e41baa7b5a",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/backbox/marquee.png": "301cc115917c5cde760d9dc41b96570c",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/backbox/display_divider.png": "fd1de67d6560b61f57f3e3f258bcd2bc",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/backbox/button/twitter.png": "7359233024078f9f35568d4e0d51dacb",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/backbox/button/facebook.png": "c1cfaf0db1137ef4ae6d16d7b5bdf1f8",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/backbox/display_title_decoration.png": "be3191e6a057921130a8590bdbca60af",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/kicker/right/dimmed.png": "a65a5cc6c23f98bf55b81c61197e3646",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/kicker/right/lit.png": "3114245292a2230c22a832ee5cf5fbc3",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/kicker/left/dimmed.png": "6689f25757a961e3f09ca0e63da01a7b",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/kicker/left/lit.png": "e85ee7f2588770358a1a7f9dc96419a1",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/launch_ramp/background_railing.png": "993abe291003d77f7f72cc9511c362ee",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/launch_ramp/ramp.png": "13ebdf71897f2dbd093ab4f867b08c6f",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/launch_ramp/foreground_railing.png": "86672f5bd056d22f20a0056816fb31df",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/sparky/animatronic.png": "f35c20add652f3353730cd3e3c94b5a2",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/sparky/bumper/a/dimmed.png": "16e8f6f580bc14104bf6bca0f879eb9d",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/sparky/bumper/a/lit.png": "19a5c38e72e4110435d3b53aad76b219",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/sparky/bumper/c/dimmed.png": "13171b441167f98f384e5bc52ba344ac",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/sparky/bumper/c/lit.png": "e6dd2a0e0bb3e26fa5fd3f145299bce9",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/sparky/bumper/b/dimmed.png": "1b374b11a83bc01520e01adee7cdb446",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/sparky/bumper/b/lit.png": "359d8bdd23be5da76fd7b76cdef56abe",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/sparky/computer/glow.png": "c340ea77f8683f45b210d70353f0508b",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/sparky/computer/top.png": "f99cb426e0cd6022a582c73aec215a9b",
"https://alpiepho.github.io/pinball/assets/packages/pinball_components/assets/images/sparky/computer/base.png": "2fcdcb868584a36c8c841323e88ac6d1",
"https://alpiepho.github.io/pinball/assets/packages/pinball_theme/assets/images/pinball_button.png": "f1e6ae05075995e07300cc925c6de84b",
"https://alpiepho.github.io/pinball/assets/packages/pinball_theme/assets/images/dino/icon.png": "35800f9fb9df73f479ed091fa916877f",
"https://alpiepho.github.io/pinball/assets/packages/pinball_theme/assets/images/dino/ball.png": "85e2378bed7b85cd730a0757af906524",
"https://alpiepho.github.io/pinball/assets/packages/pinball_theme/assets/images/dino/animation.png": "4058af12f24a5d2963275ddfdcf8a818",
"https://alpiepho.github.io/pinball/assets/packages/pinball_theme/assets/images/dino/leaderboard_icon.png": "e706447ef04c79eb2e492b7752d36dc5",
"https://alpiepho.github.io/pinball/assets/packages/pinball_theme/assets/images/dino/background.jpg": "a49f842f27c6aa78ea8ec3fd8ff72f72",
"https://alpiepho.github.io/pinball/assets/packages/pinball_theme/assets/images/android/icon.png": "f5fbd7cc51c7575e493feee1b12158cf",
"https://alpiepho.github.io/pinball/assets/packages/pinball_theme/assets/images/android/ball.png": "d5941cc16e9dfe3c308aae864bbb6d09",
"https://alpiepho.github.io/pinball/assets/packages/pinball_theme/assets/images/android/animation.png": "398e1629921cd839a2d191d22c2e8cfc",
"https://alpiepho.github.io/pinball/assets/packages/pinball_theme/assets/images/android/leaderboard_icon.png": "bac1f2e183eba11107664680b3837dca",
"https://alpiepho.github.io/pinball/assets/packages/pinball_theme/assets/images/android/background.jpg": "9795984c135618f956baac7e555f0828",
"https://alpiepho.github.io/pinball/assets/packages/pinball_theme/assets/images/dash/icon.png": "bc31eddc40f6db0ae0852d0c59033fe5",
"https://alpiepho.github.io/pinball/assets/packages/pinball_theme/assets/images/dash/ball.png": "787dae34935b087f9599a3ce09cd39fa",
"https://alpiepho.github.io/pinball/assets/packages/pinball_theme/assets/images/dash/animation.png": "ac28305565e59eabe3ea29735de850e2",
"https://alpiepho.github.io/pinball/assets/packages/pinball_theme/assets/images/dash/leaderboard_icon.png": "e1d0c8a1bc972dd1582de821039bc58c",
"https://alpiepho.github.io/pinball/assets/packages/pinball_theme/assets/images/dash/background.jpg": "655280b0fd7f047ed956b7c0ebfec073",
"https://alpiepho.github.io/pinball/assets/packages/pinball_theme/assets/images/select_character_background.png": "e4104951ad3b6c2f1563304a20a30d20",
"https://alpiepho.github.io/pinball/assets/packages/pinball_theme/assets/images/sparky/icon.png": "834cbbf345b7b1b1a3de9bd305ff0cda",
"https://alpiepho.github.io/pinball/assets/packages/pinball_theme/assets/images/sparky/ball.png": "fb2c761c254b168f048e0ea8676af29d",
"https://alpiepho.github.io/pinball/assets/packages/pinball_theme/assets/images/sparky/animation.png": "4c5450db123412c22c6417f8c836e8e7",
"https://alpiepho.github.io/pinball/assets/packages/pinball_theme/assets/images/sparky/leaderboard_icon.png": "91a322d7a602201450cfd838dfe18371",
"https://alpiepho.github.io/pinball/assets/packages/pinball_theme/assets/images/sparky/background.jpg": "a69658ef36e71441163b3c592d706c43",
"https://alpiepho.github.io/pinball/assets/packages/pinball_audio/assets/music/background.mp3": "d74256deb83cc330cb5eebc5bfeed585",
"https://alpiepho.github.io/pinball/assets/packages/pinball_audio/assets/sfx/sparky.mp3": "c1aadf2f13f9865b2bfa796c538f6f58",
"https://alpiepho.github.io/pinball/assets/packages/pinball_audio/assets/sfx/game_over_voice_over.mp3": "dd8e968fcd238463b983d8eeaf5bbddf",
"https://alpiepho.github.io/pinball/assets/packages/pinball_audio/assets/sfx/google.mp3": "8a3b9d25b980d9ba5b942aae5b124e55",
"https://alpiepho.github.io/pinball/assets/packages/pinball_audio/assets/sfx/io_pinball_voice_over.mp3": "f52327967729da5dbf425e711defa1be",
"https://alpiepho.github.io/pinball/assets/packages/pinball_audio/assets/sfx/kicker_a.mp3": "15dbdbaa64f4a81d59ac43c8c3f30ec0",
"https://alpiepho.github.io/pinball/assets/packages/pinball_audio/assets/sfx/kicker_b.mp3": "d9d07fd2bb77746e6843e3eba9383382",
"https://alpiepho.github.io/pinball/assets/packages/pinball_audio/assets/sfx/bumper_b.mp3": "4206b4d4904246f622abb550a83bdfb1",
"https://alpiepho.github.io/pinball/assets/packages/pinball_audio/assets/sfx/bumper_a.mp3": "c2b4b9388c6baed23b02d7fb36facf7c",
"https://alpiepho.github.io/pinball/assets/packages/pinball_audio/assets/sfx/rollover.mp3": "048b382ca9369eee6bcbe6b1dc0243b7",
"https://alpiepho.github.io/pinball/assets/packages/pinball_audio/assets/sfx/flipper.mp3": "26dcc7c6a0d6921a0c7c6b0d78248c45",
"https://alpiepho.github.io/pinball/assets/packages/pinball_audio/assets/sfx/android.mp3": "766b79926f137c7ef20cbebdfebe4798",
"https://alpiepho.github.io/pinball/assets/packages/pinball_audio/assets/sfx/dino.mp3": "1630d66865b8a5a18e42f41764c44740",
"https://alpiepho.github.io/pinball/assets/packages/pinball_audio/assets/sfx/dash.mp3": "b24e9450c4f492c626ac415f14d80f71",
"https://alpiepho.github.io/pinball/assets/packages/pinball_audio/assets/sfx/cow_moo.mp3": "4a2d84cf0d3bb398c9c4a2a6bbacf8ff",
"https://alpiepho.github.io/pinball/assets/packages/pinball_audio/assets/sfx/launcher.mp3": "02b3d49418572eed809cc042d793d253",
"https://alpiepho.github.io/pinball/assets/packages/pinball_ui/fonts/PixeloidMono-1G8ae.ttf": "dbf3f90cee67aab678ca14b1312d0325",
"https://alpiepho.github.io/pinball/assets/packages/pinball_ui/fonts/PixeloidSansBold-RpeJo.ttf": "d231b0116d3dd8ad58d6ea3a74417055",
"https://alpiepho.github.io/pinball/assets/packages/pinball_ui/fonts/PixeloidSans-nR3g1.ttf": "6bb6308744b389c96f189aad21a307cb",
"https://alpiepho.github.io/pinball/assets/packages/pinball_ui/assets/images/dialog/background.png": "a33a9133cac960de8969426dc0a82dfa",
"https://alpiepho.github.io/pinball/assets/packages/pinball_ui/assets/images/button/dpad_left.png": "084548103370315c3e98e660d6ccb91e",
"https://alpiepho.github.io/pinball/assets/packages/pinball_ui/assets/images/button/dpad_up.png": "e823bad3db679f71f8b7c480c5a84a86",
"https://alpiepho.github.io/pinball/assets/packages/pinball_ui/assets/images/button/pinball_button.png": "f1e6ae05075995e07300cc925c6de84b",
"https://alpiepho.github.io/pinball/assets/packages/pinball_ui/assets/images/button/dpad_right.png": "38eb49fed3d95072f72aa4fad5593bd6",
"https://alpiepho.github.io/pinball/assets/packages/pinball_ui/assets/images/button/dpad_down.png": "fe126343b33bd11375742b810b7d0c60",
"https://alpiepho.github.io/pinball/assets/fonts/MaterialIcons-Regular.otf": "95db9098c58fd6db106f1116bae85a0b",
"https://alpiepho.github.io/pinball/assets/assets/images/bonus_animation/android_spaceship.png": "46fb558bc450947b2bb49cfc59b701b2",
"https://alpiepho.github.io/pinball/assets/assets/images/bonus_animation/dash_nest.png": "efd592c03fb1f557bc52d3f319cfc7d3",
"https://alpiepho.github.io/pinball/assets/assets/images/bonus_animation/sparky_turbo_charge.png": "e9417b6f4bf3408afe30553f470c96e5",
"https://alpiepho.github.io/pinball/assets/assets/images/bonus_animation/google_word.png": "d36a6eb69adfb5d7ac9dd1a3500d324e",
"https://alpiepho.github.io/pinball/assets/assets/images/bonus_animation/dino_chomp.png": "cfeb26ecb0ed9af6f6ecb6b73971b55f",
"https://alpiepho.github.io/pinball/assets/assets/images/components/space.png": "035592d0396e8378b06f864eac240b47",
"https://alpiepho.github.io/pinball/assets/assets/images/components/key.png": "9ad21b935dae863dbd97b6b25987b50e",
"https://alpiepho.github.io/pinball/assets/assets/images/score/mini_score_background.png": "cc418b915dc51161a3b6f29a905e04b2",
"https://alpiepho.github.io/pinball/assets/assets/images/loading_game/io_pinball.png": "e6710a37d648336e59a9179ca1a75e4a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "https://alpiepho.github.io/pinball/main.dart.js",
"https://alpiepho.github.io/pinball/index.html",
"https://alpiepho.github.io/pinball/assets/NOTICES",
"https://alpiepho.github.io/pinball/assets/AssetManifest.json",
"https://alpiepho.github.io/pinball/assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
