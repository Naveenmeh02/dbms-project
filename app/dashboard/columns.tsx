"use client"

import { Button } from "@/components/ui/button"
import { ColumnDef } from "@tanstack/react-table"
import { MoreHorizontal, ArrowUpDown  } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
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
        header: ({ column }) => {
          return (
            <Button
              variant="ghost"
              onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
            >
              
              <ArrowUpDown className="ml-2 h-4 w-4" />
            </Button>
          )
        },
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
      {
        id: "actions",
        cell: ({ row }) => {
          const User = row.original
          return (
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" className="h-8 w-8 p-0">
                  <span className="sr-only">Open menu</span>
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="end">
                <DropdownMenuLabel>Actions</DropdownMenuLabel>
                <DropdownMenuItem onClick={() => handleCopy(User.id.toString())}>
            Copy User ID
          </DropdownMenuItem>
                <DropdownMenuSeparator />
                <DropdownMenuItem>View customer</DropdownMenuItem>
                <DropdownMenuItem>View payment details</DropdownMenuItem>
              </DropdownMenuContent>
            </DropdownMenu>
          )
        },
    },
];

function handleCopy(userId: string) {
  navigator.clipboard.writeText(userId);
  console.log("User ID copied:", userId);
}
