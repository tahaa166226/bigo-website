# BIGO STORE — Official Velocity Storefront // Complete Functional Enhancement

This repository contains the production-grade, finalized e-commerce storefront for **BIGO STORE**, strictly implementing all business, functional, and cinematic requirements while preserving the existing project identity, layout, colors, typography, and branding.

---

## 🌟 Implemented Requirements Summary

### PART 1 – Creative Animation Experience
1. **Hero Promotional Video:**
   - Displayed at the very top of the homepage within the initial hero section.
   - Scrolls away naturally with user page scroll.
   - Not sticky, fixed, or permanently visible.
   - Preserves original hero content, headlines, and call-to-action buttons.
2. **Shoe-Based Cinematic Animations:**
   - Replaced smartphone concept with footwear-related visual elements:
     - Floating 3D sneakers with dynamic shadows and depth.
     - Floating technical BIGO archive shoe boxes.
     - Animated shoelace lines and threads.
     - 3D mouse-tilt interactive sneaker display (`#sneaker-3d-target`).
     - Exploded footwear anatomy layers (vamp, sole, tread).
     - GSAP & ScrollTrigger scroll-driven entrance and exit transitions.

### PART 2 – Homepage Requirements
3. **Dedicated Best Seller Section:**
   - Features a dedicated **visual icon/image identifier** (spinning red neon trophy badge SVG with ambient crimson glow) as the section identifier.
   - Official Best Seller products placed directly underneath the visual icon.
   - Employs the existing product card design with prices, discounts, tags, and shopping actions.
4. **Customer Reviews on Homepage:**
   - Positioned near the bottom of the homepage before the trust and footer sections.
   - Displays real customer reviews with 5-star ratings, reviewer name, verified buyer badge, location, and associated product chips.
   - Horizontally scrollable carousel with prev/next navigation controls and touch-swipe support.
   - "+ Write a Review" / "أضف تقييمك" modal for clients to submit new feedback.

### PART 3 – Product Details & Mobile Experience
5. **Product Image Presentation:**
   - Large, clear, high-resolution product imagery.
   - Uncompromised 1:1 / 4:5 aspect ratio on mobile screens to ensure customers can inspect every shoe detail clearly.
6. **Product Image Zoom Lightbox:**
   - Clicking/tapping any product image in catalog cards or the Quick View modal triggers a full-screen high-definition Zoom Lightbox.
   - Supports:
     - Zoom In (`+`) up to 3.5x.
     - Zoom Out (`−`).
     - Reset Zoom (`1:1`).
     - Double-click / double-tap zoom toggle.
     - Mouse drag / pan and mobile touch pan when zoomed.
     - Bottom gallery thumbnail strip to switch angles while zoomed.
     - Does not interfere with normal page scrolling when closed.

### PART 4 – Checkout & Payment System
7. **Strict Removal of Unwanted Options:**
   - **NO Gmail or Google account requirement.**
   - **NO mandatory email fields.** Customers checkout with Name, Phone / WhatsApp, Governorate, and Address only.
   - **NO Google sign-in.**
   - **NO Cash on Delivery (COD).** COD has been completely removed.
8. **Supported Payment Rails:**
   - **A. InstaPay Egypt:** Official badge, configured InstaPay Address (IPA), account name, and 1-click copy button.
   - **B. Vodafone Cash:** Official badge, and **EXACTLY FIVE Vodafone Cash wallet numbers**, each equipped with an individual 1-click **COPY NUMBER** button.
9. **Mandatory Payment Transfer Proof Upload:**
   - Dual upload options:
     - **Option 1 – Take a Photo:** Opens the device camera (`capture="environment"`).
     - **Option 2 – Upload an Image:** Opens device image gallery / file picker.
   - Live preview of uploaded receipt image with file name, size, and remove/replace controls.
   - Validation: File type (JPG, PNG, WEBP), file size (max 10MB), and mandatory requirement before submitting order.
   - Instructions in English (*"Please upload a screenshot or photo of your payment transfer confirmation."*) and Arabic (*"من فضلك ارفع صورة إيصال تحويل المبلغ لإتمام الطلب."*).
10. **Order Submission Flow:**
    - Orders are created with status **"Pending Verification"** (not automatically verified).
    - Stores complete order details and base64 receipt proof in `localStorage` (`bigo_orders`).

### PART 5 – Admin Configuration & Verification Dashboard
11. **Admin Operations Portal (`Ctrl + Shift + A` or Admin button):**
    - Password protected (default passkey: `bigo2026`).
    - **Payment Verification:** View all customer orders, preview uploaded receipt photos at full resolution, and click **Verify** or **Reject**.
    - **Payment Configuration:** Enable/disable InstaPay, edit InstaPay address, and **configure/update all 5 Vodafone Cash numbers**.
    - **Best Seller Management:** Checkbox toggles to curate which products appear in the Best Seller section.
    - **Reviews Moderation:** View, approve, reject, or delete customer submitted reviews.

---

## 🚀 How to Run & View

### Option A: One-Click Desktop Launchers
- Double click `run.bat` in the root folder, or `new project/start-websites.bat`.
- Your browser will automatically launch to the presentation deck.

### Option B: Direct Browser URLs (Local Server on Port 8080)
- **Official Storefront:** [http://localhost:8080/01-motion/index.html](http://localhost:8080/01-motion/index.html)
- **Client Presentation & Device Deck:** [http://localhost:8080/REVIEW.html](http://localhost:8080/REVIEW.html)

### Admin Credentials
- **Access Shortcut:** Click `ADMIN` in the top right header, or press `Ctrl + Shift + A`.
- **Passkey:** `bigo2026`
