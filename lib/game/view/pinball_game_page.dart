import 'dart:async' as async;

import 'package:flame/game.dart';
import 'package:flutter/material.dart';
import 'package:flutter/services.dart';
import 'package:flutter_bloc/flutter_bloc.dart';
import 'package:leaderboard_repository/leaderboard_repository.dart';
import 'package:pinball/assets_manager/assets_manager.dart';
import 'package:pinball/game/game.dart';
import 'package:pinball/l10n/l10n.dart';
import 'package:pinball/more_information/more_information.dart';
import 'package:pinball/select_character/select_character.dart';
import 'package:pinball/start_game/start_game.dart';
import 'package:pinball_audio/pinball_audio.dart';
import 'package:pinball_flame/pinball_flame.dart';
import 'package:pinball_ui/pinball_ui.dart';
import 'package:platform_helper/platform_helper.dart';
import 'package:share_repository/share_repository.dart';

class PinballGamePage extends StatelessWidget {
  PinballGamePage({
    Key? key,
    this.isDebugMode = true, //kDebugMode,
  }) : super(key: key);

  final bool isDebugMode;
  late async.Timer autoModeTimer;

  @override
  Widget build(BuildContext context) {
    final characterThemeBloc = context.read<CharacterThemeCubit>();
    final audioPlayer = context.read<PinballAudioPlayer>();
    final leaderboardRepository = context.read<LeaderboardRepository>();
    final shareRepository = context.read<ShareRepository>();
    final platformHelper = context.read<PlatformHelper>();
    final gameBloc = context.read<GameBloc>();
    final game = isDebugMode
        ? DebugPinballGame(
            characterThemeBloc: characterThemeBloc,
            audioPlayer: audioPlayer,
            leaderboardRepository: leaderboardRepository,
            shareRepository: shareRepository,
            l10n: context.l10n,
            platformHelper: platformHelper,
            gameBloc: gameBloc,
          )
        : PinballGame(
            characterThemeBloc: characterThemeBloc,
            audioPlayer: audioPlayer,
            leaderboardRepository: leaderboardRepository,
            shareRepository: shareRepository,
            l10n: context.l10n,
            platformHelper: platformHelper,
            gameBloc: gameBloc,
          );

    // automate play for stress testing
    autoModeTimer = async.Timer.periodic(
      const Duration(milliseconds: 2000),
      (_) {
        if (audioPlayer.isAutoMode()) {
          print('left');
          game.triggerVirtualKeyUp(LogicalKeyboardKey.arrowLeft);
          print('right');
          game.triggerVirtualKeyUp(LogicalKeyboardKey.arrowRight);
          print('enter');
          game.triggerVirtualKeyUp(LogicalKeyboardKey.enter);
        }
      },
    );

    return Scaffold(
      backgroundColor: PinballColors.black,
      body: BlocProvider(
        create: (_) => AssetsManagerCubit(game, audioPlayer)..load(),
        child: PinballGameView(game),
      ),
    );
  }
}

class PinballGameView extends StatelessWidget {
  PinballGameView(this.game, {Key? key}) : super(key: key);

  final PinballGame game;

  @override
  Widget build(BuildContext context) {
    return BlocBuilder<AssetsManagerCubit, AssetsManagerState>(
      builder: (context, state) {
        return state.isLoading
            ? const AssetsLoadingPage()
            : PinballGameLoadedView(game);
      },
    );
  }
}

@visibleForTesting
class PinballGameLoadedView extends StatelessWidget {
  const PinballGameLoadedView(this.game, {Key? key}) : super(key: key);

  final PinballGame game;

  @override
  Widget build(BuildContext context) {
    final platformHelper = context.read<PlatformHelper>();
    return StartGameListener(
      child: Stack(
        children: [
          Positioned.fill(
            child: MouseRegion(
              onHover: (_) {
                if (!game.focusNode.hasFocus) {
                  game.focusNode.requestFocus();
                }
              },
              // scale to fit mobile screen without losing plunger
              child: Transform.scale(
                scale: platformHelper.isMobile ? 0.85 : 1.0,
                child: GameWidget<PinballGame>(
                  game: game,
                  focusNode: game.focusNode,
                  initialActiveOverlays: const [PinballGame.playButtonOverlay],
                  overlayBuilderMap: {
                    PinballGame.playButtonOverlay: (_, game) =>
                        const Positioned(
                          bottom: 20,
                          right: 0,
                          left: 0,
                          child: PlayButtonOverlay(),
                        ),
                    PinballGame.mobileControlsOverlay: (_, game) => Positioned(
                          bottom: 0,
                          left: 0,
                          right: 0,
                          child: MobileControls(game: game),
                        ),
                    PinballGame.replayButtonOverlay: (context, game) =>
                        const Positioned(
                          bottom: 20,
                          right: 0,
                          left: 0,
                          child: ReplayButtonOverlay(),
                        )
                  },
                ),
              ),
            ),
          ),
          const _PositionedGameHud(),
          const _PositionedInfoIcon(),
          const _PositionedSoundIcon(),
          const _PositionedReplayIcon(),
        ],
      ),
    );
  }
}

