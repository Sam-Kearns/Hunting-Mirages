export default function PostBody({ youtubeId }) {
    const url = `https://www.youtube.com/embed/${youtubeId}`;
    return (
        <div style={{position: 'relative', width: '100%', paddingBottom: '56.25%'}}>
            <iframe
                className="boxGlow"
                style={{position:'absolute'}}
                width="100%"
                height="100%"
                src={url}
                frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowfullscreen
            >
            </iframe>
        </div>
    )
}
