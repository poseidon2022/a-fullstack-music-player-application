import { useState} from "react";
import {useSelector } from "react-redux";
import axios from "axios";
import { MusicList, Upload, Container, TrackContainer, Song, Track } from "../wrappers/admin";
import { toast } from "react-toastify";

export default function Admin() {
  const [formData, setFormData] = useState({
    audio_url: null,
    image_url: null,
    artist_name: "",
    song_name: "",
    date: "",
  });

  const [loading, setLoading] = useState(false);
  const { data, isLoading, error } = useSelector((state) => state.song);

  const fetchedSongs = data && data.songs ? data.songs : [];

  function handleChange(e) {
    const { id, files, value } = e.target;

    if (files) {
      setFormData((prev) => ({ ...prev, [id]: files[0] }));
    } else {
      setFormData((prev) => ({ ...prev, [id]: value }));
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);

    const musicData = new FormData();
    musicData.append("audio_url", formData.audio_url);
    musicData.append("song_name", formData.song_name);
    musicData.append("image_url", formData.image_url);
    musicData.append("artist_name", formData.artist_name);
    musicData.append("date", formData.date);
    musicData.append("user_id", localStorage.getItem("user_id"));

    try {
      const res = await axios.post("http://localhost:3000/api/song/upload", musicData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      if (res.data.success) {
        toast("Song uploaded successfully. Refresh your page");
        console.log(res.data.song);
      } else {
        toast.warn("Error while uploading song");
      }
    } catch (error) {
      console.error("Error uploading:", error);
    } finally {
      setLoading(false); // Set loading to false once the request completes
    }
  }

  return (
    <Container>
      <Upload onSubmit={handleSubmit}>
        <div className="title">Upload a Music</div>
        <div>
          <label htmlFor="music">Audio</label>
          <input type="file" accept="audio/*" id="audio_url" onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="image">Cover Image</label>
          <input type="file" accept="image/*" id="image_url" onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="artist">Artist Name</label>
          <input type="text" id="artist_name" value={formData.artist_name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="song_name">Song Name</label>
          <input type="text" id="song_name" value={formData.song_name} onChange={handleChange} required />
        </div>
        <div>
          <label htmlFor="date">Release Date</label>
          <input type="date" id="date" value={formData.date} onChange={handleChange} required />
        </div>

        <div>
          <input
            type="submit"
            className="submit"
            value={loading ? "Uploading..." : "Submit"}
            disabled={loading}
          />
          {loading && <span className="spinner"></span>}
        </div>
      </Upload>

      <MusicList>
        <Track>Your Track list</Track>
        <TrackContainer>
          {isLoading ? (
            <p>Loading songs...</p>
          ) : error ? (
            <p>Error loading songs</p>
          ) : fetchedSongs.length > 0 ? (
            fetchedSongs.map((song) => (
              <Song key={song._id}>
                <img src={song.image_url} className="song_image" alt="Song cover" />
                <div className="song_name_artist">
                  <div className="song_name">{song.song_name}</div>
                  <div className="artist">{song.artist_name}</div>
                </div>
                <div className="year_minute">
                  <div className="song_name">3:00</div>
                  <div className="artist">{song.date.split("-")[0]}</div>
                </div>
              </Song>
            ))
          ) : (
            <p>No Songs Available</p>
          )}
        </TrackContainer>
      </MusicList>
    </Container>
  );
}
