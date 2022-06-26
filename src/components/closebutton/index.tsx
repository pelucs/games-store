import { Popover } from "@headlessui/react";
import { X } from "phosphor-react";

interface CloseButtonProps{
  onHandleScroll: (newState: boolean) => void;
}

export default ({ onHandleScroll }: CloseButtonProps) => {
  return(
    <Popover.Button 
      onClick={() => onHandleScroll(false)}
      className="w-6 h-6 bg-[#363638] flex items-center justify-center rounded-sm
      focus:outline outline-offset-2 outline-2 outline-[#8a4af3]"
    >
      <X
        weight="bold"
        className="w-4 h-4 text-white" 
      />
    </Popover.Button>
  );
}