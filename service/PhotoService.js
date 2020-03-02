export default class PhotoService {
  _apiBase =
    'https://api.unsplash.com/photos/?client_id=cf49c08b444ff4cb9e4d126b7e9f7513ba1ee58de7906e4360afc1a33d1bf4c0';

  getPhotoGallery = async () => {
    const res = await fetch(`${this._apiBase}`);

    if (!res.ok) {
      throw new Error(
        `Could not fetch ${this._apiBase}, received ${res.status}`,
      );
    }
    return await res.json();
  };
}
