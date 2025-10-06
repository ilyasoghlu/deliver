import React from 'react'
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { Input } from '../ui/input';
import { Button } from '../ui/button';

function NavSearch() {
  return (
    <Button
      asChild
      type="button"
      className="w-8 h-8 rounded-full dark:bg-muted bg-white"
    >
      {/* <Input type="search"></Input> */}
      <PiMagnifyingGlassBold />
    </Button>
  );
}

export default NavSearch