import ClassNames from 'classnames';

export default function (props, ref, key) {
    function getClassNames(ref2) {
        var animated = _.get(props, `data[${ref2}].playing`) ||
            (props.gameState.currentScreenIndex > 8 && props.gameState.currentScreenIndex <= 10);
        return ClassNames(ref2, {animated});
    }

    return (
        <skoash.Screen
            {...props}
            ref={ref}
            key={key}
            className={ClassNames({
                STAY: props.gameState.currentScreenIndex > 8 && props.gameState.currentScreenIndex <= 10
            })}
            id="step-2"
        >
            <skoash.MediaSequence
                 ref="audio-sequence"
                 checkComplete={true}
            >
                <skoash.Audio
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}ti-rv-1.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-step-2.mp3`}
                />
                <skoash.Audio
                    type="voiceOver"
                    src={`${CMWN.MEDIA.VO}vo-collect-empty.mp3`}
                />
                <skoash.Audio
                    playTarget="container-1"
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}ti-rv-5.mp3`}
                    delay={600}
                />
                <skoash.Audio
                    playTarget="container-2"
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}ti-rv-5.mp3`}
                    delay={600}
                />
                <skoash.Audio
                    playTarget="container-3"
                    type="sfx"
                    src={`${CMWN.MEDIA.EFFECT}ti-rv-5.mp3`}
                    delay={600}
                />
            </skoash.MediaSequence>
            <div className="step animated" />
            <p className="collect">
                Collect empty plastic lids<br />
                that you would otherwise throw away.
            </p>
            <div className="images">
                <div className={getClassNames('container-1')}></div>
                <div className={getClassNames('container-2')}></div>
                <div className={getClassNames('container-3')}></div>
            </div>
        </skoash.Screen>
    );
}

