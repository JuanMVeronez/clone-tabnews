describe("GET to /api/v1/status", () => {
  let response;
  let responseBody;
  beforeAll(async () => {
    response = await fetch("http://localhost:3000/api/v1/status");
    responseBody = await response.json();
  }, 10000);

  it("should return 200", async () => {
    expect(response.status).toBe(200);
  }, 10000);

  it("should return correct updated_at", async () => {
    expect(responseBody.updated_at).toBeDefined();

    const parsedUpdatedAt = new Date(responseBody.updated_at).toISOString();
    expect(responseBody.updated_at).toBe(parsedUpdatedAt);
  }, 10000);

  it("should return database version", () => {
    const databaseVersion = responseBody.dependencies.database.version;

    expect(databaseVersion).toBe("16.0");
  }, 10000);

  it("should return database max number of connections", () => {
    const maxConnections = responseBody.dependencies.database.max_connections;

    expect(maxConnections).toBe(100);
  }, 10000);

  it("should return database number of upened connections", () => {
    const usedConnections =
      responseBody.dependencies.database.upened_connections;

    expect(usedConnections).toBe(1);
  }, 10000);
});
