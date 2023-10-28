import {Key} from 'react'
import {Image} from 'sanity'

export interface WishListItem {
  _id: Key
  name: string
  price: number
  image: any
  link: string
}

export interface WishListItems {
    items: WishListItem[];
}
