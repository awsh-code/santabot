import DataNotSaveModal from "@/components/data-not-save-modal";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

export const useConfirmLeave = ({ shouldWarn }) => {
  const router = useRouter();
  const [hasConfirmed, setHasConfirmed] = useState(false);
  const [navigationConfig, setNavigationConfig] = useState({
    nextRoute: null,
    isModalOpen: false,
  });

  // Use beforeunload to prevent closing the tab, refreshing the page or moving outside the Next app
  useEffect(() => {
    const handleWindowClose = (e) => {
      if (!shouldWarn) return;
      e.preventDefault();
      const event = e || window.event;
      return (event.returnValue = "Are you sure you want to leave?");
    };

    window.addEventListener("beforeunload", handleWindowClose);
    return () => {
      window.removeEventListener("beforeunload", handleWindowClose);
    };
  }, [shouldWarn]);

  // Use routeChangeStart to prevent navigation inside of the Next app
  useEffect(() => {
    const onRouteChangeStart = (route) => {
      if (!shouldWarn || hasConfirmed) return;
      else {
        setNavigationConfig({
          nextRoute: route,
          isModalOpen: true,
        });
        router.events.emit("routeChangeError");
        // eslint-disable-next-line @typescript-eslint/no-throw-literal
        throw "navigation aborted";
      }
    };
    router.events.on("routeChangeStart", onRouteChangeStart);
    const cleanUp = () =>
      router.events.off("routeChangeStart", onRouteChangeStart);

    if (hasConfirmed) {
      if (!navigationConfig.nextRoute) return;
      void router.push(navigationConfig.nextRoute);
      return cleanUp;
    }

    return cleanUp;
  }, [navigationConfig, hasConfirmed, router, shouldWarn]);

  const ConfirmLeaveModal = () => (
    <DataNotSaveModal
      isOpen={navigationConfig.isModalOpen}
      onConfirm={() => setHasConfirmed(true)}
      onCancel={() => {
        setNavigationConfig({
          nextRoute: null,
          isModalOpen: false,
        });
      }}
    />
  );

  return {
    ConfirmLeaveModal,
  };
};
