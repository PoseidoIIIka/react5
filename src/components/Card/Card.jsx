import s from './Card.module.css';


export function Card({image, name, price}) {

    return (
        <div className={s.tovar}>
            <img src={image} className={s.image}></img>
            <p className={s.name}>{name}</p>
            <div className={s.block}>
                <h3 className={s.price}>{price  } ₽</h3>
                <button className={s.btn}>Добавить в корзину</button>
            </div>
        </div>
    )
}