export type SuseSolutionIcon =
  | "layers"
  | "network"
  | "server"
  | "shield"
  | "sliders"
  | "eye";

export type SuseSolution = {
  name: string;
  description: string;
  href: string;
  icon: SuseSolutionIcon;
};
