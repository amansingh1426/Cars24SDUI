# SDUI Component Coverage

This document summarizes the SDUI components currently implemented in the project, along with their JSON type mappings and purpose.

## Supported Components

| Component | JSON Type | Implemented | Purpose |
| --- | --- | --- | --- |
| SearchBar | `searchBar` | Yes | Renders a search input field for filtering or searching content. |
| BannerCarousel | `bannerCarousel` | Yes | Displays a horizontally scrollable collection of banner images. |
| CategoryChips | `categoryChips` | Yes | Renders a horizontal row of category selection chips. |
| SectionTitle | `sectionTitle` | Yes | Displays a section heading for a block of content. |
| HorizontalRail | `horizontalRail` | Yes | Shows a horizontally scrollable rail of car cards. |
| CarCard | `carCard` | Yes | Displays a single car item with image, name, year, and price. |
| CTASection | `ctaSection` | Yes | Displays a promotional call-to-action section with a button. |
| Footer | `footer` | Yes | Renders a simple footer component for the screen. |
| UnknownComponent | `unknown` | Yes | Fallback component used when a component type is not registered or supported. |

## Unsupported / Graceful Fallback Components

| Component | JSON Type | Implemented | Purpose |
| --- | --- | --- | --- |
| VideoCarousel | `videoCarousel` | No | Not implemented as a dedicated component. It currently falls back to UnknownComponent when used in schema. |

## Coverage Notes

- The SDUI engine resolves components through the component registry.
- If a component type is not mapped, the renderer uses UnknownComponent as a safe fallback.
- The current schema uses the implemented components for the home screen experience.
