import * as z from "zod";


export const LoginSchema = z.object({
  email: z.string().email({ message: "Email is required / Invalid email" }),

  password: z.string().min(1, { message: "Password is required" }),

  code: z.optional(z.string()),
});


export const RegisterSchema = z.object({
    name:z.string().min(3, { message: "min number of name is 3 characters" }),
    role:z.string(),
    email: z.string().min(1 , { message: "Email is required" }).email({ message: "Invalid email address" }),
    password: z.string().min(1, { message: "Password is required" }).min(6, { message: "password is at least 6 chars" })
  });
  export const PropertyCraeteSchema = z.object({
    title: z.string().min(1, { message: "أدخل عنوان رئيسي للإستمرار" }),
    description: z.string().min(1, { message: "أدخل الوصف للإستمرار" }),
    phone: z.string().min(11, { message: "أدخل رقم الهاتف للإستمرار" }),
    price: z.number().min(100, { message: "أدخل السعر للإستمرار" }),
    location: z.string().min(1, { message: "أدخل المكان للإستمرار" }),
    image: z.instanceof(File).nullable().or(z.string().min(1, { message: "أدخل صورة الغلاف للإستمرار" })), // Allow File or string
    images: z.array(z.instanceof(File)).optional().or(z.string().min(1, { message: "أدخل الوصف للإستمرار" })), // Allow an array of Files or string
    rooms: z.number().min(1, { message: "أدخل عدد الغرف للإستمرار" }),
    area: z.number().min(10, { message: "أدخل المساحة للإستمرار" }),
    bathrooms: z.number().min(1, { message: "أدخل عدد الحمامات للإستمرار" }),
    garages: z.number().min(0, { message: "أدخل عدد الأماكن للركن للإستمرار" }),
    type: z.string().min(1, { message: "أدخل نوع الوحدة للإستمرار" }),
  });
