import React from 'react';

class Spotify extends React.Component {
  render() {
    const playlistId = '1gmV6Y4rBhWhMduUBQPGMm';
    return (
      <iframe
        title="Spotify Embed: Recommendation Playlist "
        src={`https://open.spotify.com/embed/playlist/6jP2GaODx5vUoNOIM8txH4?utm_source=generator&theme=0`
    }
        width="100%"
        height="100%"
        style={{ minHeight: '360px' }}
        frameBorder="0"
        allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture"
        loading="lazy"
      />
    );
  }
}
export default Spotify;