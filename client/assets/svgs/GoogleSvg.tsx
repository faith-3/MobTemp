import * as React from "react";
import Svg, { Mask, Path, G, SvgProps } from "react-native-svg";
const SVGComponent = (props:SvgProps) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    {...props}
  >
    <Mask
      id="mask0_0_119"
      style={{
        maskType: "luminance",
      }}
      maskUnits="userSpaceOnUse"
      x={0}
      y={5}
      width={5}
      height={10}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M0 5.40118H4.43237V14.7389H0V5.40118Z"
        fill="white"
      />
    </Mask>
    <G mask="url(#mask0_0_119)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M4.43238 12.0862L3.73625 14.6852L1.19172 14.7389C0.431367 13.3286 0 11.7148 0 10C0 8.34185 0.403281 6.77798 1.11816 5.40118H1.11863L3.38395 5.81634L4.37637 8.0681C4.16871 8.67372 4.05547 9.32361 4.05547 10C4.05547 10.7341 4.18855 11.4374 4.43238 12.0862Z"
        fill="#FBBB00"
      />
    </G>
    <Mask
      id="mask1_0_119"
      style={{
        maskType: "luminance",
      }}
      maskUnits="userSpaceOnUse"
      x={10}
      y={8}
      width={10}
      height={10}
    >
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M10.22 8.13187H20.0001V17.7983H10.22V8.13187Z"
        fill="white"
      />
    </Mask>
    <G mask="url(#mask1_0_119)">
      <Path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M19.8254 8.13187C19.9402 8.73671 20.0001 9.36155 20.0001 9.99999C20.0001 10.7159 19.9249 11.4143 19.7814 12.0878C19.2947 14.3802 18.0227 16.3818 16.2606 17.7983L16.26 17.7978L13.4068 17.6523L13.0029 15.1314C14.1721 14.4457 15.0858 13.3725 15.5672 12.0878H10.22V8.13187H19.8254Z"
        fill="#518EF8"
      />
    </G>
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.2599 17.7979L16.2603 17.7983C14.5466 19.1759 12.3696 20 9.99993 20C6.19165 20 2.88063 17.8714 1.19165 14.7391L4.43231 12.0863C5.27688 14.34 7.45095 15.9445 9.99993 15.9445C11.0955 15.9445 12.122 15.6484 13.0027 15.1314L16.2599 17.7979Z"
      fill="#28B446"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M16.3829 2.30227L13.1434 4.95437C12.2319 4.38461 11.1543 4.05547 10 4.05547C7.39336 4.05547 5.17848 5.73348 4.37637 8.06809L1.11863 5.40117H1.11816C2.78242 2.19223 6.13512 0 10 0C12.4263 0 14.651 0.864258 16.3829 2.30227Z"
      fill="#F14336"
    />
  </Svg>
);
export default SVGComponent;
