export function Video({video}) { 
    // const { video } = parens; o mesmo que pares.video

    function hadleMouseEnter(event) {
        event.target.play()
    }
    function hadleMouseLeave(event) {
        event.target.pause()
        event.target.currentTime = 0 // voltar o video para o inicio
    }

    return (
        <div key={video.id} className="thumbnail-video-box">
            <img className="thumbnail-image" src={video.thumbnail} alt="thumbnail image" />
            <video 
                onMouseEnter={hadleMouseEnter}
                onMouseLeave={hadleMouseLeave}
                src={video.url} 
                type="video/mp4"
            ></video>
            <div className="chanel-infos">
                <div className="thumbnail-channel">
                    <img src={video.channel.thumbnail} alt="thumbnail channel image" />
                </div>
                <div className="thumbnail-text">
                    <h4>{video.title}</h4>
                    <p className="channel">{video.channel.nameChannel}</p>
                    <p className="views">{video.views}</p>
                </div>
            </div>
        </div>
    )
}