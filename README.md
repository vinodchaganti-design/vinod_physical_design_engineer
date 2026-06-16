# Vinod Kumar Chaganti | ASIC Physical Design Engineer

Welcome to the repository of **Vinod Kumar Chaganti**, an ASIC Physical Design Engineer specializing in the complete **RTL-to-GDSII** implementation flow on advanced technology nodes (28nm). 

This repository contains the source code for my premium, responsive, and claymorphic portfolio website, demonstrating my technical competencies, project contributions, and core EDA tool proficiency.

---

## 🔗 Live Links
* **Live Portfolio URL**: [https://vinodchaganti-design.github.io/vinod_physical_design_engineer/](https://vinodchaganti-design.github.io/vinod_physical_design_engineer/)
* **LinkedIn Profile**: [linkedin.com/in/vinod-kumar-chaganti](https://linkedin.com/in/vinod-kumar-chaganti/)

---

## 🛠️ Technical Skill Matrix

| Category | Skills & Focus Areas |
| :--- | :--- |
| **Physical Design Flow** | RTL-to-GDSII, Netlist-to-GDSII, Floorplanning, Power Planning, Cell Placement, Clock Tree Synthesis (CTS), Global & Detail Routing, ECO Implementation, Design Sign-off |
| **EDA Tool Stack** | Cadence Genus, Synopsys Design Compiler (DC Shell), Synopsys IC Compiler II (ICC2) |
| **Static Timing Analysis (STA)** | Setup/Hold Timing Closure, WNS & TNS optimization, DRV fixing, Multi-corner/Multi-mode STA |
| **Physical Verification** | Design Rule Checking (DRC), Layout vs. Schematic (LVS), Electrical Rule Checking (ERC), Antenna Effect Rule Checking & Protection Diode placement |
| **Scripting & Automation** | Tool Command Language (TCL) scripting for flow automation, Linux/Unix shell environments |

---

## 🚀 Key Project Implementations (28nm Node)

### 1. Block 'RP-TOP' Implementation
* **Complexity**: ~70K Standard Cells & 6 Analog/Digital Macros
* **Design Stack**: Cadence Genus (Logic Synthesis), Synopsys ICC2 (Place & Route, CTS, Routing)
* **Target Frequency**: 454 MHz
* **Metal Stack**: 9-Layer configurations (M1–M9)
* **Contributions**:
  * Generated and verified custom Synopsys Design Constraints (SDC) for timing path definitions.
  * Created a multi-macro floorplan with M1–M9 multi-layer power grid mesh networks, satisfying electromigration (EM) and IR drop limits.
  * Closed setup and hold violations down to zero negative slack using timing-driven ECO buffer insertions and gate-sizing techniques.
  * Verified tape-out readiness using DRC, LVS, and antenna rule checking.

### 2. High-Density Block 'TILE' Implementation
* **Complexity**: 400K+ Standard Cells & 18 Macros
* **Design Stack**: Synopsys Design Compiler (Logic Synthesis), Synopsys ICC2 (Place & Route)
* **Target Frequency**: 588 MHz
* **Contributions**:
  * Designed hierarchical floorplanning and placement blockages to distribute cell density and eliminate routing congestion hotspots.
  * Configured custom SDC path groups and cell weights to prioritize critical path optimization.
  * Conducted Clock Tree Synthesis (CTS) with latency/skew budgets while shielding clock lines using non-default routing (NDR) rules to prevent crosstalk.
  * Fixed post-route DRC violations and antenna ratios using protection diode insertion and metal layer hops.

---

## 🎨 Portfolio Features & Design System

The portfolio is built from scratch using clean, semantic **HTML5**, modern **Vanilla CSS**, and lightweight **Javascript**:
* **Claymorphic Styling**: Soft 3D puffed elements, harmonized colors, double-inset shadows, and dynamic "squish" interaction feedback states on buttons.
* **Interactive Flow Visualizer**: A click-triggered panel highlighting detail-specific competencies for each phase of the physical design process.
* **Smart Dark Mode**: Context-aware theme toggle with a fading white spotlight torch/glow overlay that tracks your cursor exclusively in dark mode.
* **Responsive Layout**: Designed to adapt perfectly to mobile viewports, converting the navigation menu and details panels into touch-scrollable modules.

---

## 💻 Local Setup & Development

To run this portfolio locally on your machine:

1. Clone this repository:
   ```bash
   git clone https://github.com/vinodchaganti-design/vinod_physical_design_engineer.git
   ```
2. Navigate to the project directory:
   ```bash
   cd vinod_physical_design_engineer
   ```
3. Open `index.html` directly in your browser, or start a local static server:
   ```bash
   # Using Python
   python -m http.server 8080
   # Using Node (npx)
   npx serve .
   ```

---

## ✉️ Contact & Inquiries
* **Email**: [vinodkumarchowdary016@gmail.com](mailto:vinodkumarchowdary016@gmail.com)
* **Phone**: +91 6302779250
* **LinkedIn**: [linkedin.com/in/vinod-kumar-chaganti](https://linkedin.com/in/vinod-kumar-chaganti/)
