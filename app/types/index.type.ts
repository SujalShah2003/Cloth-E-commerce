import { StaticImageData } from "next/image";

export interface INavigationLink {
  label: string;
  id: string;
}

export interface IProvidedServices {
  title: string;
  description: string;
  icon: string;
}

export interface IVariant {
  size: string;
  price: number;
}

export interface ICasualOutfit {
  id: string;
  title: string;
  description: string;
  price: number;
  trending: boolean;
  discount: boolean;
  originalPrice: number;
  discountedPrice: number;
  offerPercent: number;
  image: string | StaticImageData;
  variants: IVariant[];
}
