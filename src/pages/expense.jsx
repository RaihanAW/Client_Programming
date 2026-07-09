import React, { useContext, useEffect, useState } from "react";
import MainLayout from "../components/Layouts/MainLayout";
import CardExpense from "../components/Fragments/CardExpense";
import CircularProgress from "@mui/material/CircularProgress";
import { expenseService } from "../services/dataService";
import { AuthContext } from "../context/authContext";
import AppSnackbar from "../components/Elements/AppSnackbar";

function ExpensePage() {
  const [expenses, setExpenses] = useState(null);
  const { logout } = useContext(AuthContext);

  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const fetchExpenses = async () => {
    try {
      const data = await expenseService();
      setExpenses(Array.isArray(data) ? data : []);
    } catch (err) {
      setSnackbar({
        open: true,
        message: "Gagal mengambil data expenses",
        severity: "error",
      });
      if (err.status === 401) {
        logout();
      }
    }
  };

  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <MainLayout>
      <div className="text-2xl font-bold mb-4 dark:text-gray-100">Expenses Comparison</div>

      {expenses === null ? (
        <div className="flex flex-col justify-center items-center h-64 text-primary">
          <CircularProgress color="inherit" size={50} />
          Loading Data
        </div>
      ) : expenses.length === 0 ? (
        <div className="text-center text-gray-03 mt-10">Belum ada data pengeluaran</div>
      ) : (
        <div className="grid sm:grid-cols-3 gap-6">
          {expenses.map((group) => (
            <CardExpense key={group.category} data={group} />
          ))}
        </div>
      )}

      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </MainLayout>
  );
}

export default ExpensePage;
