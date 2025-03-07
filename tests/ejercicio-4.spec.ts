import { describe, expect, test, vi } from "vitest";
import { Printer, Scanner, PrinterScanner } from "../src/ejercicio-4/printer";

describe("Printer class tests", () => {
  test("Printer should print correctly", () => {
    const printer = new Printer();
    const consoleSpy = vi.spyOn(console, "log");

    printer.print();
    expect(consoleSpy).toHaveBeenCalledWith("Printing...");
  });
});

describe("Scanner class tests", () => {
  test("Scanner should scan correctly", () => {
    const scanner = new Scanner();
    const consoleSpy = vi.spyOn(console, "log");

    scanner.scan();
    expect(consoleSpy).toHaveBeenCalledWith("Scanning...");
  });
});

describe("PrinterScanner class tests", () => {
  test("PrinterScanner should print and scan correctly", () => {
    const printerScanner = new PrinterScanner();
    const consoleSpy = vi.spyOn(console, "log");

    printerScanner.print();
    expect(consoleSpy).toHaveBeenCalledWith("Printing...");
    
    printerScanner.scan();
    expect(consoleSpy).toHaveBeenCalledWith("Scanning...");
  });
});
