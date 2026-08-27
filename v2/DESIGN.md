---
name: O Registro — Rodrigo Arvelos v2
description: Sismógrafo de tambor defumado — dois fundos inteiros, fio de 1px, vermelhão só como tinta de calibração.
colors:
  soot: "#0c0c0d"
  soot-raised: "#15161a"
  soot-deep: "#08080a"
  paper: "#e7e1d4"
  paper-deep: "#d6cebb"
  stylus: "#f0ece2"
  ink: "#14151a"
  vermilion: "#cf3a1e"
  vermilion-deep: "#b8301a"
  rule: "#33363c"
  rule-soft: "#212429"
  rule-paper: "#b9b09c"
  label: "#8b8f96"
  label-paper: "#5f594d"
typography:
  display:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(40px, 7.4vw, 92px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
    fontVariation: "font-stretch: 82%"
  headline:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "clamp(26px, 4.6vw, 60px)"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
    fontVariation: "font-stretch: 82%"
  title:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "21px"
    fontWeight: 700
    lineHeight: 1.02
    letterSpacing: "-0.035em"
    fontVariation: "font-stretch: 82%"
  stamp:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "27px"
    fontWeight: 700
    lineHeight: 1
    letterSpacing: "-0.02em"
    fontVariation: "font-stretch: 82%"
  lede:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "17.5px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
  body:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "16.5px"
    fontWeight: 400
    lineHeight: 1.65
    letterSpacing: "normal"
    fontFeature: "tabular-nums"
  fine:
    fontFamily: "Archivo, -apple-system, BlinkMacSystemFont, Segoe UI, sans-serif"
    fontSize: "13.5px"
    fontWeight: 400
    lineHeight: 1.7
    letterSpacing: "normal"
  label:
    fontFamily: "Azeret Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "11.5px"
    fontWeight: 500
    lineHeight: 1.65
    letterSpacing: "0.16em"
    fontFeature: "tabular-nums; text-transform: uppercase"
  control:
    fontFamily: "Azeret Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "12.5px"
    fontWeight: 600
    letterSpacing: "0.13em"
    fontFeature: "text-transform: uppercase"
  annotation:
    fontFamily: "Azeret Mono, ui-monospace, SFMono-Regular, Menlo, monospace"
    fontSize: "12.5px"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.09em"
    fontFeature: "tabular-nums"
rounded:
  none: "0"
spacing:
  rail: "13px"
  gap: "14px"
  row: "26px"
  inline: "32px"
  inline-sm: "20px"
  station-open: "78px"
  station-close: "92px"
  annot-band: "46px"
components:
  button-mark:
    backgroundColor: "{colors.vermilion-deep}"
    textColor: "{colors.stylus}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "16px 26px"
  button-mark-hover:
    backgroundColor: "#9e2915"
    textColor: "{colors.stylus}"
  button-rule:
    backgroundColor: "transparent"
    textColor: "{colors.stylus}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "16px 26px"
  button-rule-hover:
    textColor: "{colors.stylus}"
  button-rule-on-paper:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "16px 26px"
  button-submit:
    backgroundColor: "{colors.vermilion-deep}"
    textColor: "{colors.stylus}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "19px 26px"
    width: "100%"
  input-line:
    backgroundColor: "transparent"
    textColor: "{colors.ink}"
    typography: "{typography.lede}"
    rounded: "{rounded.none}"
    padding: "11px 2px"
    width: "100%"
  field-label:
    textColor: "{colors.label-paper}"
    typography: "{typography.label}"
  nav-link:
    backgroundColor: "transparent"
    textColor: "{colors.label}"
    typography: "{typography.control}"
    rounded: "{rounded.none}"
    padding: "0 0 2px"
  nav-link-hover:
    textColor: "{colors.stylus}"
  trace-annotation:
    backgroundColor: "transparent"
    textColor: "{colors.stylus}"
    typography: "{typography.annotation}"
    rounded: "{rounded.none}"
    height: "{spacing.annot-band}"
---

# Design System: O Registro — Rodrigo Arvelos v2

<!-- Scope: this file documents ONLY the world shipped in `v2/`. The project root holds an
     unrelated earlier version (navy + gold serif); its CSS is not authority here. -->

## Overview

**Creative North Star: "O Registro" (The Smoked-Drum Seismograph)**

The site is an instrument that has already been running. Soot (#0c0c0d) is the smoked drum; bone paper (#e7e1d4) is the unsmoked strip; the stylus scratches in bone (#f0ece2) and the only ink on either surface is vermilion. The page reads as a continuous chart record — a calibration ruler opens every station, a fixed rail at the left edge marks where "now" is in the record, and the hero's full-bleed trace carries three real dated market shocks. The argument is made by the record before any claim is written in prose.

Density is high and flat. There is no card, no radius, no glass, no gradient, no shadow anywhere in the build: a 1px hairline is the only frame the system owns, and every division on the page — between readings, between method steps, above the footer — is that hairline. Depth is produced by swapping the entire ground, not by lifting a box off it. Type does the rest of the work: Archivo at 82% width, weight 700, tracked to -0.035em, scaling to 92px, against Azeret Mono held at 11.5–12.5px for measurement and control text. Where a section needs a dominant element, it gets scale — Station 01's lead reading is simply set larger than its siblings, with no marginal label, no index, no container.

The world explicitly refuses the incumbent it replaces: no navy-and-gold hero, no centered promise, no tinted surfaces, no decorative iconography. Where a contrast or hierarchy problem appears, it is paid for with size, weight, ground, or the existing neutral labels — never with a new hue.

**Key Characteristics:**
- Two full grounds (soot and bone paper) that alternate by station, not a ground plus an accent panel
- Vermilion as the single chromatic event, used as calibration ink
- 1px hairline as the only frame; zero radius, zero shadow, zero gradient
- Archivo condensed monumental for everything read as language; Azeret Mono for measure, date, index and control
- Grain delivered as material via two SVG turbulence tokens, tuned per ground
- One motion cadence, one authored moment: the stylus sweep across the trace
- Hierarchy carried by type scale, never by a marginal editorial label

**The ceiling this build did not reach.** Three things the world's own premise implies and the shipped code does not do: (a) the record is inert below the hero — the drum draws once and never registers the reader again, with the fixed rail alone carrying "now"; (b) the paper strips have no registered edge — no sprocket margin, no torn or punched boundary where paper meets soot, only a flat color change; (c) the drum's value range is uniform top to bottom, with no exposure falloff across a surface whose premise is smoke on a rotating cylinder. These are recorded as the honest ceiling, not as prohibitions: future work may close any of them within the rules below.

**Provenance.** `FORM: O Registro, candidato 6; seed 1813e208.` The seed key is self-attested — the roll genuinely ran, but `concept-seed.mjs` persists nothing on this platform, so no artifact backs the key.

## Colors

A two-ground achromatic system — soot and bone paper, both complete backgrounds — with a single warm-red calibration ink and a graphite ladder of rules and labels tuned per ground.

### Primary
- **Calibration Vermilion** (`{colors.vermilion}`): the only chromatic event in the world. On soot it appears in the headline's cut word, the step indices, the trace's annotation ticks, the ruler's stamped square, the position rail's marker, the focus ring, selection and caret, and as the hover border on the primary button. It is ink, not decoration.
- **Deep Vermilion** (`{colors.vermilion-deep}`): the same ink at working strength on the paper ground and behind button surfaces. Carries the primary button ground, the field focus underline, the error text, the checkbox mark, the plate stamps, and the amplified phrase in the lead reading.

### Neutral
- **Soot** (`{colors.soot}`): the smoked drum. Full page ground, header ground, and the ground of stations 00, 02, 04.
- **Deep Soot** (`{colors.soot-deep}`): the position rail, the scrollbar track, and the methodology footer — the parts of the instrument beneath the drum.
- **Raised Soot** (`{colors.soot-raised}`): reserved neighbor tone for soot surfaces that must separate without a rule.
- **Bone Paper** (`{colors.paper}`): the unsmoked strip. Full ground of stations 01 and 03 and of the entire lead-capture page.
- **Deep Paper** (`{colors.paper-deep}`): the paper page's scrollbar track.
- **Stylus** (`{colors.stylus}`): the scratch — all body and display text on soot, the trace line, the annotation dates, and button text on vermilion.
- **Ink** (`{colors.ink}`): all display and body text on paper.
- **Rule Graphite** (`{colors.rule}`) / **Soft Rule** (`{colors.rule-soft}`) / **Paper Rule** (`{colors.rule-paper}`): the 1px hairlines. Graphite and soft on soot, paper rule on bone.
- **Label Grey** (`{colors.label}`) / **Label Umber** (`{colors.label-paper}`): secondary prose, gauge text and annotation captions, per ground.

### Named Rules

**The Two-Grounds Rule.** Soot and bone paper are both whole grounds that own entire page regions. A station is `--soot` or `--paper` end to end; there is no third surface, no tinted panel, and no ground appearing as an inset block inside another ground.

**The One Ink Rule.** Vermilion is the only chroma on either ground. If something needs to be distinguished, distinguish it with scale, weight, ground swap, or a hairline. Adding a second hue breaks the instrument.

**The Contrast-Is-Paid-In-Size Rule.** `{colors.vermilion}` sits at roughly 4.0:1 on soot and is therefore restricted to large display text (≥27px), rules and marks. Small text and button grounds use `{colors.vermilion-deep}`, and on paper `{colors.vermilion-deep}` carries all vermilion text at any size. The primary button's hover proves the rule: raising its ground to `{colors.vermilion}` dropped its 12.5px control label to 3.97:1 exactly while it was being looked at, so the hover ground *darkens* (`#9e2915`) and the hover signal moved to the border, which is a rule and can carry full vermilion. `#9e2915` is a hover-state ground for that one component, not a palette entry — do not reach for it elsewhere. A ratio problem is paid for with size, weight, ground, or the existing `{colors.stylus}` / `{colors.label}`, never with a new color and never by shipping the thin value.

**The Grain-Per-Ground Rule.** Grain is a material, not a texture overlay: soot uses the stronger turbulence token blended `overlay`, paper uses the weaker 0.38-opacity token blended `multiply`, because a light ground amplifies multiply. Never reuse one token on the other ground.

## Typography

**Display Font:** Archivo (variable, `wdth 62..125`, `wght 400..800`), with system sans fallback
**Body Font:** Archivo — the same family, at 400
**Label/Mono Font:** Azeret Mono (`wght 400..700`), with `ui-monospace` fallback

**Character:** A condensed grotesque cut to 82% width and negative-tracked reads as stamped plate lettering; against it a wide-tracked uppercase monospace reads as the instrument's own printed scale. One is the statement, the other is the measurement.

### The ramp

The build runs on eight literal steps plus four clamps. Nothing else ships.

| step | role |
|---|---|
| **11.5px** | gauge labels, nav links, field labels, error text, footer links, annotation captions |
| **12.5px** | buttons, ghost links, annotation dates |
| **13.5px** | fine prose — footer disclaimer, field hint, consent copy, submit label |
| **15px** | *off-step straggler*: `footer.method-note .sig` only |
| **16.5px** | body prose, base font size, trace verdict |
| **17.5px** | lede, header name, form inputs |
| **21px** | step titles |
| **27px** | step indices and credential stamps |
| clamps | `clamp(40px, 7.4vw, 92px)` hero · `clamp(30px, 4.6vw, 56px)` lead reading · `clamp(23px, 2.7vw, 33px)` reading · `clamp(26–30px, 3.4–5vw, 40–60px)` station headings |

### Hierarchy
- **Display** (700, `clamp(40px, 7.4vw, 92px)`, 1.02, `-0.035em`, width 82%): the hero headline only, capped at 13ch.
- **Headline** (700, `clamp(...)` between 26px and 60px, 1.02): station headings and the form page's h1, held to 15–19ch.
- **Reading** (700, `clamp(23px, 2.7vw, 33px)`; lead reading `clamp(30px, 4.6vw, 56px)`): Station 01's three arguments. The lead reading's rank is expressed only by this jump in size.
- **Title** (700, 21px, 1.02): method step headings.
- **Stamp** (700, 27px, `-0.02em`, width 82%, Archivo): step indices and credential plates — indices set in the display face at monument scale so vermilion is legible.
- **Lede** (400, 17.5px, 1.65): the paragraph under a display or page headline, in the ground's label color; also the form's input text.
- **Body** (400, 16.5px, 1.65, tabular numerals): all prose, capped 54–68ch.
- **Fine** (400, 13.5px, 1.7): disclaimer, field hint, consent label.
- **Label / Gauge** (500, 11.5px, `0.16em`, uppercase, mono): station index, reading descriptor, credential caption, field counter, nav, error.
- **Control** (600, 12.5px, `0.13em`, uppercase, mono): buttons and ghost links.
- **Annotation** (700, 12.5px, `0.09em`, mono, over an 11.5px caption in label color): the trace's dated events.

### Named Rules

**The Eight-Step Rule.** The ramp is 11.5 / 12.5 / 13.5 / 16.5 / 17.5 / 21 / 27 plus the four clamps. A new surface picks a step; it does not introduce a neighbor value. The build carries exactly one straggler, `footer.method-note .sig` at 15px — it is recorded, not blessed; new work uses 16.5px there.

**The Mono-Is-Measurement Rule.** Azeret Mono is reserved for measure, date, index and control text (buttons, nav, field labels, small links, error strings, trace annotations). Prose is always Archivo — including the footer disclaimer and the field hints, which were moved out of mono precisely because they are prose. Never set a sentence in mono.

**The Condensed-Monument Rule.** Every heading uses `font-stretch: 82%`, weight 700, `line-height: 1.02`, `letter-spacing: -0.035em`. Headings are not a separate face; they are the same face driven to its condensed, tight extreme.

**The Scale-Carries-Rank Rule.** Dominance inside a list is expressed by type scale alone. A row does not get a marginal label, an eyebrow, a kicker, an index or a box to announce that it matters. The gauge is for index, date, measure and count only — if the text is a descriptive phrase, it is not a gauge.

**The Measure Rule.** Every prose block carries a `ch` cap (54–68ch; 46ch for the confirmation state). The record has to be readable or it is not a record.

## Layout

**Container:** `.wrap`, max-width 1240px, centered, 32px inline padding (20px at ≤720px). A fixed 13px rail (9px at ≤720px) hugs the left viewport edge and the body reserves its width with a matching `padding-left`, so content clears the rail rather than sliding under it.

**Stations:** a stack of `.station` sections, each one a full ground. Every station opens with a full-bleed 26px `.ruler` — a repeating 1px tick pattern with a 200px major-tick band — carrying an inline identification block (`Est. 00` plus a short descriptor) set on an opaque patch of the station's own ground so the ticks break around it. Anchor jumps use `scroll-margin-top: 68px` to clear the sticky header.

**Full-bleed exception:** the hero trace figure sits outside `.wrap` and spans the whole viewport width; only its legend re-enters the container. The record does not fit in a container.

**Rhythm:** station bodies use `padding-block: 78px 92px` (96px/104px for the close, 56px top for the hero), falling to 54px/64px at ≤720px. Rows inside a station are separated by a 1px hairline with 22–46px of block padding; the first row in every list drops its rule and its top padding.

**Row shapes:** Station 01's readings are a single column — full-measure heading over paragraph, divided by hairlines, ranked by size. Station 02's method steps keep a `108px 1fr` marginal grid because that column carries a real index (`01`–`04`). Station 03 is `1.35fr 1fr` with a 76px gap. At ≤900px the about grid and footer collapse to one column; at ≤720px the step grid collapses to one column.

**Annotation band:** `.trace-figure` reserves 46px of `padding-top` (68px narrow) and an absolutely positioned `.annots` band sits in it. Labels are placed by percentage `left`, offset 9px past their tick; `.annot.flip` right-aligns the label that would otherwise overrun the viewport edge. At ≤720px the middle annotation drops to a second row (`bottom: 27px`) because fixed-size labels collide at phone width.

**Breakpoints:** 900px (two-column collapse) and 720px (narrow mode: rail 9px, wrap padding 20px, narrow trace with the taller label band).

### Named Rules

**The padding-block Rule.** `.wrap` supplies the inline padding. Section spacing must therefore be written as `padding-block`, never the `padding` shorthand, which silently zeroes the horizontal padding and pushes content to the viewport edge. This regression shipped twice during the build; treat the shorthand as forbidden on any element that carries `.wrap` or wraps one.

**The Legible-Record Rule.** A record's labels are fixed-size HTML text, never `<text>` inside a scaling viewBox. The trace annotations were SVG text and fell below 11px across the entire 721–1000px band; they are now real, selectable HTML at 12.5px/11.5px, positioned over the figure by percentage, and they do not scale with the drawing. The trace itself still ships in two authored versions — a 1440×300 viewBox above 720px and a 480×250 below — carrying the same three dated events, with the narrow one dropping the event captions and staggering the middle label. Only the drawing may scale; the reading never does.

## Elevation & Depth

There are no shadows in this system — not one `box-shadow`, not one `drop-shadow`, not one gradient, not one blur. Depth is entirely material and tonal: the ground changes wholesale between stations, the deep-soot rail and footer sit visibly *under* the drum, and the grain tokens give each ground physical presence at the pixel level. Layering that would elsewhere be a raised card is here either a ground swap or a hairline. Sticky elements (the header, the rail) separate from content with a 1px rule and their own opaque ground, never with a shade. (The drum's tonal range is currently flat across its height; see the ceiling note in Overview.)

**Motion.** One cadence: `--tick` 260ms for every state transition, `--sweep` 2200ms for the single authored moment, one easing curve `cubic-bezier(0.16, 1, 0.3, 1)`. The authored moment is the stylus sweep — the trace path animates its `stroke-dashoffset` once and the three annotation groups (tick and label together) surface behind it at 760/1320/1760ms. The trace and its labels ship **visible in HTML**; JS measures the path and adds `.armed` to opt into the animation, and `prefers-reduced-motion` both skips the arming and force-resets stroke and opacity. Nothing on this site is invisible until JavaScript runs.

### Named Rules

**The Flat-Instrument Rule.** No shadow, no gradient, no blur, no translucency. If an element needs to read as separate, give it the other ground or a 1px rule.

**The One-Moment Rule.** The page authors exactly one animation: the stylus sweep. Every other movement is a 260ms color or border-color transition on hover/focus. No scroll reveals, no parallax, no staggered entrances anywhere else.

## Shapes

Zero radius, everywhere and without exception — `border-radius: 0` is asserted explicitly on inputs and selects to defeat UA defaults. The vocabulary is rules and rectangles: the 1px hairline (graphite on soot, paper-rule on bone) as divider, underline, focus underline and hover indicator; hard 6px vermilion squares as calibration marks; 1.5px vermilion ticks dropping from the top of the trace to the event; a 17px square checkbox that fills with a 9px vermilion square. Icons are hairline SVG strokes at 14–15px with `stroke-width: 1.5` and `stroke-linecap: square` — drawn geometry, never a glyph font. The trace itself is a 1–1.4px non-scaling stroke over a 2/6 dashed baseline.

**The One-Frame Rule.** A 1px line is the only frame this system has. No card, no panel, no bordered box, no rounded corner, no outline other than the focus ring.

## Components

### Buttons
- **Shape:** hard rectangle (`{rounded.none}`), 1px border always declared so bordered and filled variants share a box.
- **Primary ("mark"):** deep vermilion ground, stylus text, mono uppercase control type at 12.5px/0.13em, 16px 26px padding.
- **Hover:** the ground darkens to `#9e2915` and the border rises to full vermilion, over 260ms — the state is signalled by the rule, because brightening the ground would have cost the label its contrast. Focus uses the global 2px vermilion ring at 3px offset.
- **Secondary ("rule"):** transparent ground, graphite hairline border, stylus text; hover raises the border to stylus. On paper it inverts to a paper-rule border with ink text and an ink border on hover.
- **Ghost link ("link-rule"):** mono uppercase 12.5px in label grey with a transparent bottom hairline; hover turns text to stylus and the underline to vermilion.
- **Submit:** the primary at full width, centered, 19px 26px, 13.5px type; `aria-busy` drops it to 0.72 opacity and disables pointer events during the WhatsApp handoff.

### Inputs / Fields
- **Style:** ruled baselines, not boxes — transparent ground, no border except a 1px paper-rule bottom edge, ink text in Archivo at 17.5px, `appearance: none`, radius forced to 0. The select carries an inline SVG chevron stroked in deep vermilion.
- **Focus:** the underline thickens to 2px in deep vermilion and the bottom padding drops by 1px so the text does not shift — the stylus pressing harder on the paper.
- **Label:** mono uppercase 11.5px/0.15em in label umber, a baseline-aligned row with a `01 / 03` counter pushed to the right edge of the field.
- **Hint:** Archivo 13.5px in label umber (prose, so not mono).
- **Error:** `.bad` on the wrapper turns the underline deep vermilion and reveals a mono 11.5px deep-vermilion message; JS also sets `aria-invalid` and focuses the first offender.
- **Checkbox:** 17px square, transparent, 1px paper-rule border; checked scales a 9px deep-vermilion square in from 0 over 260ms.

### Navigation
Sticky 68px header on the station's ground with a bottom hairline. Left: the name in Archivo 700 at 17.5px with a mono credential gauge beside it. Right: mono uppercase 11.5px/0.13em links in label grey with a transparent bottom hairline; hover raises text to stylus and the underline to vermilion; the scroll-observed active link (`.act`) raises text to stylus only. Secondary links are dropped at ≤720px rather than folded into a menu — there is no hamburger and no drawer.

### Calibration Ruler
Every station opens with one. Full-bleed, 26px tall, a bottom hairline plus two repeating tick patterns (minor 40px, major 200px), with an identification block seated on the station's own ground so the ticks break cleanly around it. It carries a 6px vermilion square, a station index (`Est. 02`) and a short reading descriptor, all in gauge type.

### Position Rail
Fixed 13px column on the left viewport edge in deep soot with a graphite right edge. A 2px vermilion bar, extended by a 3px vertical spur, is translated down the rail in proportion to scroll progress on `requestAnimationFrame`. It is `aria-hidden` and `pointer-events: none`; the body reserves its width so nothing passes beneath it. It is currently the only element that registers the reader's position.

### Ruled Row
The system's replacement for a card, in two shapes. **Reading** (Station 01): single column, hairline above, heading over paragraph, no marginal column and no label — rank is size. **Step** (Station 02): `108px 1fr` with a 27px vermilion index in the margin, because that column carries a real number. Both drop the rule and the top padding on the first item.

### Seismograph Trace
The signature component. A full-bleed SVG record — dashed graphite baseline, stylus-colored 1.4px non-scaling path, one 1.5px vermilion tick per event dropping from the top of the frame — under an HTML annotation band that does not scale: each event is a mono 12.5px date over an 11.5px caption in label color, positioned by percentage, offset 9px past its tick, right-aligned via `.flip` at the trailing edge. Two authored versions, one per breakpoint; the narrow one drops captions and staggers the middle label. Below, a legend row separated by a soft hairline pairs a 16.5px stylus verdict with a gauge provenance note.

### Browser Surfaces
Treated as part of the design, not left to the UA: selection is vermilion with stylus text (deep vermilion on paper), `accent-color` and `caret-color` follow the ground's vermilion, `color-scheme` is set per page (`dark` on the landing, `light` on the sheet), the scrollbar is an 11px graphite thumb inset 3px on a deep-soot track, and `:focus-visible` is a 2px vermilion outline at 3px offset. Body copy runs `tabular-nums` throughout.

## Do's and Don'ts

### Do:
- **Do** build a new section as a `.station` on one of the two grounds, opened by a full-bleed calibration ruler with its own index and descriptor.
- **Do** write section spacing as `padding-block` (78px/92px standard) and let `.wrap` own the inline padding.
- **Do** separate rows with a single 1px hairline in the ground's rule color, dropping the rule and the top padding on the first row.
- **Do** rank a row by type scale; give it a marginal column only when that column carries a real index or measure.
- **Do** keep vermilion at ≥27px, or in a rule/mark, when it sits on soot; use `{colors.vermilion-deep}` for button grounds and any small vermilion text, and signal hover on the border when the ground can't move without costing contrast.
- **Do** pick a size from the eight-step ramp (11.5 / 12.5 / 13.5 / 16.5 / 17.5 / 21 / 27 + clamps).
- **Do** set indices, dates, counters, buttons, nav and field labels in Azeret Mono uppercase at 0.09–0.16em, and everything sentence-shaped in Archivo.
- **Do** cap prose at 54–68ch and headings at 13–22ch.
- **Do** ship content visible in HTML and let JS opt into motion, honoring `prefers-reduced-motion`.
- **Do** keep chart labels as fixed-size HTML over the figure, and author a second version of a data figure when it cannot stay legible at a narrow width.
- **Do** draw icons as 14–15px hairline SVG paths with square caps.

### Don't:
- **Don't** introduce a third ground, a tint, a gradient, or a translucent panel. Two grounds, both whole.
- **Don't** add a second hue. `#9e2915` is one component's hover ground, not a palette entry.
- **Don't** use `border-radius`, `box-shadow`, `backdrop-filter`, or `filter: blur` anywhere; the 1px rule is the only frame.
- **Don't** use the `padding` shorthand on any element that carries or wraps `.wrap` — it zeroes the inline padding silently.
- **Don't** put a descriptive phrase in a `.gauge` or in a marginal column. Gauges carry index, date, measure and count; an editorial label beside a heading is a kicker in instrument clothing and was removed from this build for exactly that reason.
- **Don't** set chart labels as SVG `<text>` inside a scaling viewBox.
- **Don't** set prose, hints, or disclaimers in Azeret Mono.
- **Don't** reuse `--grain` on the paper ground or `--grain-paper` on soot; each ground has its own token and blend mode.
- **Don't** add a second animated moment, a scroll reveal, or a duration outside `--tick` / `--sweep`.
- **Don't** introduce a size beside an existing step (no 15/16/17 alongside 16.5/17.5).
- **Don't** use icon fonts or emoji glyphs; every mark is drawn geometry or an inline SVG path.
- **Don't** invent social proof surfaces — testimonials, client counts, logo walls. There is no evidence on hand and the world has no component for it.
