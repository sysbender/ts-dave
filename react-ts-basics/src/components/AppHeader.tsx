import { ReactNode } from "react";
type AppHeaderProps = {
  image: { src: string; alt: string };
  children: ReactNode;
};

export default function AppHeader({ image, children }: AppHeaderProps) {
  return (
    <header>
      {/* <img src={image.src} alt={image.alt} /> */}
      {/* spread operator */}
      <img {...image} />

      {children}
    </header>
  );
}
