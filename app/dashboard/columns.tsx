"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { ArrowUpDown } from "lucide-react"

// This type is used to define the shape of our data.
// You can use a Zod schema here if you want.
export type Employee = {
    id: bigint
    name: string
    email: string
    dept_id: number
    role_id: string
    designation: string
    doj: Date
    
}

export const columns: ColumnDef<Employee>[] = [
    {
        accessorKey: "employee_id",
        header: "Employee ID",
      },
      {
        accessorKey: "name",
        header: "Name",
      },
      {
        accessorKey: "email",
        header: "Email",
      },
      {
        accessorKey: "dept_id",
        header: "Department ID",
      },
      {
        accessorKey: "role_id",
        header: "Role ID",
      },
    
      {
        accessorKey: "designation",
        header: "Designation",
      },
      {
        accessorKey: "doj",
        header: "Date of Joining",
      },
      
]

export type Payment = {
  email: string
}

export const paymentColumns: ColumnDef<Payment>[] = [
    {
      accessorKey: "email",
      header: ({ column }) => {
        return (
          <Button
            variant="ghost"
            onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
          >
            Email
            <ArrowUpDown className="ml-2 h-4 w-4" />
          </Button>
        )
      },
    },
  ]
