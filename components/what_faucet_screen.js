import ClassNames from 'classnames';

let onSelect = function () {
    this.updateScreenData({
        key: 'selection',
        data: {
            target: 'correct',
        },
    });
};

let getClassNames = function (props, ref) {
    return ClassNames(ref, {
        animated: _.get(props, `data.${ref}.playing`),
        selectable: _.get(props, 'data.media-sequence.complete'),
    });
};

export default function (props, ref, key) {
    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            id="what-faucet"
        >
            <div className="question" />
            <skoash.MediaSequence
                ref="audio-sequence"
                checkComplete={true}
                onComplete={() => {
                    skoash.trigger('updateState', {
                        path: 'media-sequence',
                        data: {
                            complete: true
                        }
                    });
                }}
            >
                <skoash.Audio
                    ref="what-faucet"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-what-faucet.mp3`}
                />
                <skoash.Audio
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}ti-rv-3.mp3`}
                />
                <skoash.Audio
                    playTarget="kitchen"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-kitchen.mp3`}
                />
                <skoash.Audio
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}ti-rv-3.mp3`}
                />
                <skoash.Audio
                    playTarget="shower"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-shower.mp3`}
                />
                <skoash.Audio
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}ti-rv-3.mp3`}
                />
                <skoash.Audio
                    playTarget="bathroom"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-bathroom.mp3`}
                />
                <skoash.Audio
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}ti-rv-3.mp3`}
                />
                <skoash.Audio
                    playTarget="bathtub"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-bathtub.mp3`}
                />
                <skoash.Audio
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}ti-rv-3.mp3`}
                />
                <skoash.Audio
                    playTarget="classroom"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-classroom.mp3`}
                />
                <skoash.Audio
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}ti-rv-3.mp3`}
                />
                <skoash.Audio
                    playTarget="outdoor"
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-outdoor.mp3`}
                />
            </skoash.MediaSequence>

            <skoash.MediaCollection
                play={_.get(props, 'data.selection.target', null)}
                onPlay={function () {
                    this.media.correct.play();

                    this.updateGameState({
                        path: 'selection',
                        data: {
                            target: null
                        }
                    });
                }}
            >
                <skoash.Audio ref="correct" type="sfx" src={`${CMWN.MEDIA.EFFECT}ti-rv-4.mp3`} />
            </skoash.MediaCollection>

            <skoash.Selectable
                chooseOne
                onSelect={onSelect}
                complete
                list={[
                    <skoash.ListItem className={getClassNames(props, 'kitchen')} correct />,
                    <skoash.ListItem className={getClassNames(props, 'shower')} correct />,
                    <skoash.ListItem className={getClassNames(props, 'bathroom')} correct />,
                    <skoash.ListItem className={getClassNames(props, 'bathtub')} correct />,
                    <skoash.ListItem className={getClassNames(props, 'classroom')} correct />,
                    <skoash.ListItem className={getClassNames(props, 'outdoor')} correct/>
                ]}
            />
        </skoash.Screen>
    );
}

