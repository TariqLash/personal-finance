"use client";
import { Plus } from "lucide-react"
import { useNewAccount } from "@/features/accounts/hooks/use-new-account"

import { Button } from "@/components/ui/button"
import { DataTable } from "@/components/data-table"
import { Card, CardHeader, CardTitle } from "@/components/ui/card"

import { Payment, columns } from "./columns"

const data: Payment[] = [
    {
        id: "728ed52f",
        amount: 100,
        status: "pending",
        email: "m@example.com",
      },
      {
        id: "728ed52f",
        amount: 45,
        status: "success",
        email: "a@example.com",
      },
      {
        id: "728ed52f",
        amount: 88,
        status: "success",
        email: "b@example.com",
      },
]

const AccountsPage = () => {

    const newAccount = useNewAccount();

    return (
    <div className="max-w-screen-2xl mx-auto w-full pb-10 -mt-24">
        <Card className="border-none drop-shadow-sm p-0">
            <CardHeader className="gap-y-2 lg:flex-row lg:items-center lg:justify-between p-3">
            <CardTitle className="text-xl line-clamp-1">
            Accounts Page
            </CardTitle>
            <Button onClick={newAccount.onOpen} size="sm">
                <Plus className="size-4 mr-2"/>
                Add New
            </Button>
            </CardHeader>
            <DataTable 
            columns={columns} 
            data={data}
            filterKey="email"
            onDelete={() => {}}
            disabled={false}
            />
        </Card>
    </div>
  )
}

export default AccountsPage