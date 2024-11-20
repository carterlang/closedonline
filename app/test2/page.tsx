"use client";
import React, { useEffect, useState } from "react";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import Trollface from "../../public/assets/Trollface.png";
import Trollface2 from "../../public/assets/trollface2.jpg";
import Trollface3 from "../../public/assets/trollface3.gif";
import Trollface4 from "../../public/assets/trollface4.gif";
import Trollface5 from "../../public/assets/trollface5.gif";

const page = () => {
  const [firstClick, setFirstClick] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const [isLoadedTwice, setIsLoadedTwice] = useState(false);
  const [isLoadedThrice, setIsLoadedThrice] = useState(false);
  const [isLoadedFinally, setIsLoadedFinally] = useState(false);
  const [isDead, setIsDead] = useState(false);
  const [isGlitch, setIsGlitch] = useState(false);
  const [counter, setCounter] = useState(0);
  useEffect(() => {
    setIsLoaded(true);
  }, []);
  function delay(ms) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  async function handleClick() {
    setCounter(counter + 1);
    if (counter == 2) {
      setFirstClick(true);
      await delay(750);
      setFirstClick(false);
      console.log(counter);
      return;
    } else if (counter == 4) {
      setIsLoadedTwice(true);
      await delay(250);
      setIsLoadedTwice(false);
      console.log(counter);
      return;
    } else if (counter == 6) {
      setIsLoadedThrice(true);
      await delay(250);
      setIsLoadedThrice(false);
      console.log(counter);
      return;
    } else if (counter == 9) {
      setIsLoadedFinally(true);
      await delay(3000);
      setIsLoadedFinally(false);
      console.log(counter);
      return;
    } else if (counter == 10) {
      setIsDead(true);
      await delay(1000);
      setIsDead(false);
      setIsGlitch(true);
      await delay(2500);
      setIsGlitch(false);
      setCounter(-50);
      return;
    }
  }

  if (!isLoaded) {
    return (
      <div className="text-lg font-[NovaBonaBold] flex justify-center mt-96">
        Loading...
      </div>
    );
  }
  if (firstClick == true) {
    return (
      <div className="flex justify-center mt-40">
        <img src={Trollface.src}></img>
      </div>
    );
  }
  if (isLoadedTwice == true) {
    return (
      <div className="flex justify-center mt-40" id="img">
        <img src={Trollface3.src}></img>
      </div>
    );
  }
  if (isLoadedThrice == true) {
    return (
      <div className="w-screen h-screen flex justify-center bg-black" id="img">
        <img src={Trollface2.src}></img>
      </div>
    );
  }
  if (isLoadedFinally == true) {
    return (
      <div className="bg-black flex h-screen w-screen justify-center" id="img">
        <img src={Trollface4.src}></img>
      </div>
    );
  }
  if (isDead == true) {
    return (
      <div className="flex justify-center w-screen h-screen bg-black">
        <p className="text-red-900 font-[NovaBonaBold] text-lg mt-96">
          goodbye.
        </p>
      </div>
    );
  }
  if (isGlitch == true) {
    return (
      <div className="flex justify-center" id="img">
        <img src={Trollface5.src}></img>
      </div>
    );
  }

  return (
    <>
      <div>
        <Menubar>
          <MenubarMenu>
            <MenubarTrigger>File</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>
                New Tab <MenubarShortcut>⌘T</MenubarShortcut>
              </MenubarItem>
              <MenubarItem>New Window</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Share</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Print</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Items</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Grenade</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>RPG</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Tank</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
          <MenubarMenu>
            <MenubarTrigger>Actions</MenubarTrigger>
            <MenubarContent>
              <MenubarItem>Attack</MenubarItem>
              <MenubarItem>Flank</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Defend</MenubarItem>
              <MenubarSeparator />
              <MenubarItem>Surrender</MenubarItem>
            </MenubarContent>
          </MenubarMenu>
        </Menubar>
      </div>
      <div className="mt-72">
        <span className="flex justify-center mt-3">
          <Label className="font-[NovaBonaBold] text-lg" htmlFor="email">
            enter your password
          </Label>
        </span>
        <form>
          <div className="p-5 mt-4 flex justify-center">
            <div className="flex w-full max-w-sm items-center space-x-2">
              <Input
                type="text"
                required
                placeholder="password"
                className="w-56"
              />
              <Button type="submit" onClick={handleClick}>
                enter
              </Button>
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default page;
