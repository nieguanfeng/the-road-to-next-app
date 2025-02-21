import { LucideMessageSquareWarning } from "lucide-react";
import React, { cloneElement } from "react";


type IconProps = React.ComponentProps<typeof LucideMessageSquareWarning>;
type ButtonProps = React.HTMLAttributes<HTMLDivElement>;

type PlaceholderProps = {
  label: string;
  icon?: React.ReactElement<IconProps>;
  button?: React.ReactElement<ButtonProps>;
}
const Placeholder = ({
  label, 
  icon=<LucideMessageSquareWarning />, 
  button=<div className="h-10"/>}:PlaceholderProps
) => {
  return (
    <div className="flex-1 self-center flex flex-col items-center justify-center gap-y-2">
      {cloneElement(icon,{
        className: "w-16 h-16"
      })}
      <h2 className="text-lg text-center font-bold">{label}</h2>
      {cloneElement(button,{
        className: "h-10"
      })}
    </div>

  );
}

export {Placeholder};