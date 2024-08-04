describe("Open application", () => {
  it("should open the app and navigate to the home screen", async () => {
    await $('//android.widget.TextView[@resource-id="com.fghilmany.dietmealapp:id/header_welcome"]').isDisplayed();
  });
});
