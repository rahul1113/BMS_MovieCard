import { useEffect, useState } from "react";
import playIcon from '../../../asset/pngkey.com-namaskar-image-png-3648753.png'
import './Image.css'


function Image({ url, handlVideo }) {
    const [setImg, hasError, retry, imgRef] = useImageError();

    if (hasError)
        return (
            <div className='Imageerror' onClick={handlVideo}>
                <img
                    ref={setImg}
                    src="https://via.placeholder.com/150x200?text=image+not+found"
                    alt="hello"
                />
                <img src={playIcon} className='Imageicon' />
            </div>
        );

    return (
        <div className='Image'
            onClick={handlVideo}
        >
            <img ref={setImg} src={url} alt="hello" />
            <img src={playIcon} className='Imageicon' />
        </div>
    );
}

const useImageError = () => {
    const [el, setEl] = useState(null); // contains image reference
    const [error, setError] = useState(false); // contains error flag

    const _handleError = () => {
        setError(true);
    }; // set error
    const retry = () => {
        setError(false);
    }; // set error false to img can re-render

    useEffect(() => {
        // use of error event of the image tag
        el?.addEventListener("error", _handleError);

        return () => {
            el?.removeEventListener("error", _handleError);
        };
    }, [el]);

    return [
        setEl, // set the image ref
        error, // error flag
        retry, // a func, which can be used to re-render image
        el // img ref(for special case which requires ref)
    ];
};

export default Image
