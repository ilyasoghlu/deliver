'use client'
import React from 'react'
import {MoonIcon, SunIcon} from 'react-icons'
import { Button } from '../ui/button'
import {useTheme} from  'next-themes'
import { 
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger
} from '../ui/dropdown-menu'


function DarkMode() {
  const {setTheme} = useTheme()
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button 
          variant='outline'
          size='icon'
          >
            <SunIcon className='h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0'/>
          </Button>

      </DropdownMenuTrigger>
    </DropdownMenu>
  )
}

export default DarkMode
