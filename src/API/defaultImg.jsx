import defaultImage from 'images/defaultImage.jpg';

const getImagePosterPath = (path)=> {
  return path ? `https://image.tmdb.org/t/p/w500/${path}` : defaultImage;
}

export default getImagePosterPath;

