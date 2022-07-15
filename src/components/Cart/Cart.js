import { Link, useHistory } from 'react-router-dom';
import downloadZip from '../../utils/download';
import CartGrid from '../CartGrid/CartGrid';
import CartItem from '../CartItem/CartItem';

import './cart.scss';

export default function Cart ({ cart, setCart, openModal, handleRemoveFromCart }) {
  const history = useHistory();

  const handleDownloadAll = async evt => {
    evt.preventDefault();
    if (!cart.length) return evt.target.blur();
    const downloadItems = cart.map((item) => ({
      url: item.urls.full,
      name: item.user.name,
    }));
    await downloadZip(downloadItems);
    setCart([]);
    history.push('/');
  };

  const handleDownloadSelected = evt => {
    evt.preventDefault();
    const selected = cart.filter(item => item.checked);
    if (!selected.length) return evt.target.blur();
    downloadZip(selected);
  }

  const handleRemoveAll = evt => {
    evt.preventDefault();
    setCart([]);
    evt.target.blur();
  }

  const handleRemoveSelected = evt => {
    evt.preventDefault();
    setCart(state => state.filter(item => !item.checked));
    evt.target.blur();
  }

  const handleCartItemCheck = photo => {
    setCart(state => state.map(item => (
      (item.id === photo.id)
      ? { ...item, checked: !item.checked }
      : item
    )));
  };

  return (
    <main className="page__main cart">
      <div className="container container--main-wrap">
        { cart.length === 0
          && <Link
              to="/"
              className="btn btn-primary cart__main-link">
                Go to shop
             </Link>
        }
        <CartGrid>
          { cart.map(photo => (
              <CartItem
                key={photo.id}
                photo={photo}
                handleCartItemCheck={handleCartItemCheck}
                handleRemoveFromCart={handleRemoveFromCart}
                openModal={openModal}
              />
            ))
          }
        </CartGrid>
        { cart.length > 0
          && <ul className="cart__controls">
              <li className="cart__controls-item">
                <button
                  className="cart__button cart__button--download-all btn btn-success"
                  onClick={handleDownloadAll}
                  type="button"
                >
                  Download all
                </button>
              </li>
              <li className="cart__controls-item">
                <button
                  className="cart__button cart__button--check btn btn-success"
                  onClick={handleDownloadSelected}
                  type="button"
                >
                  Download selected
                </button>
              </li>
              <li className="cart__controls-item">
                <button
                  className="cart__button cart__button--remove-all btn btn-danger"
                  onClick={handleRemoveAll}
                  type="button"
                >
                  Remove all
                </button>
              </li>
              <li className="cart__controls-item">
                <button
                  className="cart__button cart__button--check btn btn-danger"
                  onClick={handleRemoveSelected}
                  type="button"
                >
                  Remove selected
                </button>
              </li>
            </ul>
        }
      </div>
    </main>
  );
};
