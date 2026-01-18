"use client";
import React from "react";
import { FaPhoneAlt, FaEnvelope, FaMapMarkerAlt } from "react-icons/fa";

export default function ContactInfoSection() {
  return (
    <section className="contact_info_section">
      <div className="contact_info_container">

        {/* بطاقة الهاتف */}
        <div className="contact_card fade_in_up" style={{ animationDelay: "0.2s" }}>
          <FaPhoneAlt className="contact_icon" />
          <h3 className="contact_card_title">اتصل بنا</h3>
          <p className="contact_card_text">966112320242+</p>
        </div>

        {/* بطاقة البريد */}
        <div className="contact_card fade_in_up" style={{ animationDelay: "0.4s" }}>
          <FaEnvelope className="contact_icon" />
          <h3 className="contact_card_title">راسلنا</h3>
          <p className="contact_card_text">Hala@al-dhahry-group.com</p>
        </div>

        {/* بطاقة العنوان */}
        <div className="contact_card fade_in_up" style={{ animationDelay: "0.6s" }}>
          <FaMapMarkerAlt className="contact_icon" />
          <h3 className="contact_card_title">قم بزيارتنا</h3>
          <p className="contact_card_text">
            طريق النهضة، مجموعة شركات الظاهري، الربوة، الرياض 12821
          </p>
        </div>

      </div>
    </section>
  );
}
