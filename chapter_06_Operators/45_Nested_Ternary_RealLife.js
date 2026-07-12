// Real-life Automation Scenarios: Nested Ternary Operator
// File: 45_Nested_Ternary_RealLife.js
// Each scenario shows multiple input → output examples

// ================================================================
// Scenario 1: Determine test environment config
// ================================================================
console.log("========== Scenario 1: Base URL by Environment ==========");

function getBaseUrl(env) {
  return env === "prod" ? "https://example.com"
    : env === "staging" ? "https://staging.example.com"
      : "https://dev.example.com";
}

console.log("Input: prod    → Output:", getBaseUrl("prod"));    // https://example.com
console.log("Input: staging → Output:", getBaseUrl("staging")); // https://staging.example.com
console.log("Input: dev     → Output:", getBaseUrl("dev"));     // https://dev.example.com
console.log("Input: qa      → Output:", getBaseUrl("qa"));     // https://dev.example.com (default)

// ================================================================
// Scenario 2: Select timeout based on test type
// ================================================================
console.log("\n========== Scenario 2: Timeout by Test Type ==========");

function getTimeout(testType) {
  return testType === "smoke" ? 5000
    : testType === "regression" ? 15000
      : testType === "e2e" ? 30000
        : 10000;
}

console.log("Input: smoke      → Output:", getTimeout("smoke"), "ms");      // 5000
console.log("Input: regression → Output:", getTimeout("regression"), "ms"); // 15000
console.log("Input: e2e        → Output:", getTimeout("e2e"), "ms");        // 30000
console.log("Input: api        → Output:", getTimeout("api"), "ms");        // 10000 (default)

// Playwright usage example:
const timeout = getTimeout("smoke");
// test.setTimeout(timeout);

// ================================================================
// Scenario 3: Determine login credentials by role
// ================================================================
console.log("\n========== Scenario 3: Credentials by Role ==========");

function getCredentials(role) {
  return role === "admin" ? { user: "admin@co.com", pass: "Admin@123" }
    : role === "editor" ? { user: "editor@co.com", pass: "Edit@123" }
      : { user: "viewer@co.com", pass: "View@123" };
}

console.log("Input: admin  →", getCredentials("admin"));
console.log("Input: editor →", getCredentials("editor"));
console.log("Input: viewer →", getCredentials("viewer"));
console.log("Input: guest  →", getCredentials("guest")); // default = viewer

// Playwright usage example:
// await page.fill("#email", creds.user);
// await page.fill("#password", creds.pass);

// ================================================================
// Scenario 4: Set browser launch options dynamically
// ================================================================
console.log("\n========== Scenario 4: Browser Launch Options ==========");

function getLaunchOptions(browserType, headless) {
  return browserType === "chrome" ? { channel: "chrome", headless }
    : browserType === "firefox" ? { headless }
      : browserType === "edge" ? { channel: "msedge", headless }
        : { headless }; // safari
}

console.log("Input: chrome  →", getLaunchOptions("chrome", true));
console.log("Input: firefox →", getLaunchOptions("firefox", false));
console.log("Input: edge    →", getLaunchOptions("edge", true));
console.log("Input: safari  →", getLaunchOptions("safari", true));

// Playwright usage example:
// const browser = await chromium.launch(getLaunchOptions("chrome", true));

// ================================================================
// Scenario 5: Pick mobile viewport by device name
// ================================================================
console.log("\n========== Scenario 5: Viewport by Device ==========");

function getViewport(device) {
  return device === "iPhone 14" ? { width: 390, height: 844 }
    : device === "Pixel 7" ? { width: 412, height: 915 }
      : device === "iPad" ? { width: 820, height: 1180 }
        : { width: 1280, height: 720 };
}

console.log("Input: iPhone 14 →", getViewport("iPhone 14"));
console.log("Input: Pixel 7   →", getViewport("Pixel 7"));
console.log("Input: iPad      →", getViewport("iPad"));
console.log("Input: desktop   →", getViewport("desktop"));

// Playwright usage example:
// await page.setViewportSize(getViewport("iPhone 14"));

// ================================================================
// Scenario 6: Set assertion timeout based on network condition
// ================================================================
console.log("\n========== Scenario 6: Assert Timeout by Network ==========");

function getAssertTimeout(network) {
  return network === "fast" ? 3000
    : network === "medium" ? 7000
      : network === "slow" ? 15000
        : 500; // offline
}

console.log("Input: fast    → Output:", getAssertTimeout("fast"), "ms");
console.log("Input: medium  → Output:", getAssertTimeout("medium"), "ms");
console.log("Input: slow    → Output:", getAssertTimeout("slow"), "ms");
console.log("Input: offline → Output:", getAssertTimeout("offline"), "ms");

// Playwright usage example:
// await expect(page.locator(".success")).toBeVisible({ timeout: getAssertTimeout("slow") });

// ================================================================
// Scenario 7: Decide screenshot strategy
// ================================================================
console.log("\n========== Scenario 7: Screenshot Strategy ==========");

function getScreenshotAction(step) {
  return step === "payment" ? "capture"
    : step === "checkout" ? "capture-on-failure"
      : "none";
}

console.log("Input: payment  → Output:", getScreenshotAction("payment"));
console.log("Input: checkout → Output:", getScreenshotAction("checkout"));
console.log("Input: login    → Output:", getScreenshotAction("login"));
console.log("Input: cart     → Output:", getScreenshotAction("cart"));

// Playwright usage example:
// const action = getScreenshotAction("payment");
// if (action === "capture") await page.screenshot({ path: "payment.png" });

// ================================================================
// Scenario 8: Map HTTP status to message
// ================================================================
console.log("\n========== Scenario 8: HTTP Status to Message ==========");

function getHttpMessage(code) {
  return code === 200 ? "OK"
    : code === 201 ? "Created"
      : code === 400 ? "Bad Request"
        : code === 401 ? "Unauthorized"
          : code === 404 ? "Not Found"
            : code === 500 ? "Internal Server Error"
              : "Unknown";
}

[200, 201, 400, 401, 404, 500, 999].forEach(code => {
  console.log("Input:", code, "→ Output:", getHttpMessage(code));
});

// Playwright usage example:
// const response = await page.goto(url);
// const msg = getHttpMessage(response.status());
// expect(msg).toBe("OK");

// ================================================================
// Scenario 9: Determine retry count for flaky tests
// ================================================================
console.log("\n========== Scenario 9: Retry Count by Test Priority ==========");

function getRetryCount(priority) {
  return priority === "critical" ? 3
    : priority === "high" ? 2
      : priority === "medium" ? 1
        : 0;
}

console.log("Input: critical → Output:", getRetryCount("critical"), "retries");
console.log("Input: high     → Output:", getRetryCount("high"), "retries");
console.log("Input: medium   → Output:", getRetryCount("medium"), "retries");
console.log("Input: low      → Output:", getRetryCount("low"), "retries");

// Playwright usage example:
// test.retries(getRetryCount("critical"));

// ================================================================
// Scenario 10: Select test data file based on region
// ================================================================
console.log("\n========== Scenario 10: Test Data by Region ==========");

function getTestDataFile(region) {
  return region === "US" ? "testdata/us_data.json"
    : region === "EU" ? "testdata/eu_data.json"
      : region === "APAC" ? "testdata/apac_data.json"
        : "testdata/default_data.json";
}

console.log("Input: US    → Output:", getTestDataFile("US"));
console.log("Input: EU    → Output:", getTestDataFile("EU"));
console.log("Input: APAC  → Output:", getTestDataFile("APAC"));
console.log("Input: IN    → Output:", getTestDataFile("IN"));
