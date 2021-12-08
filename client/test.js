// Generated by Selenium IDE
const { Builder, By, Key, until } = require('selenium-webdriver')
const assert = require('assert')

describe('1', function() {
  this.timeout(30000)
  let driver
  let vars
  beforeEach(function() {
    driver = new Builder().forBrowser('chrome').build()
    vars = {}
  })
  afterEach(function() {
    driver.quit();
  })
  it('1', function() {
    driver.get("http://localhost:3000/")
    driver.manage().window().setRect({ width: 1440, height: 816 })
    driver.findElement(By.css(".MuiButton-contained:nth-child(2) > .MuiButton-label")).click()
    driver.findElement(By.css(".MuiButtonBase-root:nth-child(3) > .MuiButton-label")).click()
    driver.findElement(By.css(".MuiAvatar-fallback")).click()
    driver.findElement(By.css(".MuiButtonBase-root:nth-child(1) > .MuiTypography-root")).click()
    driver.findElement(By.css(".MuiAvatar-fallback")).click()
    driver.findElement(By.css(".MuiButtonBase-root:nth-child(2) > .MuiTypography-root")).click()
    driver.findElement(By.css(".nav_profile > .MuiButtonBase-root")).click()
    driver.findElement(By.css(".MuiButtonBase-root:nth-child(3) > .MuiTypography-root")).click()
  })
})
