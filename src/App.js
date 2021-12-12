import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';

function App() {
  return (
    <div className="App">
      <Searchbar />
      <ImageGallery>
        <ImageGalleryItem />
      </ImageGallery>
      <Button />
    </div>
  );
}

export default App;
