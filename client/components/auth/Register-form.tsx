"use client";
import * as z from "zod";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { RegisterSchema } from "@/schemas";
import { CardWrapper } from "@/components/auth/Card-wrapper";
import {
  Form,
  FormField,
  FormItem,
  FormControl,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { FormError } from "@/components/form-error";
import { FormSuccess } from "@/components/form-success";
import { useRouter } from "next/navigation";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { useState } from "react";
import { ChevronDown } from "lucide-react";
import toast from "react-hot-toast";
import { useAuth } from "@/context/AuthContext";

export const RegisterForm = () => {
  const { user, register } = useAuth();
  const [role, setRole] = useState("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();
  const form = useForm<z.infer<typeof RegisterSchema>>({
    resolver: zodResolver(RegisterSchema),
    defaultValues: {
      email: "",
      password: "",
      name: "",
      role: "",
    },
  });

  const onSubmit = async (data: any) => {
    setLoading(true);
    data.role = role;

    try {
      await register(data.email, data.password, data.name, role);
      toast.success("Registered successfully!");
      console.log("user role is strictly: " , role);

      if (role === "موظف") {
        router.push("/employee/properties");
      } else if (role === "المالك") {
        router.push("/owner");
      } else {
        router.push("/user/properties");
      }
    } catch (error) {
      console.error("Error:", error);
      toast.error("Failed to register user");
    } finally {
      setLoading(false);
    }
  };

  return (
    <CardWrapper
      headerLabel="Create an account"
      backButtonLabel="بالفعل لديك حساب ؟"
      backButtonHref="/auth/login"
      socialShow
    >
      <Form {...form}>
        <form
          onSubmit={form.handleSubmit(onSubmit)}
          className="space-y-6"
          dir="rtl"
        >
          <div className="space-y-4 text-[var(--darkgreen)]">
            <FormField
              control={form.control}
              name="role"
              render={({ field }) => (
                <FormItem className="flex flex-col">
                  <FormLabel className="text-[var(--bg)]">ما دورك ؟</FormLabel>
                  <FormControl>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild dir="rtl">
                        <Button variant="outline">
                          {role ? (
                            role
                          ) : (
                            <>
                              <ChevronDown className="inline mr-2" /> اختر دورك
                            </>
                          )}
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent className="w-56 text-right">
                        <DropdownMenuLabel>اختر دورك</DropdownMenuLabel>
                        <DropdownMenuSeparator />
                        <DropdownMenuRadioGroup
                          dir="rtl"
                          value={role}
                          onValueChange={(value) => {
                            setRole(value);
                            field.onChange(value);
                          }}
                        >
                          <DropdownMenuRadioItem value="المالك">
                            المالك
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="موظف">
                            موظف
                          </DropdownMenuRadioItem>
                          <DropdownMenuRadioItem value="مستخدم">
                            مستخدم
                          </DropdownMenuRadioItem>
                        </DropdownMenuRadioGroup>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[var(--bg)]">ما اسمك؟</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="هشام محمد "
                      type="text"
                      className="placeholder:color-[var(--bgdark)] "
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[var(--bg)]">
                    البريد الإليكتروني
                  </FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="hisham@gmail.com"
                      type="email"
                      className="placeholder:color-[var(--bgdark)]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="password"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-[var(--bg)]">كلمة السر</FormLabel>
                  <FormControl>
                    <Input
                      {...field}
                      placeholder="*******"
                      type="password"
                      className="placeholder:color-[var(--bgdark)]"
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
          </div>
          <FormError />
          <FormSuccess />
          <Button
            size="lg"
            className="w-full bg-[var(--green)] hover:bg-[var(--green)] font-expo-light hover:transition-transform hover:scale-105 ease-out"
            type="submit"
            onClick={() => {
              setLoading(true);
              form.handleSubmit(onSubmit)();
            }}
            disabled={loading}
          >
            {loading ? (
              <div className="w-6 h-6 border-4 border-white border-t-transparent rounded-full animate-spin mx-auto"></div>
            ) : (
              "أنشئ حسابك الآن"
            )}
          </Button>
        </form>
      </Form>
    </CardWrapper>
  );
};
