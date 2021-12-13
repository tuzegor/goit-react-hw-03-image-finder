import React, { Component } from 'react';
import styles from './Modal.module.css';
import PropTypes from 'prop-types';

class Modal extends Component {
  closePicture = e => {
    if (e.target === e.currentTarget) {
      this.props.closeModal();
    }
  };

  render() {
    const { picture } = this.props;

    return (
      <div className={styles.Overlay} onClick={e => this.closePicture(e)}>
        <div className={styles.Modal}>
          <img id={picture.id} src={picture.largeImageURL} alt={picture.tags} />
        </div>
      </div>
    );
  }
}

Modal.propTypes = {
  picture: PropTypes.object,
  closeModal: PropTypes.func,
};

export default Modal;
