"use client";

import Image from "next/image";

export default function ParallaxAbout() {
  return (
    <section className="parallax_section rtl">
      {/* Floating Glow Shapes */}
      <div className="floating_shape shape1"></div>
      <div className="floating_shape shape2"></div>
      <div className="floating_shape shape3"></div>

      {/* Text Content */}
      <div className="text_box">
        <div className="sub">اعرف أكثر عنا</div>
        <h2>احصل على الاستشارات لتحقيق نمو أفضل للأعمال</h2>
        <p>
          مجموعة شركات الظاهري هى احدى الشركات الرائدة فى المملكة العربية السعودية ومنطقة الخليج،
          تأسست فى عام 1983 كفرع للمقاولات فى البداية، وطورت الشركة نشاطها إلى مجموعة متكاملة من عشرة فروع متنوعة الأنشطة في مختلف المجالات حتى الان.
        </p>
        <button className="cta_btn">اتصل بنا الآن</button>
      </div>

      {/* Image Box with Animated Border */}
      <div className="image_box">
        <Image 
          src="/image/businesshome.jpg"
          alt="مجموعة الظاهري"
          fill
          style={{ objectFit: "cover" }}
        />
        <svg>
          <rect x="2" y="2" width="calc(100% - 4px)" height="calc(100% - 4px)" rx="28" ry="28" />
        </svg>
      </div>
    </section>
  );
}
