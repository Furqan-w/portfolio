# Implementation Plan: Remove Pakistan Location Badge from Center Node

## 1. Requirement
The user requested removing the "Pakistan" location from the interface (the location badge displayed on the main constellation center node).

---

## 2. Planned Changes

### `src/components/RadialConstellationGraph.tsx`
1. **Remove Location Pin & Label**:
   Remove lines 831-837 in the center node render block:
   ```tsx
   {/* Clean Location Badge */}
   <div className="mt-0.5 flex items-center gap-1">
     <LocationPinIcon className="w-3.5 h-3.5 text-[#888888]" />
     <span className="text-[13px] text-[#888888] font-normal tracking-tight">
       Pakistan
     </span>
   </div>
   ```
2. **Update Center Node Definition**:
   Set `subtitle: ""` in `PORTFOLIO_NODES` for the center node.

---

## 3. Verification
- Verify `npm run build` static export succeeds with zero errors.
- Confirm the center node on the canvas displays only the custom logo and "Furqan Waris" without the location pin or text.
