# راهنمای اجرای پروژه Authentication

## پروژه کامل شد! 🎉

این پروژه شامل یک سیستم احراز هویت کامل با Angular و Node.js است.

### ویژگی‌های طراحی:
- ✨ طراحی مدرن با افکت Glassmorphism
- 🎨 انیمیشن‌های جذاب و نرم
- 📱 کاملاً Responsive
- 🌊 انیمیشن حباب‌های شناور در پس‌زمینه
- 🎭 انتقال نرم بین فرم‌های Login و Register
- 🔒 اتصال به Backend برای Login و Register

## نحوه اجرا:

### Backend (Node.js):
```powershell
cd "e:\Programming\Full Stack\Auth Simple Project\Back-End"
node app.js
```

### Frontend (Angular):
```powershell
cd "e:\Programming\Full Stack\Auth Simple Project\Front-End\AuthSimpleProject"
npm start
```

سپس به آدرس زیر مراجعه کنید:
```
http://localhost:4200
```

## توضیحات:

### ساختار Backend:
- **POST** `http://localhost:3000/auth/register` - ثبت نام کاربر جدید
- **POST** `http://localhost:3000/auth/login` - ورود کاربر

### ساختار Frontend:
- کامپوننت Authentication در مسیر `/` (صفحه اول)
- فرم‌های Login و Register با امکان جابجایی
- نمایش پیام‌های خطا و موفقیت
- ذخیره Token در LocalStorage پس از Login موفق

## نکات مهم:

1. مطمئن شوید MongoDB در حال اجرا است
2. Backend باید روی پورت 3000 اجرا شود
3. Frontend روی پورت 4200 اجرا می‌شود
4. CORS فعال است و درخواست‌ها به Backend ارسال می‌شود

## تست کردن:

### ثبت نام:
1. روی دکمه "ثبت نام کنید" کلیک کنید
2. نام کامل، ایمیل و رمز عبور را وارد کنید
3. پس از ثبت نام موفق، به صفحه Login هدایت می‌شوید

### ورود:
1. ایمیل و رمز عبور خود را وارد کنید
2. پس از ورود موفق، Token ذخیره می‌شود

---

**نویسنده**: GitHub Copilot
**تاریخ**: اکتبر 2025
