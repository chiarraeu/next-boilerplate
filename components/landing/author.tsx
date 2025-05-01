

import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import {
  HoverCard,
  HoverCardContent,
  HoverCardTrigger,
} from "@/components/ui/hover-card";

export function Author() {
  return (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button className="text-md text-primary" variant="link">@devnexus</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://avatars.githubusercontent.com/u/103839751?v=4" />
            <AvatarFallback>VC</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@devnexus</h4>
            <p className="text-sm">
              Node js fullstack software engineer & DevOps. My career has been heavily
              influenced by the Web and Open Source.
            </p>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  );
}
