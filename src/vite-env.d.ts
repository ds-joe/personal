/// <reference types="vite/client" />
import { FC } from "react";


declare global {
  type RC<T extends object = object> = FC<T>; // React components
  type RP<T extends object = object> = FC<T>; // React page.
}
