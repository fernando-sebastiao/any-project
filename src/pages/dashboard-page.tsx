import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  PieChart,
  FileText,
  Tags,
  DollarSign,
  TrendingUp,
  TrendingDown,
  Wallet,
} from "lucide-react";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  BarChart as BarChartComponent,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
  PieChart as PieChartComponent,
  Pie,
  Cell,
} from "recharts";

// Mock data (replace with actual data from your backend)
const recentTransactions = [
  { id: 1, description: "Groceries", amount: -50, category: "Food" },
  { id: 2, description: "Salary", amount: 3000, category: "Income" },
  { id: 3, description: "Restaurant", amount: -30, category: "Food" },
  { id: 4, description: "Gas", amount: -40, category: "Transportation" },
];

const expensesByCategory = [
  { name: "Food", value: 500 },
  { name: "Transportation", value: 300 },
  { name: "Entertainment", value: 200 },
  { name: "Utilities", value: 150 },
];

const monthlyTrend = [
  { name: "Jan", Receitas: 4000, Despesas: 3000 },
  { name: "Feb", Receitas: 3500, Despesas: 2800 },
  { name: "Mar", Receitas: 4200, Despesas: 3200 },
  { name: "Apr", Receitas: 3800, Despesas: 3100 },
];

const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export function DashboardPage() {
  const [activeSection, setActiveSection] = useState("overview");

  const renderContent = () => {
    switch (activeSection) {
      case "overview":
        return (
          <>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4 mb-4">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Balanço total
                  </CardTitle>
                  <Wallet className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$1,234</div>
                  <p className="text-xs text-muted-foreground">
                    +20.1% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Receitas
                  </CardTitle>
                  <TrendingUp className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$4,000</div>
                  <p className="text-xs text-muted-foreground">
                    +10.5% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">
                    Despesas
                  </CardTitle>
                  <TrendingDown className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$3,000</div>
                  <p className="text-xs text-muted-foreground">
                    s +7.2% from last month
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Savings</CardTitle>
                  <DollarSign className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">$1,000</div>
                  <p className="text-xs text-muted-foreground">
                    +14.3% from last month
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2">
              <Card>
                <CardHeader>
                  <CardTitle>Trend de Mensalidade</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <BarChartComponent data={monthlyTrend}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="name" />
                      <YAxis />
                      <Tooltip />
                      <Legend />
                      <Bar dataKey="Receitas" fill="#8884d8" />
                      <Bar dataKey="Despesas" fill="#82ca9d" />
                    </BarChartComponent>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
              <Card>
                <CardHeader>
                  <CardTitle>Despesas por Categória</CardTitle>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={300}>
                    <PieChartComponent>
                      <Pie
                        data={expensesByCategory}
                        cx="50%"
                        cy="50%"
                        labelLine={false}
                        outerRadius={80}
                        fill="#8884d8"
                        dataKey="value"
                      >
                        {expensesByCategory.map((entry, index) => (
                          <Cell
                            key={`cell-${index}`}
                            fill={COLORS[index % COLORS.length]}
                          />
                        ))}
                      </Pie>
                      <Tooltip />
                      <Legend />
                    </PieChartComponent>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </div>
          </>
        );
      case "expenses":
      case "income":
      case "reports":
      case "categories":
        return (
          <Card>
            <CardHeader>
              <CardTitle>
                {activeSection.charAt(0).toUpperCase() + activeSection.slice(1)}
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p>Content for {activeSection} goes here.</p>
            </CardContent>
          </Card>
        );
      default:
        return null;
    }
  };

  return (
    <div className="flex h-screen bg-background">
      {/* Sidebar */}
      <aside className="w-64 border-r">
        <ScrollArea className="h-full py-6 pl-6 pr-6">
          <h2 className="mb-4 text-lg font-semibold tracking-tight">
            Dashboard
          </h2>
          <nav className="space-y-2">
            <Button
              variant={activeSection === "overview" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection("overview")}
            >
              <PieChart className="mr-2 h-4 w-4" />
              Overview
            </Button>
            <Button
              variant={activeSection === "expenses" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection("expenses")}
            >
              <TrendingDown className="mr-2 h-4 w-4" />
              Despesas
            </Button>
            <Button
              variant={activeSection === "income" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection("income")}
            >
              <TrendingUp className="mr-2 h-4 w-4" />
              Receitas
            </Button>
            <Button
              variant={activeSection === "reports" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection("reports")}
            >
              <FileText className="mr-2 h-4 w-4" />
              Reports
            </Button>
            <Button
              variant={activeSection === "categories" ? "default" : "ghost"}
              className="w-full justify-start"
              onClick={() => setActiveSection("categories")}
            >
              <Tags className="mr-2 h-4 w-4" />
              Categorias
            </Button>
          </nav>
        </ScrollArea>
      </aside>

      {/* Main content */}
      <main className="flex-1 overflow-auto">
        <div className="flex items-center justify-between p-6">
          <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
          <div className="space-x-2">
            <Button>
              <TrendingDown className="mr-2 h-4 w-4" />
              Adicionar dispesas
            </Button>
            <Button>
              <TrendingUp className="mr-2 h-4 w-4" />
              Adicionar receitas
            </Button>
          </div>
        </div>
        <Separator />
        <div className="p-6">{renderContent()}</div>
      </main>
    </div>
  );
}
