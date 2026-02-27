# Tirak Video Assets

## Video Inventory

| Filename | Persona | Category | Duration | Size | Use Case |
|----------|---------|----------|----------|------|----------|
| `pim-culture.mp4` | Pim | Culture | ~10s | 4.3MB | Grand Palace - Category hero |
| `malee-island.mp4` | Malee | Adventure | ~10s | 4.6MB | Longtail boat - Category hero |
| `suda-spa.mp4` | Suda | Wellness | ~10s | 1.5MB | Spa garden - Category hero |
| `nong-yoga.mp4` | Nong | Wellness | ~10s | 2.0MB | Yoga sunset - Secondary/loop |
| `tun-rooftop.mp4` | Tun | Nightlife | ~10s | 3.3MB | Rooftop bar - Category hero |
| `dao-beach.mp4` | Dao | Nightlife | ~10s | 3.1MB | Beach club - Category hero |
| `dao-beach-alt.mp4` | Dao | Nightlife | ~10s | 3.4MB | Beach club alt - Optional |
| `ton-party.mp4` | Ton | Events | ~10s | 6.8MB | Beach party - Category hero |
| `niran-streetfood.mp4` | Niran | Food & Drink | ~10s | 3.0MB | Street food - Category hero |
| `som-cooking.mp4` | Som | Food & Drink | ~10s | 4.3MB | Cooking class - Category hero |

**Total unique videos: 10**

## Recommended Usage

### Main Index Page (Selective)
- Use **ONE** hero video background (muted, looping)
- Best candidates: `malee-island.mp4` or `tun-rooftop.mp4`
- Fallback to static image on mobile

### Category Pages (Looping Videos)
Each category page gets a looping background video:
- **Culture**: `pim-culture.mp4`
- **Adventure**: `malee-island.mp4`
- **Wellness**: `suda-spa.mp4` (or `nong-yoga.mp4` as alt)
- **Nightlife**: `tun-rooftop.mp4` (or `dao-beach.mp4` as alt)
- **Events**: `ton-party.mp4`
- **Food & Drink**: `niran-streetfood.mp4` (or `som-cooking.mp4` as alt)

### Implementation Notes
- All videos are 784x1168 (portrait) - perfect for mobile
- 24fps, ~10 seconds, loop seamlessly
- Poster images provided for loading states
- Videos should be muted and autoplay on category pages
- Use `playsInline` attribute for iOS

## Optional Videos
- `dao-beach-alt.mp4` - Alternative angle of Dao (beach club)
- `nong-yoga.mp4` - Alternative wellness video
- `som-cooking.mp4` - Alternative for Food & Drink
