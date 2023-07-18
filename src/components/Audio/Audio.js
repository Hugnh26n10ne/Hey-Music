import PropTypes from 'prop-types';
import { forwardRef, useImperativeHandle, useRef } from 'react';

function Audio(props, ref) {
    const audioRef = useRef();

    useImperativeHandle(ref, () => ({
        play() {
            audioRef.current.play();
        },
        pause() {
            audioRef.current.pause();
        },
    }));

    return <audio ref={audioRef} src={props.src} />;
}

Audio.propTypes = {
    props: PropTypes.object.isRequired,
};

export default forwardRef(Audio);
