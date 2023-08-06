import React from "react";
interface ImageProps{
    src:string;
    alt:string;
    width:string;
    height:string;
}
export const Image = ({src,alt,width,height}:ImageProps) => {
  return (
    <img loading="lazy" src={src} alt={alt} width={width} height={height}/>
  )
}
