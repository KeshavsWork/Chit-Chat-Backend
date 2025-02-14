export default ({ env }) => ({
  host: env("HOST", "0.0.0.0"),
  port: env.int("PORT", 8080),
  app: {
    keys: env.array("APP_KEYS", ["e3a5db8e6611671dc50c7bd0c062ef943b3a4481c317bf013e53d16ebf44af87", "e6c78c0400700d67fd9d0443b0b873f39a0b6d9412a54c321e01ef5a0907398a"]),
  },
});
