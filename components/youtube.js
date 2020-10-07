export default function PostBody({ youtubeId }) {
    if(youtubeId) {
        return (
            <div style={{position: 'relative', width: '100%', paddingBottom: '56.25%'}}>
                <iframe
                    className=""
                    style={{position:'absolute'}}
                    width="100%"
                    height="100%"
                    src={`https://www.youtube.com/embed/${youtubeId}`}
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen="1"
                >
                </iframe>
            </div>
        )
    }
    return null;
}
