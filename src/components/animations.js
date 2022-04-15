import { keyframes } from "@chakra-ui/react";

export const revealUp = keyframes`
  from {
    // transform: translate3d(0, 70px, 0);
    opacity: 0;
  }
  to {
    // transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

export const revealRight = keyframes`
  from {
    // transform: translate3d(-70px, 0, 0);
    opacity: 0;
  }
  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;

export const revealLeft = keyframes`
  from {
    // transform: translate3d(70px, 0, 0);
    opacity: 0;
  }
  to {
    // transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;


export const revealUpAnim = `${revealUp} 1 0.4s linear`
export const revealRightAnim = `${revealRight} 1 0.4s linear`
export const revealLeftAnim = `${revealLeft} 1 0.4s linear`