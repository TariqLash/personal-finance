import { z } from "zod";
import { FormValue } from "hono/types";
import { CategoryForm } from "./category-form";
import { insertCategorySchema } from "@/db/schema";
import { useNewCategory } from "@/features/categories/hooks/use-new-category";
import { useCreateCategory } from "@/features/categories/api/use-create-category";


import {
    Sheet,
    SheetContent,
    SheetDescription,
    SheetHeader,
    SheetTitle,
  } from "@/components/ui/sheet"
  
const formSchema = insertCategorySchema.pick({
  name: true,
});

type FormValues = z.input<typeof formSchema>;

export const NewCategorySheet = () => {
    const {isOpen, onClose} = useNewCategory();

    const mutation = useCreateCategory();

    const onSubmit = (values: FormValue) => {
      mutation.mutate(values,{
        onSuccess: () => {
          onClose();
        },
      });
    };

    return (
    <Sheet open={isOpen} onOpenChange={onClose}>
          <SheetContent>
              <SheetHeader>
                  <SheetTitle>
                      New Category
                  </SheetTitle>
                  <SheetDescription>
                      Create a new category to organize your transactions.
                  </SheetDescription>
              </SheetHeader>
              <CategoryForm 
              onSubmit={onSubmit} 
              disabled={mutation.isPending}
              defaultValues={{
                name:'',
              }}
              />
  </SheetContent>
</Sheet>

  )
}

