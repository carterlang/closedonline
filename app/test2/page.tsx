import React from "react";
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
  return (
    <>
      <head></head>
      <body className="bg-gray-300 ">
        <div className="p-12 mt-15 flex justify-between ">
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
    </>
  );
};

export default page;
