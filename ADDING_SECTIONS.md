# Developer Guide: Adding New Sections

This guide outlines the best practices and techniques for adding new sections to the Concept King landing page while maintaining the premium design system.

## 1. Grid Background Support

To ensure a new section correctly displays the global grid background:
- **Avoid** `bg-white` or other opaque background classes on the main `<section>` tag.
- Use `bg-transparent` (default) or semi-transparent colors (e.g., `bg-blue-50/50`).
- If you need a solid background, consider adding a `.bg-grid` overlay div inside the section to maintain textural consistency.

```tsx
<section className="py-24 relative overflow-hidden bg-transparent">
  {/* The global grid will show through automatically */}
</section>
```

## 2. Using Premium Cards

For feature lists or content blocks, use the `.premium-card` utility class along with `lucide-react` icons.

```tsx
<div className="premium-card group hover:scale-[1.02] transition-all">
  <div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center">
    <IconName className="w-6 h-6 text-blue-600" />
  </div>
  <h3 className="text-xl font-bold mt-4">Feature Title</h3>
  <p className="text-slate-500 mt-2">Description goes here.</p>
</div>
```

## 3. Animations

Apply the following classes for a premium feel:
- `animate-fade-in`: For subtle entrance animations.
- `animate-fade-zoom`: For background images or large visual elements.
- `group-hover:translate-x-1`: For arrows and call-to-action buttons.

Always use staggered delays for list items using `style={{ animationDelay: '0.1s' }}`.

## 4. Typography Hierarchy

Maintain these standards for consistency:
- **Headings**: `text-4xl md:text-6xl font-black tracking-tight text-slate-900`.
- **Subheadings**: `text-blue-600 font-bold uppercase tracking-widest text-xs`.
- **Body Text**: `text-lg text-slate-500 leading-relaxed font-medium`.

## 5. Adding the Section to the Page

1. Create your component in `src/components/YourSection.tsx`.
2. Import it in `src/app/page.tsx`.
3. Place it within the main `<div className="flex flex-col ...">` wrapper.

---
*Created by Indivio. Maintain with precision.*
