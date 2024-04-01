import { test, expect, describe } from "vitest";
import { esBisiesto } from "./bisiesto";

describe("Prueba para comprobar si un año es bisiesto", () => {
  test("1995 no es bisiesto", () => {
    expect(esBisiesto(1995)).toBe(false);
  });
  test("2021 no es bisiesto", () => {
    expect(esBisiesto(2021)).toBe(false);
  });
  test("2024 es bisiesto", () => {
    expect(esBisiesto(2024)).toBe(true);
  });
});
