# AI for VLSI: A Practical Guide to AI-Driven RTL Design and Verification

An ebook covering AI and machine learning applications in VLSI RTL design and verification, targeting working VLSI engineers.

## Quick Start

```bash
# Install dependencies
npm install

# Generate the PDF
npm run pdf

# Generate the cover image (for Gumroad thumbnail)
npm run pdf:cover
```

Output files are saved to the `output/` directory.

## Project Structure

- `index.html` -- The full ebook (all chapters in one file)
- `styles.css` -- Book styling for screen and print
- `cover.html` -- Cover page design
- `generate-pdf.js` -- PDF/cover export script
- `output/` -- Generated PDF and cover image

## Customization

1. **Author name**: Search for "Your Name Here" in `index.html` and `cover.html` and replace with your name
2. **Content**: Edit chapters directly in `index.html`
3. **Styling**: Modify `styles.css` to change fonts, colors, or layout
4. **Regenerate**: Run `npm run pdf` after any changes

## Selling on Gumroad

1. Run `npm run pdf` to generate the PDF
2. Run `npm run pdf:cover` to generate the cover image
3. Upload `output/AI-for-VLSI-Guide.pdf` as your product file on Gumroad
4. Upload `output/cover.png` as the product thumbnail
5. Set pricing: **$29** individual / **$49** team license (or "Pay What You Want" with $29 minimum)
6. Use the product description below

### Recommended Gumroad Product Description

**Title:** AI for VLSI: A Practical Guide to AI-Driven RTL Design and Verification

**Short description:**
The hands-on guide for VLSI engineers adopting AI/ML in RTL design, verification, and physical implementation.

**Full description:**

Stop Googling "ChatGPT for Verilog" and start shipping AI-augmented designs.

This is not an ML textbook. It is a practical, engineer-focused guide written for working RTL designers, verification engineers, and engineering managers who want to adopt AI tools effectively -- and avoid the hype.

**What you get (9 chapters + 5 appendices, ~80 pages):**

- How LLMs generate RTL, what they get wrong, and how to catch it before tapeout
- Prompt engineering specifically for SystemVerilog, VHDL, and EDA scripts -- with copy-paste templates
- ML-augmented verification: RL for coverage closure, assertion mining, testbench generation
- AI for formal verification: ML-guided provers, LLM-generated SVA, bounded model checking
- Complete survey of commercial tools (Synopsys DSO.ai, Cadence Cerebrus, Siemens Solido) with honest assessments
- NEW: Setting up AI coding rules, MCP (Model Context Protocol) for EDA tool integration, and reusable AI agent skills
- Prompt library with 8 ready-to-use templates (RTL generation, code review, SVA, testbench, SDC constraints, timing analysis, verification planning, FPGA-to-ASIC migration)
- AI rules reference: copy-paste .mdc files for configuring Cursor/VS Code for VLSI projects
- Data strategy, ROI measurement framework, and 18-month adoption roadmap

**Every claim is labeled:** Production Practice, Research Result, or Speculative Direction -- so you know what is shipping today versus what is still in the lab.

**Who this is for:**
- RTL designers using (or evaluating) LLMs for code generation
- Verification engineers looking to accelerate coverage closure
- Physical design engineers evaluating AI-driven P&R tools
- Engineering managers building the business case for AI adoption
- Anyone who wants to understand AI for chip design beyond the marketing slides

All references verified. All code examples tested. Updated for 2026.

### Pricing Strategy Notes

- **$29**: Accessible for individual engineers. After Gumroad's 10% + $0.50 fee, you net ~$25.60 per sale.
- **$49**: Team license tier. You net ~$43.60 per sale.
- **"Pay What You Want" with $29 minimum**: Captures enterprise buyers willing to pay $79-$99 while keeping the floor accessible.
- Gumroad handles all global sales tax automatically.
- At $29/copy, you need ~35 sales to clear $1,000. A niche VLSI audience on LinkedIn/Twitter can realistically drive 100-500 sales with good content marketing.
