Horizontal Bidirectional Gauge is a custom Lovelace card for Home Assistant that renders a horizontal bar gauge with a zero divider, designed for sensors with bidirectional values — such as energy import/export, temperature differentials, or any measurement that swings positive and negative.

Values fill left (negative) or right (positive) from the zero line, each with independently configurable colors, labels, and sizing. The card adapts to asymmetric ranges (e.g. -200 to +500) and supports inverted mode for flipped direction mappings.

Key features include smooth animation on value changes, optional entity icons, configurable precision, and full theming support via CSS variables. Works with any numeric sensor entity in Home Assistant 2023.1 and later.
