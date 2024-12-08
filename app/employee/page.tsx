"use client";

import { useEffect, useState } from "react";
import { Employee, columns } from "./columns";
import { DataTable } from "./data-table";
import LogoutButton from "./LogoutButton";
import { createClient } from "@/utils/supabase/client";


function Dashboard() {
  const [data, setData] = useState<Employee[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const supabase = createClient();
      const { data, error } = await supabase.from("employee").select();
      if (error) {
        console.error("Error fetching data:", error);
      } else {
        setData(data || []);
      }
      setLoading(false);
    }
    fetchData();
  }, []);

  if (loading) {
    return <p>Loading...</p>; // Show a loading state while data is being fetched
  }

  return (
    <div className="container mx-auto py-10">
      {/* Heading Section */}
      <div className="mb-6 text-center">
        <h1 className="text-3xl font-bold">Employee Management System</h1>
        <p className="text-gray-600">Manage your employees with ease and efficiency.</p>
      </div>
      {/* Logout and Add Employee Buttons */}
      <div className="flex justify-between items-center mb-4">
        <LogoutButton />
      </div>
      {/* Data Table */}
      <DataTable columns={columns} data={data} />
    </div>
  );
}

export default Dashboard;