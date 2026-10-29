# Implementation Plan: Click-to-Highlight Child Nodes & Dim Non-Selected Nodes

## 1. Problem Diagnosis
In `src/components/RadialConstellationGraph.tsx`:
1. Highlighting and dimming was previously only attached to temporary hover state (`hoveredIdx`).
2. There was no `selectedIdx` state. On any pointer release / click, `handlePointerUp` called `setHoveredIdx(null)`, immediately resetting any dimming and highlighting.
3. When a child node was clicked, it did not get highlighted, and the other nodes did not get dimmed.
4. Clicking background canvas did not provide a way to clear selection and restore the full constellation.

## 2. Solution & Architectural Changes in `RadialConstellationGraph.tsx`

### A. Persistent Selection State (`selectedIdx`)
- Introduce `selectedIdx: number | null = null`.
- Define `activeIdx = hoveredIdx !== null ? hoveredIdx : selectedIdx`.
- When `activeIdx !== null && activeIdx !== 0`:
  - **Active / Clicked Child Node (`idx === activeIdx`)**:
    - Remains at **100% opacity**.
    - Highlighted with an active accent ring (`ring-2 ring-[#0088ff] ring-offset-2 shadow-md`) around its shape.
    - Scale micro-enhancement (`scale-105`).
    - Subtitle is revealed with full opacity (`opacity-100 max-h-6`).
    - Elevated `zIndex: 40`.
    - Displays an intuitive, compact action pill `[ Open ↗ ]` allowing one-click opening of the project / section / widget modal.
  - **Other Child Nodes (`idx !== 0 && idx !== activeIdx`)**:
    - Dimmed to **`opacity: 0.1`** with smooth CSS transition (`transition-all duration-300`).
  - **Connecting Lines**:
    - The line connecting the center starburst to the active child node is **highlighted** (`stroke="#0088ff"`, `strokeWidth={2}`, `strokeOpacity={1}`).
    - All other connecting lines are **dimmed** (`strokeOpacity={0.04}`).

### B. Interactive Click & Navigation Behavior
1. **First Click on a Child Node**:
   - Selects and highlights that child node.
   - Dims all other child nodes and lines.
   - Plays the tactile click audio.
   - Reveals the `[ Open ↗ ]` action badge.
2. **Second Click / Click on `[ Open ↗ ]` / Double-Click**:
   - Triggers the corresponding modal action (`onOpenProject`, `onOpenSection`, or `onOpenWidget`).
3. **Click on Canvas Background or Center**:
   - Clears `selectedIdx` (`setSelectedIdx(null)`).
   - Smoothly restores all nodes and lines to full default brightness.

## 3. Verification Plan
- Click any child node (e.g. "Galaxy Knowledge", "Enterprise ERP", "Work", "Tool Kit").
- Verify that the clicked child node is highlighted with an accent ring, visible subtitle, and elevated z-index.
- Verify that all other satellite nodes dim to `0.1` opacity.
- Verify that the active connecting line highlights in `#0088ff` with width 2, while all other lines dim to `0.04`.
- Click empty canvas background and verify all nodes and lines return to full visibility.
- Click the `[ Open ↗ ]` button or click the selected node again and verify the case study / section modal opens smoothly.
