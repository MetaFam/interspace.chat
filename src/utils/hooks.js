import { useEffect, useState } from "react";
import { useToast } from "@chakra-ui/react";


export const useOnScreen = (ref) => {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) =>
      setIntersecting(entry.isIntersecting)
    );
    if (ref.current) {
      observer.observe(ref.current);
    }
    return () => {
      observer.disconnect();
    };
  }, [ref]);

  return isIntersecting;
};

// TODO: I know this is bad and needs re-factoring.
export const useDisabledGeneralNotify = (type) => {
  const notice = useToast({
    title: "Anon, I can't do that. 🥲",
      description: "We are in alpha rn & some features are disabled while we plug stuff in. Updates will be coming in pretty fast. 🚀 Stay stronk octo.",
    status: "info",
    duration: 8000,
    isClosable: true,
  });
  return notice;
};
export const useDisabledMobileNotify = (type) => {
  const notice = useToast({
    title: "Oh noes! Forgive us, Anon. 🥲",
    description: "We are in alpha rn & some features are disabled on mobile devices while we plug stuff in. You should be able to do it on the desktop version though. 👀 See you there.",
    status: "info",
    duration: 8000,
    isClosable: true,
  });
  return notice;
};
