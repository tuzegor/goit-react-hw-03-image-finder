import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import ImageGalleryItem from './components/ImageGalleryItem';
import Button from './components/Button';
import Modal from './components/Modal';
import Loader from './components/Loader';
import fetchPicturesApi from './services/apiService';

class App extends Component {
  state = {
    name: '',
    page: 1,
    pictures: null,
    status: 'idle',
    error: null,
    showModal: false,
    currentPicture: null,
  };

  formSubmit = name => {
    this.setState({ name, page: 1 });
  };

  openModal = (id, largeImageURL, tags) => {
    this.setState({
      showModal: true,
      currentPicture: { id, largeImageURL, tags },
    });
  };

  closeModal = () => {
    this.setState({
      showModal: false,
    });
  };

  loadMorePictures = () => {
    this.fetchPictures();
  };

  fetchPictures = () => {
    const { name, page } = this.state;

    this.setState({ status: 'pending' });

    fetchPicturesApi(name, page)
      .then(pictures => {
        if (pictures.total === 0) {
          this.setState({
            error: `We don't have picture: ${name}`,
            status: 'rejected',
          });
        } else {
          this.setState(prevState => ({
            pictures: pictures.hits,
            status: 'resolved',
            page: prevState.page + 1,
          }));
        }
      })
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.name !== this.state.name) {
      this.fetchPictures();
    }
  }

  render() {
    const { pictures, status, error, showModal, currentPicture } = this.state;

    return (
      <div className="App">
        <Searchbar onSubmit={this.formSubmit} />
        {status === 'pending' && <Loader />}
        {status === 'resolved' && (
          <>
            <ImageGallery>
              {pictures.map(({ id, tags, webformatURL, largeImageURL }) => (
                <ImageGalleryItem
                  key={id}
                  id={id}
                  tags={tags}
                  webformatURL={webformatURL}
                  largeImageURL={largeImageURL}
                  openModal={this.openModal}
                />
              ))}
            </ImageGallery>
            <Button loadMore={this.loadMorePictures} />
          </>
        )}
        {showModal && (
          <Modal picture={currentPicture} closeModal={this.closeModal} />
        )}
        {status === 'rejected' && <h1>{error}</h1>}
      </div>
    );
  }
}

export default App;
