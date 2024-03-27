import React from 'react'
import catPlay from '../assets/img/catPlay.png'
import { HiHome, HiMagnifyingGlass, HiStar, HiPlayCircle, HiTv} from "react-icons/hi2";
import { BiSolidHomeHeart } from "react-icons/bi";
import { HiPlus, HiDotsVertical } from "react-icons/hi";
import HeaderItem from './HeaderItem';

function Header() {
    const menu = [
      {
        name: 'HOME',
        icon: BiSolidHomeHeart
      },
      {
        name: 'SEARCH',
        icon: HiMagnifyingGlass
      },
      {
        name: 'WATCH LIST',
        icon: HiPlus
      },
      {
        name: 'ORIGINALS',
        icon: HiStar
      },
      {
        name: 'MOVIES',
        icon: HiPlayCircle
      },
      {
        name: 'SERIES',
        icon: HiTv
      },
    ]
  return (
    <div className='flex items-center'>
        <div className='flex gap-8'>
          <img src={catPlay} className='w-[90px] md:w-[110px] object-cover'/>
          <div className='hidden md:flex gap-8'>
            {menu.map((item)=>(
              <HeaderItem name={item.name} Icon={item.icon}/>
            ))}
          </div>
          <div className='flex md:hidden gap-8'>
            {menu.map((item, index)=> index<3&&(
              <HeaderItem name={item.name} Icon={item.icon}/>
            ))}
          </div>
          <div className='md:hidden'>
            {menu.map((item)=> (
              <HeaderItem name={''} Icon={HiDotsVertical}/>
            ))}
          </div>
        </div>
        {/* <img src="https://www.svgrepo.com/show/382097/female-avatar-girl-face-woman-user-9.svg"
        className='w-[30px] rounded-full'/> */}
    </div>
  )
}

export default Header
