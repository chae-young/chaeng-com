import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function LoginModal() {
    return (
        <Dialog defaultOpen={true}>
            <DialogContent>
                <DialogHeader className="text-3xl">
                    <DialogTitle>로그인</DialogTitle>
                </DialogHeader>                
                <div className="grid gap-4">
                    <div className="grid gap-2">
                        <Label htmlFor="email">Email</Label>
                        <Input
                        id="email"
                        type="email"
                        placeholder="m@example.com"
                        required
                    />
                    </div>
                    <div className="grid gap-2">
                        <Label htmlFor="password">Password</Label>
                        <Input id="password" type="password" required />
                    </div>
                    <Button type="submit" className="w-full">
                        Login
                    </Button>
                </div>
                <DialogFooter>
                    <Button>로그인</Button>
                </DialogFooter>                
            </DialogContent>
        </Dialog>      
    )
}