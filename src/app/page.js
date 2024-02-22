import Image from 'next/image'
import Slider from './Components/Slider'
import Promo from './Components/Promo'
import CartOne from './Components/CartOne'
import GamePass from './Components/GamePass'
import Follow from './Components/Follow'
import CartTwo from './Components/CartTwo'


export default function Home() {
  return (
  <div>
  <Slider/>
  <Promo/>
  <CartOne/>
  <GamePass/>
  <CartTwo/>
  <Follow/>
  </div>
  )
}
