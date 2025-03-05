import React, { useEffect, useState } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import GppGoodIcon from "@mui/icons-material/GppGood";
import StarIcon from "@mui/icons-material/Star";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PieChartIcon from "@mui/icons-material/PieChart";
import CurrencyExchangeIcon from "@mui/icons-material/CurrencyExchange";

function Advantage() {
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="bg-[#F5F5F5] h-full flex flex-col justify-center items-center py-10 px-6 md:px-16 lg:px-28 w-full gap-4">
      <div
        dir="rtl"
        className="flex flex-col justify-start items-start w-full basis-1/3"
      >
        <span>
          <p className="bg-[#F8F9FE] py-1 px-2 text-[var(--green)] text-[18px]">
            ميزاتنا
          </p>
        </span>
        <div>
          <h1 className="text-[48px] text-[#054457]">تمنحك راحة البال</h1>
        </div>
      </div>
      <div className="flex flex-col gap-4 w-full" dir="rtl">
        <div className="flex max-md:flex-col gap-4 w-full justify-center items-center">
          <div className="bg-red basis-1/3 p-4 flex flex-col gap-2">
            <FavoriteIcon
              sx={{ fontSize: "50px" }}
              className="text-[var(--darkgreen)]"
            />
            <h1 className="font-expo-logo text-[var(--green)]">راحة</h1>
            <p className="font-expo-light text-[var(--darkgreen)]">
              استمتع بتجهيزات مريحة مصممة لتوفير الراحة لكل مالك منزل، على بُعد
              خطوات من منزلك
            </p>
          </div>
          <div className="bg-red basis-1/3 p-4 flex flex-col gap-2">
            <GppGoodIcon
              sx={{ fontSize: "50px" }}
              className="font-expo-bold text-[var(--darkgreen)]"
            />
            <h1 className="font-expo-logo text-[var(--green)]">أمان إضافي</h1>
            <p className="font-expo-light text-[var(--darkgreen)]">
              يمكنك التواصل مع العملاء المحتملين عبر الإنترنت. نطلب منك أيضًا
              التسجيل للتحقق من هويتك.
            </p>
          </div>
          <div className="bg-red basis-1/3 p-4 flex flex-col gap-2">
            <StarIcon
              sx={{ fontSize: "50px" }}
              className="font-expo-bold text-[var(--darkgreen)]"
            />
            <h1 className="font-expo-logo text-[var(--green)]">رفاهية</h1>
            <p className="font-expo-light text-[var(--darkgreen)]">
              نعمل على تقديم أفضل مجموعة من الخدمات المهنية لمساعدتك في الحصول
              على جميع مزايا الممتلكات.
            </p>
          </div>
        </div>

        <div className="flex max-md:flex-col gap-4 w-full justify-center items-center">
          <div className="bg-red basis-1/3 p-4 flex flex-col gap-2">
            <CurrencyExchangeIcon
              sx={{ fontSize: "50px" }}
              className="font-expo-bold text-[var(--darkgreen)]"
            />
            <h1 className="font-expo-logo text-[var(--green)]">أفضل سعر</h1>
            <p className="font-expo-light text-[var(--darkgreen)]">
              تأكد من أنك تحصل على أفضل الأسعار. اتصل بنا للحصول على أرقامنا
              لتلقي عرض تأجير مجاني.
            </p>
          </div>
          <div className="bg-red basis-1/3 p-4 flex flex-col gap-2">
            <LocationOnIcon
              sx={{ fontSize: "50px" }}
              className="font-expo-bold text-[var(--darkgreen)]"
            />
            <h1 className="font-expo-logo text-[var(--green)]">
              موقع استراتيجي
            </h1>
            <p className="font-expo-light text-[var(--darkgreen)]">
              موقعك في وسط المدينة بالقرب من مراكز التسوق. نحن قريبون أيضًا من
              مراكز التعليم الدولية ومراكز بدء التشغيل.
            </p>
          </div>
          <div className="bg-red basis-1/3 p-4 flex flex-col gap-2">
            <PieChartIcon
              sx={{ fontSize: "50px" }}
              className="font-expo-bold text-[var(--darkgreen)]"
            />
            <h1 className="font-expo-logo text-[var(--green)]">فعال</h1>
            <p className="font-expo-light text-[var(--darkgreen)]">
              قم بزيارة متعددة الممتلكات في يوم واحد دون الحاجة للاتصال بهم
              للعثور على أفضل العقارات المتاحة.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advantage;
