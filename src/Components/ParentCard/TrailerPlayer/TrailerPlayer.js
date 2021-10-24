import './TrailerPlayer.css'


export const TrailerPlayer = ({ view }) => {
    const { TrailerURL } = view
    function getId(url) {
        const regExp = /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
        const match = url.match(regExp);

        return (match && match[2].length === 11)
            ? match[2]
            : null;
    }
    const videoId = getId(TrailerURL);
    return (<div className='trailerCard'>
        <div className='child1'>
            <iframe id="ytplayer" type="text/html" width="640" height="360"
                src={`https://www.youtube.com/embed/${videoId}?autoplay=0`}
                frameborder="0"></iframe>

        </div>
        <div className='child2'></div>
    </div>)
}