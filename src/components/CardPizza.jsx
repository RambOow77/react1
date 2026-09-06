const CardPizza = ({ name, price, ingredients, img }) => <div className="card h-100 shadow-sm">
  <img src={img} className="card-img-top pizza-img" alt={`Pizza ${name}`} />
  <div className="card-body text-center"><h2 className="card-title">{name}</h2><hr />
    <p className="card-text"><strong>🍕 Ingredientes:</strong></p>
    <p className="card-text">{ingredients.join(', ')}</p><hr />
    <h3 className="card-price">${price.toLocaleString('es-CL')}</h3>
    <div className="d-flex justify-content-center gap-2 mt-3"><button className="btn btn-outline-dark">Ver más 👀</button><button className="btn btn-dark">Añadir 🛒</button></div>
  </div></div>;
export default CardPizza;
