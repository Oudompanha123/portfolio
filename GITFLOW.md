# Branching Model (GitFlow)

```
main        ─●────────────────●──────────────●───►   production (deployed by Jenkins)
              \                /              /
release/*      ●──────●──────●                      stabilize a release
                \              \
develop     ─●───●──●───●───●───●──●─────────●───►   integration branch
              \      \          /            /
feature/*      ●──●──●          hotfix/*  ──●
```

- **`main`** — always deployable. Every commit here is what Jenkins builds,
  scans, and deploys to production. Never commit directly; only merge from
  `release/*` or `hotfix/*`.
- **`develop`** — integration branch. Features land here first.
- **`feature/<name>`** — branched from `develop`, merged back into `develop`
  via PR when done. One feature per branch.
- **`release/<version>`** — branched from `develop` when preparing a release
  (final fixes, version bump). Merged into both `main` and back into
  `develop`, then tagged (e.g. `v1.1.0`) and deleted.
- **`hotfix/<name>`** — branched from `main` for an urgent production fix.
  Merged into both `main` and `develop`, then deleted.

## Day to day

```bash
git checkout develop
git checkout -b feature/my-thing
# ...commit...
git push -u origin feature/my-thing
# open a PR into develop
```

## Shipping a release

```bash
git checkout develop
git checkout -b release/1.1.0
# version bump / final fixes only
git checkout main && git merge --no-ff release/1.1.0 && git tag v1.1.0
git checkout develop && git merge --no-ff release/1.1.0
git push origin main develop --tags
git branch -d release/1.1.0
```

## Urgent production fix

```bash
git checkout main
git checkout -b hotfix/fix-thing
# ...fix...
git checkout main && git merge --no-ff hotfix/fix-thing
git checkout develop && git merge --no-ff hotfix/fix-thing
git push origin main develop
git branch -d hotfix/fix-thing
```
