import { describe, expect, it } from "vitest";
import { profile, services, testimonials, faqs } from "./profile";

describe("profile data integrity", () => {
  it("has required contact fields filled in", () => {
    expect(profile.whatsappUrl).toMatch(/^https:\/\//);
    expect(profile.instagramUrl).toMatch(/^https:\/\//);
    expect(profile.bookingUrl).toMatch(/^https:\/\//);
  });

  it("closes on Sunday and opens Monday to Saturday", () => {
    expect(profile.hours).toEqual([
      { day: "Segunda a sábado", time: "08:00 – 20:00" },
      { day: "Domingo", time: "Fechado" },
    ]);
  });

  it("every service has a non-empty name, description and duration", () => {
    for (const service of services) {
      expect(service.name.length).toBeGreaterThan(0);
      expect(service.description.length).toBeGreaterThan(0);
      expect(service.duration).toMatch(/\d+ min/);
    }
  });

  it("includes the three newly added services with confirmed durations", () => {
    const byId = Object.fromEntries(services.map((s) => [s.id, s]));
    expect(byId.colorimetria?.duration).toBe("20 min");
    expect(byId.depilacao?.duration).toBe("10 min");
    expect(byId.barbaterapia?.duration).toBe("30 min");
  });

  it("has at least one testimonial and one faq", () => {
    expect(testimonials.length).toBeGreaterThan(0);
    expect(faqs.length).toBeGreaterThan(0);
  });
});
