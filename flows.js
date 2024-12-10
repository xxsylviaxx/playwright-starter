export default { artilleryFunction };
 
async function artilleryFunction(page) {

  await page.goto('https://www.artillery.io/');
  await page.locator('text=Docs').click();
};