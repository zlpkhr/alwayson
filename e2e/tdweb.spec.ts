import { test, expect } from "@playwright/test";
import type { TdObject, TdError } from "tdweb";

function isTdError(result: TdObject | TdError): result is TdError {
  return result["@type"] === "error";
}

test("tdweb loads, client initializes, and sends a query", async ({ page }) => {
  await page.goto("/");

  const hasTdWeb = await page.evaluate(
    () => typeof window.tdweb !== "undefined",
  );
  expect(hasTdWeb).toBe(true);

  const result = await page.evaluate(async () => {
    const tdClient = new window.tdweb.default({});

    return await tdClient.send({
      "@type": "getOption",
      name: "version",
    });
  });

  if (isTdError(result)) {
    throw new Error(result.message);
  }

  expect(result["@type"]).toBe("optionValueString");
  expect(result["value"]).toBe("1.8.50");
});
