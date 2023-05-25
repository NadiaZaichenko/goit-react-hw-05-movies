import { lazy } from 'react';
import { Route, Routes } from 'react-router-dom';
import Layout from './Layout/Layout';


const HomePage = lazy(() => import('pages/Home/Home'));
const MoviesPage = lazy(() => import('pages/Movie/Movies'));
const MovieDetailsPage = lazy(() => import('pages/MovieDetails/MovieDetails'));
const MovieCast = lazy(() => import('components/Cast/Cast') )
const MovieReviews = lazy(() => import('components/Reviews/Reviews'))
const PageNotFound = lazy(() => import('pages/NotFound/PageNotFound'))


const App = () => {
   return (
   <Routes> 
    <Route path='/' element={<Layout/>}>
      <Route index element={<HomePage />} />
      <Route path="search" element={<MoviesPage />} />
      <Route path="search/:query/:page" element={<MoviesPage />} />
      <Route path="movies/:movieId/" element={<MovieDetailsPage />}>
          <Route path="cast" element={<MovieCast />} />
          <Route path="reviews" element={<MovieReviews />} />
      </Route>
    </Route>
    <Route path ='*' element={<PageNotFound/>}/> 
  </Routes>
   );
};
 export default App;