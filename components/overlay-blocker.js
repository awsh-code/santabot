"use client";

import React from "react";
import { Dialog, DialogOverlay, DialogPortal } from "./ui/dialog";
// import Loader from "./loader";
import * as DialogPrimitive from "@radix-ui/react-dialog";
import Loader from "./loader";

const OverlayBlockerContext = React.createContext(null);

export const OverlayBlockerProvider = ({ children }) => {
  const [isOpen, setIsOpen] = React.useState(false);
  const [container, setContainer] = React.useState(globalThis?.document?.body);

  const lockApp = React.useCallback(() => {
    setIsOpen(true);
  }, []);

  const unlockApp = React.useCallback(() => {
    setIsOpen(false);
  }, []);

  const contextValue = React.useMemo(
    () => ({ lockApp, unlockApp }),
    [lockApp, unlockApp]
  );

  return (
    <OverlayBlockerContext.Provider value={contextValue}>
      {children}
      {isOpen ? (
        <Dialog open>
          <DialogPortal />
          <DialogOverlay className="bg-black/10" />
          <DialogPrimitive.Content className="fixed left-[50%] top-[50%] flex justify-center z-[99999] translate-x-[-50%] translate-y-[-50%] gap-4 w-fit focus-visible:outline-none">
            {/* <Loader className="text-white w-8 h-8" /> */}
            <Loader />
          </DialogPrimitive.Content>
        </Dialog>
      ) : null}
    </OverlayBlockerContext.Provider>
  );
};

export function useOverlayBlocker() {
  const context = React.useContext(OverlayBlockerContext);

  if (!context)
    throw new Error(
      `useOverlayBlocker should be used within OverlayBlockerProvider`
    );

  return context;
}
