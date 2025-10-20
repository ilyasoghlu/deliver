'use client'
import { PiMagnifyingGlassBold } from "react-icons/pi";
import { Input } from "../ui/input";
import { useSearchParams, useRouter } from "next/navigation";
import {useDebouncedCallback} from 'use-debounce'
import { useState, useEffect } from "react";

import { Button } from '../ui/button';

function NavSearch() { 
  const searchParams = useSearchParams()
  return (
    // <Button
    //   asChild
    //   type="button"
    //   className="w-8 h-8 rounded-full dark:bg-muted bg-white"
    // >
      <Input />
      // <PiMagnifyingGlassBold />
    // </Button>
  );
}

export default NavSearch