import { z } from "zod";
import { FormValue } from "hono/types";
import { AccountForm } from "./account-form";
import { insertAccountSchema } from "@/db/schema";
import { useNewAccount } from "@/features/accounts/hooks/use-new-account";

import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"
  
const formSchema = insertAccountSchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;

  export const NewAccountSheet = () => {
    const {isOpen, onClose} = useNewAccount();

    const onSubmit = (values: FormValue) => {
      console.log({values});
    }

    return (
    <Sheet open={isOpen} onOpenChange={onClose}>
          <SheetContent>
              <SheetHeader>
                  <SheetTitle>
                      New Account
                  </SheetTitle>
                  <SheetDescription>
                      Create a new account to track your transactions.
                  </SheetDescription>
              </SheetHeader>
              <AccountForm onSubmit={onSubmit} disabled={false}/>
  </SheetContent>
</Sheet>

  )
}

