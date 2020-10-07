export default function PostBody({ soundcloudId }) {
    if(soundcloudId) {
        return (
            <div style={{position: 'relative', width: '100%'}}>
                <iframe
                    width="100%"
                    height="100%"
                    scrolling="no"
                    frameborder="no"
                    allow="autoplay"
                    src={`https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/${soundcloudId}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
                ></iframe>
                <div style={{
                    'font-size': '10px',
                    color: '#cccccc',
                    'line-break': 'anywhere',
                    'word-break': 'normal',
                    overflow: 'hidden',
                    'white-space': 'nowrap',
                    'text-overflow': 'ellipsis',
                    'font-family': 'Interstate,Lucida Grande,Lucida Sans Unicode,Lucida Sans,Garuda,Verdana,Tahoma,sans-serif',
                    'font-weight': '100',
                }}>
                    <a href="https://soundcloud.com/sam-kearns" title="Sam Kearns" target="_blank" style={{color: '#cccccc', 'text-decoration': 'none'}}>Sam Kearns</a>
                    ·
                    <a href="https://soundcloud.com/sam-kearns/code-breaker" title="Code Breaker" target="_blank" style={{color: '#cccccc', 'text-decoration': 'none'}}>Code Breaker</a>
                </div>
            </div>
        )
    }
    return null;
}
