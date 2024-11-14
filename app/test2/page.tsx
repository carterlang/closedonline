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

const page = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  useEffect(() => {
    setIsLoaded(true);
  }, []);

  if (!isLoaded) {
    return (
      <div className="text-red-800 font-bold">
        <em>LOADING...</em>
      </div>
    );
  }

  return (
    <html lang="en">
      <head></head>
      <body>
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
      </body>
    </html>
  );
};

export default page;
