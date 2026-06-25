import { 
  Tooltip, TooltipContent, TooltipTrigger
} from '@ui/tooltip';


export default function Tooltips ({ children, content, side }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        { children }
      </TooltipTrigger>
      <TooltipContent side={side}>
        { content }
      </TooltipContent>
    </Tooltip>
  );
}