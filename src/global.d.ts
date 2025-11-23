declare module "react-icons/*" {
  import * as React from "react";

  interface IconBaseProps extends React.SVGProps<SVGElement> {
    size?: string | number;
    color?: string;
    className?: string;
  }

  export type IconType = React.ComponentType<IconBaseProps>;
}