import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { ImageIcon } from "@radix-ui/react-icons";

export default function PostForm() {
    return (
        <form
        className="relative overflow-hidden border rounded-lg bg-background focus-within:ring-1 focus-within:ring-ring" x-chunk="dashboard-03-chunk-1"
      >
        <Label htmlFor="message" className="sr-only">
          Message
        </Label>
        <Textarea
          id="message"
          placeholder="Type your message here..."
          className="p-3 border-0 shadow-none resize-none min-h-12 focus-visible:ring-0"
        />
        <div className="flex items-center p-3 pt-0">
            <Button variant="ghost" size="icon">
                <ImageIcon className="size-4" />
                <span className="sr-only">Attach file</span>
            </Button>            
          <Button type="submit" size="sm" className="ml-auto gap-1.5">
            게시하기
          </Button>
        </div>
      </form>
    )
}