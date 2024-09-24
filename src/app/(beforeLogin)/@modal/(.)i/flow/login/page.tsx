import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";

export default function Page(){
    return (
    <Dialog defaultOpen={true}>
        <DialogHeader className="text-3xl">
            <DialogTitle>로그인</DialogTitle>
        </DialogHeader>
        <DialogContent>
            폼형식
        </DialogContent>
        <DialogFooter>
            <Button>로그인</Button>
        </DialogFooter>
    </Dialog>      
    )
}
