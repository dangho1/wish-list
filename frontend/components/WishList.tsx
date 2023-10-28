import {createClient} from 'next-sanity'
import {Key} from 'react'
import {WishListItem, WishListItems} from '../types/WishListItem'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import {Carousel} from 'react-responsive-carousel'

export const WishList = (items) => {
  const wishItems: WishListItems = items

  return (
    <Carousel>
      {wishItems.items.map((item) => {
        return (
          <a href={item.link} target="_blank" className="flex-col">
            <h2 className="text-3xl font-bold mb-10  text-teal-50">{item.name}</h2>
            <img className="" src={item.image.asset.url} />
            <div className="text-lg mt-20 p-5 bg-slate-300 rounded-md">Pris: {item.price} </div>
          </a>
        )
      })}
    </Carousel>
  )
}
