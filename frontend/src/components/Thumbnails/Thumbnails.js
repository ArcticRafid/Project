import React from 'react'
import classes from './thumbnails.module.css'

export default function Thumbnails({foods}) {
  return <ul className={classes.list}>
        {
        foods.map(food => 
           <li key={food.id}>
            <img className={classes.image}
            src={`/foods/${food.image}`}
            alt={food.name} />
            <div className={classes.content}>
                <div className={classes.name}>
                    {food.name}
                </div>
                <div className={classes.footer}>
                    <div className={classes.description}>
                        {food.description}
                    </div>
                    <div className={classes.price}>
                        Tk.{food.price}
                    </div>
                    <div className={classes.add}>
                        <button className={classes.cartbut}>Add to Cart</button>
                    </div>
                </div>
            </div>                
           </li> 
        )
        }
    </ul>;
}
