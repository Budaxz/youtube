export function VideoInfo() {
    return (
        <div className="content-info-box">
            <div className="content-info-video">
                <h2>Tá Pegando Fogo Bicho</h2>
                <div className="content-channel-video">
                    <div className="content-channel-info">
                        <img src="/images/channels_profile.jpg" alt="channel image" />
                        <div className="channel-info">
                            <h5>OlhaOFogo</h5>
                            <p>22 mil</p>
                        </div>
                        <button className="subscribe">Increver-se</button>
                        <button className="member">Seja Membro</button>
                        <div className="notification">
                            <span className="material-icons-outlined" id="notifications">notifications</span>
                        </div>
                    </div>
                    <div className="content-video-info">
                        <div className="likes">
                            <div className="qnt-likes">
                                <span className="material-icons-outlined">thumb_up</span>
                                <span className="amount">17 mil</span>
                            </div>
                            <div className="qnt-unlikes">
                                <span className="material-icons-outlined">thumb_down</span>
                                <span className="amount">1 mil</span>
                            </div>
                        </div>
                        <div className="share">
                            <span className="material-icons-outlined">reply</span>
                            <span>Compartilhar</span>
                        </div>
                        <div className="download">
                            <span className="material-icons-outlined">arrow_downward</span>
                            <span>Download</span>
                        </div>  
                        <div className="thanks">
                            <span className="material-icons-outlined">paid</span>
                            <span>Valeu</span>
                        </div>
                        <div className="more-actions">
                            <span className="material-icons-outlined">more_horiz</span>
                        </div>
                    </div>
                </div>
                <div className="content-description-video">
                    <span>10 mil visualizações</span>
                    <span> Há 2 semanas</span>
                    <div className="content-description">
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum dignissimos expedita cupiditate provident, obcaecati praesentium recusandae! Odio, facilis. Tenetur veritatis sunt vero explicabo rem atque doloremque deleniti, laudantium reprehenderit sed?</p>
                    </div>
                    <div className="content-chat"></div>
                </div>
            </div>
            <div className="content-video-comments">
                <div className="infos-comments">
                    <span>22.345 Comentários</span>
                    <div className="order">
                        <span className="material-icons-outlined">sort</span>
                        <span>Ordenar por</span>
                    </div>
                </div>
                <div className="content-comments">
                    <div className="comment">
                        <div className="user-image">
                            <img src="/images/channels_profile.jpg" alt="user image" />
                        </div>
                        <div className="user-comment">
                            <span id="userId">@userid</span>
                            <span>há 3 dias</span>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur modi esse, illum repudiandae sapiente harum doloribus pariatur maxime! Fuga iure excepturi explicabo asperiores non, quaerat sit ex dolore doloremque odio.</p>
                            <div className="comment-likes">
                                <span className="material-icons-outlined">thumb_up</span>
                                <span>12 mil</span>
                                <span className="material-icons-outlined">thumb_down</span> 
                                <span>1 mil</span>
                                <div className="respond">
                                    <span>Responder</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}