import puppeteer from "puppeteer";

export async function extractHref(params) {
  try {
    const link = params?.link;

    const browser = await puppeteer.launch({
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });
    const page = await browser.newPage();

    await page.goto(link);

    function getHrefAttribute(element) {
      if (!element && !element?.getAttribute) return null;

      return element.getAttribute("href");
    }

    const href = await page.$eval("#download-url", getHrefAttribute);

    await browser.close();

    return href;
  } catch (err) {
    console.log(err);
    return null;
  }
}
