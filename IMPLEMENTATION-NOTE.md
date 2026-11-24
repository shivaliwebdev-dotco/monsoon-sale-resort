# Implementation note

The design uses a calm, premium resort aesthetic rather than a loud discount marketplace. Deep forest green, warm off-white and a restrained lime accent create seasonal contrast. Large editorial serif headlines bring personality, while compact sans-serif labels keep package details, prices and terms easy to scan.

The hero combines a full-width resort photograph with a dark gradient so the campaign headline and countdown remain legible. Each offer card follows the same information order: package name, stay length, crossed-out original price, sale price, percentage discount and explicit amount saved.

Offer cards animate into view through `IntersectionObserver`. Each card receives a CSS transition delay, creating a staggered entrance without an animation library. The countdown uses a fixed timestamp with an explicit India Standard Time offset, so the visitor's device timezone does not change the sale deadline.

On mobile, the booking CTA remains fixed to the bottom edge. Additional bottom padding keeps page content accessible above it. The layout uses responsive CSS breakpoints, native expandable FAQ elements and reduced-motion support.

The implementation uses plain HTML, CSS and JavaScript with no framework or heavy dependency. External images and Google Fonts keep this demo simple, but should be optimized and self-hosted for a production site. All resort names, prices, packages and booking email details are placeholders.
