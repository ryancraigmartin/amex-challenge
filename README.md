Things I would add with more time:

1. Extended tsconfig rulesets based on recommended settings from related projects in the org.
2. ESLint + Prettier scripts wired up for local development and within CI/CD.
3. Testing with the preferred framework and a small suite around the cache functionality.
4. GitHub Actions running install, typecheck, test, and build on every PR.
5. Update all dependencies to match either the latest version or the latest allowed versions within the org.
6. Set node to a specific version within the package.json.


Known issues:

1. No request deduplication at the moment.
2. Better error handling and monitoring around cache misses and network failures.
3. Cache expiration is not implemented.

