"use client";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import React from "react";

const page = () => {
  return (
    <>
      <a href="/test2">
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
        <div>
          <video
            className=" flex fixed -z-1 w-screen"
            autoPlay
            loop
            disablePictureInPicture
          >
            <source src={"/assets/videobg.mp4"} className="" />
          </video>
        </div>
      </a>
    </>
  );
};

export default page;
