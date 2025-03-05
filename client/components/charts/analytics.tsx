"use client";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

export const description = "A multiple bar chart";

const chartData = [
  { month: "يناير", المالك: 186, موظف: 80, مستخدم: 90 },
  { month: "فبراير", المالك: 100, موظف: 200, مستخدم: 305 },
  { month: "مارس", المالك: 237, موظف: 120, مستخدم: 190 },
  { month: "أبريل", المالك: 73, موظف: 190, مستخدم: 50 },
  { month: "مايو", المالك: 209, موظف: 130, مستخدم: 90 },
  { month: "يونيو", المالك: 214, موظف: 140, مستخدم: 250 },
];

const chartConfig = {
  المالك: {
    label: "المالك",
    color: "#D32F2F",
  },
  موظف: {
    label: "موظف",
    color: "#1976D2",
  },
  مستخدم: {
    label: "مستخدم",
    color: "#BDBDBD",
  },
} satisfies ChartConfig;

export function ChartComp() {
  return (
    <Card className="w-3/5 max-md:w-4/5 font-expo-logo">
      <CardHeader>
        <CardTitle className="text-[var(--green)] font-expo-logo">
          المستخدمين المسجلين - شهريا
        </CardTitle>
        <CardDescription className="font-expo-light">
          بيانات الستة أشهر الأخيرة
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={chartData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent indicator="dashed" />}
            />
            <Bar dataKey="المالك" fill="var(--item)" radius={4} />
            <Bar dataKey="موظف" fill="black" radius={4} />
            <Bar dataKey="مستخدم" fill="var(--textpur)" radius={4} />
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none text-[var(--green)] font-expo-light">
          زيادة بنسبة 2.5% هذا الشهر <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground font-expo-light">
          عرض كل المستخدمين المسجلين
        </div>
      </CardFooter>
    </Card>
  );
}