class _PositionedGameHud extends StatelessWidget {
  const _PositionedGameHud({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isPlaying = context.select(
      (StartGameBloc bloc) => bloc.state.status == StartGameStatus.play,
    );
    final isGameOver = context.select(
      (GameBloc bloc) => bloc.state.status.isGameOver,
    );

    final gameWidgetWidth = MediaQuery.of(context).size.height * 9 / 16;
    final screenWidth = MediaQuery.of(context).size.width;
    final leftMargin = (screenWidth / 2) - (gameWidgetWidth / 1.8);
    final clampedMargin = leftMargin > 0 ? leftMargin : 0.0;

    return Positioned(
      top: 0,
      left: clampedMargin,
      child: Visibility(
        visible: isPlaying && !isGameOver,
        child: const GameHud(),
      ),
    );
  }
}

class _PositionedInfoIcon extends StatelessWidget {
  const _PositionedInfoIcon({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isPlaying = context.select(
      (StartGameBloc bloc) => bloc.state.status == StartGameStatus.play,
    );
    final isGameOver = context.select(
      (GameBloc bloc) => bloc.state.status.isGameOver,
    );

    return Positioned(
      top: (isPlaying && !isGameOver) ? 100.0 : 0,
      left: 0,
      child: BlocBuilder<GameBloc, GameState>(
        builder: (context, state) {
          return Visibility(
            //visible: state.status.isGameOver,
            child: IconButton(
              iconSize: 50,
              icon: const Icon(Icons.info, color: PinballColors.white),
              onPressed: () => showMoreInformationDialog(context),
            ),
          );
        },
      ),
    );
  }
}

class _PositionedSoundIcon extends StatefulWidget {
  const _PositionedSoundIcon({Key? key}) : super(key: key);

  @override
  State<_PositionedSoundIcon> createState() => _PositionedSoundIconState();
}

class _PositionedSoundIconState extends State<_PositionedSoundIcon> {
  var _mute = false;

  @override
  Widget build(BuildContext context) {
    final isPlaying = context.select(
      (StartGameBloc bloc) => bloc.state.status == StartGameStatus.play,
    );
    final isGameOver = context.select(
      (GameBloc bloc) => bloc.state.status.isGameOver,
    );

    final audioPlayer = context.read<PinballAudioPlayer>();

    return Positioned(
      top: (isPlaying && !isGameOver) ? 100.0 : 0,
      right: 0,
      child: BlocBuilder<GameBloc, GameState>(
        builder: (context, state) {
          return Visibility(
            //visible: state.status.isGameOver,
            child: IconButton(
                iconSize: 50,
                icon: Icon(
                  _mute ? Icons.volume_off : Icons.volume_up,
                  color: PinballColors.white,
                ),
                onPressed: () {
                  setState(() {
                    _mute = !_mute;
                  });
                  _mute ? audioPlayer.muteAll() : audioPlayer.playAll();
                }),
          );
        },
      ),
    );
  }
}

class _PositionedReplayIcon extends StatelessWidget {
  const _PositionedReplayIcon({Key? key}) : super(key: key);

  @override
  Widget build(BuildContext context) {
    final isPlaying = context.select(
      (StartGameBloc bloc) => bloc.state.status == StartGameStatus.play,
    );
    final isGameOver = context.select(
      (GameBloc bloc) => bloc.state.status.isGameOver,
    );

    return Positioned(
      top: (isPlaying && !isGameOver) ? 150.0 : 50.0,
      right: 0,
      child: BlocBuilder<GameBloc, GameState>(
        builder: (context, state) {
          return Visibility(
            //visible: state.status.isGameOver,
            child: IconButton(
              iconSize: 50,
              icon: const Icon(Icons.restart_alt, color: PinballColors.white),
              onPressed: () {
                context.read<GameBloc>().add(const GameStarted());
                context.read<StartGameBloc>().add(const ReplayTapped());
              },
            ),
          );
        },
      ),
    );
  }
}
